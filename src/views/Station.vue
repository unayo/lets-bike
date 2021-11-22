<template>
  <div class="mt-40 container">
    <h2 class="text-white">單車站總覽</h2>
    <div id="mapStation" class="mapStation rounded-2 border my-4"></div>
    <StationSearch
      @emit-city="getStation"
      :card-bike="apiBike">
    </StationSearch>
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
import StationSearch from '@/components/stationSearch.vue'

export default {
  components: {
    StationSearch
  },
  data () {
    return {
      getCitySelect: 'Taichung',
      mymap: null,
      nowLocation: {
        latitude: 25.047675,
        longitude: 121.517055
      },
      apiStation: [],
      // apiStation 只有租借站位資料
      apiBike: []
      // apiBike 即時車位加入租借站資料
    }
  },
  methods: {
    getStation (text) {
      this.getCitySelect = text
      console.log('text接收station', this.getCitySelect)
      this.getApiBike()
    },
    getMap () {
      this.mymap = L.map('mapStation').setView([this.nowLocation.latitude, this.nowLocation.longitude], 15)

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
    getApiStation () {
      // 指定縣市租借站位資料
      const urlStation = `https://ptx.transportdata.tw/MOTC/v2/Bike/Station/${this.getCitySelect}?$top=30&$format=JSON`
      this.$http.get(urlStation,
        {
          headers: this.apiID()
        })
        .then((res) => {
          this.apiStation = res.data
          // console.log('全臺公共自行車租借站位資料', this.apiStation)
        })
        .catch(error => {
          console.log('error', error.response)
        })
    },
    getApiBike () {
      this.getApiStation()
      // 指定縣市即時車位資料
      const urlBike = `https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/${this.getCitySelect}?$top=30&$format=JSON`
      this.$http.get(urlBike,
        {
          headers: this.apiID()
        })
        .then((res) => {
          const dataBike = res.data
          // 比對 id 在即時車位加入租借站位資料
          // 清空
          this.apiBike = []
          dataBike.forEach((bikeItem) => {
            this.apiStation.forEach((stationItem) => {
              if (bikeItem.StationUID === stationItem.StationUID) {
                bikeItem.StationName = stationItem.StationName
                bikeItem.StationPosition = stationItem.StationPosition
                bikeItem.StationAddress = stationItem.StationAddress
                bikeItem.StopDescription = stationItem.StopDescription
                bikeItem.BikesCapacity = stationItem.BikesCapacity
                this.apiBike.push(bikeItem)
              }
            })
          })
          console.log('總和 api 資料', this.apiBike)
          // 串接後，綁上 marker
          this.setMarker()
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
  mounted () {
    this.getApiBike()
    this.getMap()
  }
}
</script>
