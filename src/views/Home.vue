<template>
  <div class="container">
    <div class="content row text-white align-items-end">
      <div class="col-12 col-md-5 pb-5">
        <h1>Let's Bike, Your Road</h1>
        <p class="py-2">近年來因應健康、環保等開啟了騎自行車風潮，
          我們整理了各縣市的自行車路線，結合 Youbike 讓您快速規劃您的活動。</p>
        <router-link to="/route">
          <button class="btn btn-primary mb-4" style="width: 300px">規劃路線</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.content {
  height: 100vh;
}
</style>
