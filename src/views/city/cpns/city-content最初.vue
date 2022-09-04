<script lang="ts" setup>
  import type { PropType } from "vue";
  import type { CityGroup } from "@/services/modules/types/city";

  defineProps({
    currentCityGroup: {
      type: Object as PropType<CityGroup>,
      required: true,
    },
  });
</script>
<template>
  <div class="city-content">
    <div>热门</div>
    <template v-for="item in currentCityGroup?.hotCities" :key="item.cityId">
      <span class="city-name">{{ item.cityName }}</span>
    </template>
    <template v-for="item in currentCityGroup?.cities" :key="item.group">
      <div>{{ item.group }}</div>
      <template v-for="city in item.cities" :key="city.cityId">
        <div class="city-name">{{ city.cityName }}</div>
      </template>
    </template>
  </div>
</template>

<style lang="sass" scoped>
  .city-content
    height: calc(100vh - 98px)
    overflow-y: auto
</style>
