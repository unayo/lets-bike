<template>
  <div class="mt-40 container">
    <h2 class="text-white">自行車路線總覽</h2>
    <div id="mapRoute" class="mapStation rounded-2 border my-4"></div>
    <BikeRoute
      @emit-cityroute="getSelect"
      :card-item="apiBike">
    </BikeRoute>
  </div>
</template>

<style lang="scss">
  .mt-40 {
    margin-top: 40px;
  }
  .mapStation {
    height: 300px;
    width: 100%;
  }
  .leaflet-touch .leaflet-control-layers, .leaflet-touch .leaflet-bar {
    border: none;
  }
  .leaflet-bar {
    a {
      background-color: #213649;
      border: none;
      color: #B5B2A6;
    }
  }
  .leaflet-touch .leaflet-bar a:first-child {
    border-radius: 16px 16px 0 0;
    margin-bottom: 6px;
    height: 40px;
    width: 40px;
  }
  .leaflet-touch .leaflet-bar a:last-child {
    border-radius: 0 0 16px 16px;
    height: 40px;
    width: 40px;
  }
  .leafletIcon {
    background-image: url('../assets/images/marker.svg');
    background-size: contain;
    background-repeat: no-repeat;
    text-align: center;
    .number {
      font-size: 14px;
      line-height: 36px;
    }
  }
  .leaflet-top.leaflet-left {
    display: none;
  }
</style>

<script>
import L from 'leaflet'
import JsSHA from 'jssha'
import BikeRoute from '@/components/bikeRoute.vue'

export default {
  components: {
    BikeRoute
  },
  data () {
    return {
      getCitySelect: 'Taichung',
      mymap: null,
      nowLocation: {
        latitude: 25.047675,
        longitude: 121.517055
      },
      apiBike: []
    }
  },
  methods: {
    getSelect (text) {
      this.getCitySelect = text
      console.log('text接收', this.getCitySelect)
      this.getApiBike()
    },
    getMap () {
      this.mymap = L.map('mapRoute').setView([this.nowLocation.latitude, this.nowLocation.longitude], 15)

      L.tileLayer('https://api.mapbox.com/styles/v1/{username}/{style_id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 18,
        username: 'unayo',
        style_id: 'ckw6oruov0sl614pinxf6eb44',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoidW5heW8iLCJhIjoiY2t1d2EwNzZpMGh2aDJ3cmYwdWJnb2hudyJ9.XcnKuVJN2Q50urzdA594WQ'
      }).addTo(this.mymap)

      L.control.zoom({
        position: 'bottomright'
      }).addTo(this.mymap)
    },
    getApiBike () {
      // 指定縣市之自行車道路網圖資
      const urlBike = `https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape/${this.getCitySelect}?$format=JSON`
      this.$http.get(urlBike,
        {
          headers: this.apiID()
        })
        .then((res) => {
          this.apiBike = res.data
          console.log('縣市之自行車道路網圖資', this.apiBike)
          // 串接後，綁上 marker
          // this.setMarker()
        })
    },
    apiID () {
      // TDX API 驗證
      const AppID = process.env.VUE_APP_ID
      const AppKey = process.env.VUE_APP_KEY
      const GMTString = new Date().toGMTString()
      const ShaObj = new JsSHA('SHA-1', 'TEXT')
      ShaObj.setHMACKey(AppKey, 'TEXT')
      ShaObj.update('x-date: ' + GMTString)
      const HMAC = ShaObj.getHMAC('B64')
      const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`
      return { Authorization: Authorization, 'X-Date': GMTString }
    },
    setMarker () {
      this.apiBike.forEach((item) => {
        const MyIcon = new L.DivIcon({
          html: `<span class="number">${item.AvailableRentBikes}</span>`,
          className: 'leafletIcon',
          iconSize: [36, 44]
        })
        // [先緯度, 後經度]
        L.marker([item.StationPosition.PositionLat, item.StationPosition.PositionLon], { icon: MyIcon }).addTo(this.mymap)
      })
    }
  },
  // watch: {
  //   nowLocation: {
  //     handler (n) {
  //       this.mymap.setView([n.latitude, n.longitude], 17)
  //       this.getApiBike()
  //       console.log('new', n)
  //     },
  //     deep: true
  //   }
  // },
  mounted () {
    this.getApiBike()
    this.getMap()
  }
}
</script>
