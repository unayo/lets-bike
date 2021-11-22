<template>
  <div id="mapid" class="mapid"></div>
  <Search></Search>
  <button
    @click="geoBtn"
    type="button" class="pos-btn btn btn-dark rounded-circle">
    <img src="@/assets/images/icon-position.svg" alt="position icon">
  </button>
</template>

<style lang="scss">
  .mapid {
    position: absolute;
    height: 100vh;
    width: 100vw;
    left: 0;
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
  .pos-btn {
    position: absolute;
    z-index: 1100;
    right: 34px;
    bottom: 123px;
    width: 40px;
    height: 40px;
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &:hover {
      background-color: #f4f4f4;
      border-color: #f4f4f4;
      img {
        filter: brightness(0);
      }
    }
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
</style>

<script>
import L from 'leaflet'
import Search from '@/components/Search.vue'
import JsSHA from 'jssha'

export default {
  components: {
    Search
  },
  data () {
    return {
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
    // 取得當下位置
    geoBtn () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          console.log(position.coords.latitude)
          console.log(position.coords.longitude)
          // 重新定位
          this.nowLocation.latitude = position.coords.latitude
          this.nowLocation.longitude = position.coords.longitude
        },
        error => {
          console.log(error.message)
        })
      } else {
        console.log('Your browser does not support geolocation API')
      }
    },
    getMap () {
      this.mymap = L.map('mapid').setView([this.nowLocation.latitude, this.nowLocation.longitude], 15)

      L.tileLayer('https://api.mapbox.com/styles/v1/{username}/{style_id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
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
      // 取得指定[位置,範圍]的全臺公共自行車租借站位資料
      const urlStation = `https://ptx.transportdata.tw/MOTC/v2/Bike/Station/NearBy?$top=30&$spatialFilter=nearby(${this.nowLocation.latitude}, ${this.nowLocation.longitude}, 1000)&$format=JSON`
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
      // 全臺公共自行車即時車位資料
      const urlBike = `https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/NearBy?$top=30&$spatialFilter=nearby(${this.nowLocation.latitude}, ${this.nowLocation.longitude}, 1000)&$format=JSON`
      this.$http.get(urlBike,
        {
          headers: this.apiID()
        })
        .then((res) => {
          const dataBike = res.data
          // 比對 id 在即時車位加入租借站位資料
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
  watch: {
    nowLocation: {
      handler (n) {
        this.mymap.setView([n.latitude, n.longitude], 17)
        this.getApiBike()
        console.log('new', n)
      },
      deep: true
    }
  },
  mounted () {
    this.getMap()
    this.geoBtn()
    this.getApiBike()
  }
}
</script>
