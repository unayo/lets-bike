<template>
  <div
    :class="look ? 'banner' : '' ">
    <div class="row position-relative">
      <div class="col-12 col-md-1 position-relative">
        <div class="nav align-items-center position-fixed">
          <router-link to="/" class="text-center">
            <img alt="logo" class="logo" src="@/assets/logo.png">
          </router-link>
          <router-link to="/where-to-go" class="box rounded-1">
            <img class="all-center" alt="map" src="@/assets/images/icon_map.svg">
          </router-link>
          <router-link to="/station" class="box rounded-1">
            <img class="all-center" alt="bike" src="@/assets/images/icon_bike.svg">
          </router-link>
          <router-link to="/route" class="box rounded-1">
            <img class="all-center" alt="route" src="@/assets/images/icon_route.svg">
          </router-link>
        </div>
      </div>
      <div class="col-12 col-md-11">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "assets/main.scss";

.nav {
  width: 90px;
  height: 100vh;
  background-color: #000000eb;
  padding-top: 20px;
  flex-direction: column;
  z-index: 1100;
}
.banner {
  background-image: url(./assets/images/banner.png);
  background-position: center center;
  background-size: cover;
}
.logo {
  width: 61px;
  padding-top: 20px;
  padding-bottom: 80px;
}
.box {
  min-width: 64px;
  min-height: 64px;
  position: relative;
  &:hover {
    background-color: #482107;
  }
  &:active {
    background-color: #482107;
  }
}
.all-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script>
export default {
  computed: {
    look () {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
