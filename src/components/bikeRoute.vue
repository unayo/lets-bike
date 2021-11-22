<template>
  <div class="row my-5">
    <div class="col-12 col-md-4 text-white">
      <div>
        <h5 class="fw-normal">依自行車道名稱</h5>
        <select
          v-model="bikeSelect"
          class="form-select my-3" aria-label="bike">
          <option value="" selected>選擇自行車道</option>
          <template v-for="item in cardItem" :key="item.en">
            <option :value="item.en">{{ item.RouteName }}</option>
          </template>
        </select>
        <div class="d-flex my-3">
          <input type="text" class="formInput form-control me-2 shadow-sm" placeholder="搜尋自行車道關鍵字" aria-label="bike keyword" aria-describedby="keyword">
          <button class="formBtn btn btn-primary shadow" type="button" id="keyword">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <span class="ms-2">查詢</span>
          </button>
        </div>
      </div>
      <div>
        <h5 class="fw-normal">依自行車道區域</h5>
        <select
          @change="emit"
          v-model="citySelect"
          class="form-select my-3" aria-label="country">
          <option value="" selected>縣市</option>
          <template v-for="item in city" :key="item.en">
            <option :value="item.en">{{ item.name }}</option>
          </template>
        </select>
        <select
          v-model="cityForTown"
          class="form-select my-3" aria-label="country">
          <option value="" selected>區域</option>
          <template v-for="item in forTown" :key="item">
            <option :value="item">{{ item }}</option>
          </template>
        </select>
        <div class="d-flex my-3">
          <input type="text" class="formInput form-control me-2 shadow-sm" placeholder="搜尋自行車道起點終點" aria-label="bike address" aria-describedby="address">
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
      <template v-for="item in cardItem" :key="item.StationUID">
        <div class="cardItem py-3">
          <div>
            <div class="d-flex align-items-start justify-content-between">
              <div>
                <p class="fs-5 text-white">{{ item.RouteName }}</p>
                <small>{{ item.City }}｜{{ item.Town }} {{ item.AuthorityName }}</small>
              </div>
              <small class="bg-count rounded-pill border">
                {{ item.Direction }}
              </small>
            </div>
          </div>
          <small class="text-address">起點：{{ item.RoadSectionStart}}  終點：{{ item.RoadSectionEnd }}</small>
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
    width: 48%;
    border-bottom: 1px solid #213649;
  }
  small {
    color: #9C9787;
  }
  .text-address {
    color: #747474;
  }
  .bg-count {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 14px;
  }
</style>

<script>
export default {
  props: {
    cardItem: {
      // api
      type: Object,
      default () {
        return { }
      }
    }
  },
  data () {
    return {
      bikeSelect: '',
      citySelect: '',
      cityForTown: '',
      data: [],
      forTown: [],
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
      this.$emit('emit-cityroute', this.citySelect)
      console.log('emit到外層', this.citySelect)
    }
  },
  watch: {
    citySelect (n) {
      // 選出城市篩選區域
      this.city.forEach((cityItem) => {
        if (cityItem.en === n) {
          console.log('this', cityItem.name)
          this.cardItem.forEach((item) => {
            console.log('herrrrr', item.Town)
            this.forTown.push(item.Town)
          })
        }
      })
    }
  }
}
</script>
