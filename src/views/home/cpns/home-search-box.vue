<script lang="ts" setup>
  import HomeDateBox from "./home-date-box.vue";
  import Location from "./location.vue";
  import HotSuggest from "./hot-suggests.vue";
</script>
<template>
  <div class="search-box">
    <location />
    <home-date-box />
    <div class="conditions">
      <div>价格不限</div>
      <div>人数不限</div>
    </div>
    <div class="tips">关键字/位置/名宿名</div>
    <hot-suggest />
    <div class="search-btn">开始搜索</div>
  </div>
</template>

<style lang="sass" scoped>
  @import "@/assets/css/common.sass"
  .search-box

    .conditions
      display: flex
      justify-content: space-between
      margin: 0 auto
      width: 80vw
      color: #ccc
      padding-top: 8px
      font-size: 13px

    .tips
      padding: 16px 0 0 8px
      color: #ccc
      font-size: 14px

    .search-btn
      width: 90vw
      height: 42px
      background-color: $main-theme
      text-align: center
      line-height: 42px
      margin: 12px auto
      border-radius: 24px
      color: #fff
</style>
