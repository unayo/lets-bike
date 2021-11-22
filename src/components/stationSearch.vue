<template>
  <div class="row my-5">
    <div class="col-12 col-md-4 text-white">
      <div>
        <h5 class="fw-normal">依單車站名稱</h5>
        <div class="d-flex my-3">
          <input type="text" class="formInput form-control me-2 shadow-sm" placeholder="搜尋車站關鍵字" aria-label="station keyword" aria-describedby="keyword">
          <button class="formBtn btn btn-primary shadow" type="button" id="keyword">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <span class="ms-2">查詢</span>
          </button>
        </div>
      </div>
      <div>
        <h5 class="fw-normal">依單車站地址</h5>
        <select
          @change="emit"
          v-model="cityAddress"
          class="form-select my-3" aria-label="country">
          <option value="" selected>縣市</option>
          <template v-for="item in city" :key="item.en">
            <option :value="item.en">{{ item.name }}</option>
          </template>
        </select>
        <div class="d-flex my-3">
          <input type="text" class="formInput form-control me-2 shadow-sm" placeholder="搜尋地址關鍵字" aria-label="station address" aria-describedby="address">
          <button class="formBtn btn btn-primary shadow" type="button" id="address">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <span class="ms-2">查詢</span>
          </button>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-8 d-flex justify-content-between flex-wrap">
      <template v-for="item in cardBike" :key="item.StationUID">
        <div class="cardItem py-3">
          <div>
            <div class="d-flex align-items-center">
              <img class="me-3" src="@/assets/images/icon-station.svg" alt="station image">
              <div>
                <p class="fs-5 text-white">{{ item.StationName.Zh_tw }}</p>
                <div class="d-flex">
                  <small class="d-flex align-items-center text-success me-3">
                    <span class="circle-success me-2"></span>
                    正常營運
                  </small>
                  <small>YouBike1.0｜總數：30</small>
                </div>
              </div>
            </div>
            <small class="text-address">地址：忠孝東路/松仁路(東南側)</small>
          </div>
          <div>
            <div class="rent-color bg-count rounded-2 bg-dark">
              20
              <small>可租</small>
            </div>
            <div class="return-color bg-count rounded-2 bg-dark">
              10
              <small>可還</small>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
  .formInput {
    width: 69%;
  }
  .formBtn {
    width: 31%;
  }
  .cardItem {
    display: grid;
    grid-template-columns: 73% 25%;
    width: 46%;
    border-bottom: 1px solid #213649;
  }
  .circle-success {
    display: block;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: #92FF6B;
  }
  small {
    color: #9C9787;
  }
  .text-address {
    color: #747474;
  }
  .bg-count {
    font-size: 19px;
    width: 79px;
    height: 35px;
    margin: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    small {
      color: #406A90;
    }
  }
  .rent-color {
    color: #FFDD93;
  }
  .return-color {
    color: #ADCBE5;
  }
</style>

<script>
export default {
  props: {
    cardBike: {
      // api
      type: Object,
      default () {
        return { }
      }
    }
  },
  data () {
    return {
      cityAddress: 'Taichung',
      city: [
        {
          name: '臺中市',
          en: 'Taichung'
        },
        {
          name: '新竹市',
          en: 'Hsinchu'
        },
        {
          name: '苗栗縣',
          en: 'MiaoliCounty'
        },
        {
          name: '新北市',
          en: 'NewTaipei'
        },
        {
          name: '屏東縣',
          en: 'PingtungCounty'
        },
        {
          name: '金門縣',
          en: 'KinmenCounty'
        },
        {
          name: '桃園市',
          en: 'Taoyuan'
        },
        {
          name: '臺北市',
          en: 'Taipei'
        },
        {
          name: '高雄市',
          en: 'Kaohsiung'
        },
        {
          name: '臺南市',
          en: 'Tainan'
        },
        {
          name: '嘉義市',
          en: 'Chiayi'
        }
      ]
    }
  },
  methods: {
    emit () {
      this.$emit('emit-city', this.cityAddress)
      console.log('emit接收station', this.cardBike)
    }
  }
}
</script>
