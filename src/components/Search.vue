<template>
  <div class="search-box rounded-3 bg-dark position-relative">
    <div class="d-flex">
      <h5 class="me-3 text-secondary">下班後來兜風，找單車站 . . .</h5>
      <img alt="bike" src="@/assets/images/icon_bike.svg">
    </div>
    <div class="d-flex my-3">
      <input type="text" class="form-control me-2 shadow-sm" placeholder="請輸入單車站" aria-label="bike station" aria-describedby="search">
      <button class="btn btn-primary shadow" type="button" id="search">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      </button>
    </div>
    <div>
      <button class="tag rounded-pill btn btn-outline-info">市政府</button>
    </div>
  </div>
</template>

<style lang="scss">
  .search-box {
    max-width: 452px;
    padding: 24px;
    z-index: 1100;
    margin: 40px;
  }
  .tag {
    font-size: 14px;
    padding: 4px 14px;
  }
</style>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
