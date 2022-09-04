<script lang="ts" setup>
  import type { PropType } from "vue";
  import { computed } from "vue";
  import type { City, CityGroup } from "@/services/modules/types/city";
  import useCityStore from "@/stores/modules/city";
  import router from "@/router";

  const props = defineProps({
    currentCityGroup: {
      type: Object as PropType<CityGroup>, // 设置Props类型
      required: true,
    },
  });
  const idxList = computed(() => {
    // 根据实际数据得到索引
    let indexList = props.currentCityGroup.cities.map((item) => item.group);
    indexList.unshift("#");
    return indexList;
  });
  const getCurrentCity = (city: City) => {
    // 根据点击的城市进行切换
    const cityStore = useCityStore();
    cityStore.changeCurrent(city);
    router.back();
  };
</script>
<template>
  <div class="city-content">
    <van-index-bar :index-list="idxList" highlight-color="#039be5">
      <van-index-anchor index="热门" />
      <div class="warp-box">
        <template v-for="item in currentCityGroup.hotCities" :key="item.cityId">
          <div class="hot-city" @click="getCurrentCity(item)">
            {{ item.cityName }}
          </div>
        </template>
      </div>
      <template v-for="item in currentCityGroup?.cities" :key="item.group">
        <van-index-anchor :index="item.group" />
        <template v-for="city in item.cities" :key="city.cityId">
          <van-cell :title="city.cityName" @click="getCurrentCity(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="sass" scoped>
  @import "@/assets/css/common.sass"
  .city-content
    height: calc(100vh - 98px)
    overflow-y: auto

    .warp-box
      display: flex
      flex-wrap: wrap
      justify-content: space-evenly
      margin: 0 auto
      width: 90vw
      height: 30vh
      text-align: center
      font-size: 14px


      .hot-city
        width: 70px
        height: 28px
        border-radius: 32px
        line-height: 28px
        background-color: #039be530
</style>
