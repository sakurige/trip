<script lang="ts" setup>
  import { computed, ref } from "vue";
  import { storeToRefs } from "pinia";
  import { useRouter } from "vue-router";
  import useCityStore from "@/stores/modules/city";
  import CityContent from "./cpns/city-content.vue";

  // 从pinia中获取city相关数据
  const cityStore = useCityStore();
  if (!cityStore.city.cityGroup) {
    // 如果cityGroup不存在才发送请求
    cityStore.fetchAllCitiesData();
  }
  const router = useRouter();
  // 结构出city
  const { city: cities } = storeToRefs(cityStore);

  // 绑定输入框内容
  const searchValue = ref("");
  //确定当前活动tab
  const activeTab = ref("cityGroup");
  //路由跳转

  const currentCityGroup = computed(
    // 获取当前组
    () => cities.value[activeTab.value as keyof typeof cities.value]
  );
  const backClick = () => {
    router.back();
  };
</script>
<template>
  <div class="city top-page">
    <van-search
      v-model="searchValue"
      input-align="left"
      placeholder="城市/区域/位置"
      shape="round"
      show-action
      @cancel="backClick"
    />
    <van-tabs v-model:active="activeTab" color="#039be5">
      <template v-for="(item, key, idx) in cities" :key="item.title">
        <van-tab :name="key" :title="item.title"></van-tab>
      </template>
    </van-tabs>
    <city-content :current-city-group="currentCityGroup" />
  </div>
</template>
<style lang="sass" scoped></style>
