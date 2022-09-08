<script lang="ts" setup>
  import HomeNavBar from "./cpns/home-nav-bar.vue";
  import HomeSearchBox from "./cpns/home-search-box.vue";
  import HomeCategory from "@/views/home/cpns/home-category.vue";
  import HomeContent from "./cpns/home-content.vue";

  import useHomeStore from "@/stores/modules/home";
  import useCityStore from "@/stores/modules/city";

  const homeStore = useHomeStore();
  homeStore.fetchHomeCategory();
  homeStore.fetchHomeSuggest();
  homeStore.fetchHomeHouseList();
  const cityStore = useCityStore();
  cityStore.fetchAllCitiesData();
</script>
<template>
  <div class="Home">
    <home-nav-bar />
    <div class="banner">
      <img alt="" class="banner-img" src="@/assets/img/home/banner.jpg" />
    </div>
    <home-search-box />
    <home-category />
    <home-content />
  </div>
</template>
<style lang="sass" scoped>
  .banner-img
    width: 100%
</style>
