<script lang="ts" setup>
  import { ref } from "vue";
  import { storeToRefs } from "pinia";
  import { useRouter } from "vue-router";
  import useCityStore from "@/stores/modules/city";
  // 从pinia中获取city相关数据
  const cityStore = useCityStore();
  cityStore.fetchAllCitiesData();
  // 结构出city
  const { city: cities } = storeToRefs(cityStore);

  const router = useRouter();
  // 绑定输入框内容
  const searchValue = ref("");
  //确定当前活动tab
  const activeTab = ref();
  //路由跳转
  // const currentCityGroup = cities[]
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
      <template v-for="item in cities" :key="item.title">
        <van-tab :title="item.title">
          <div>热门</div>
          <template v-for="i in item.hotCities" :key="item.cityId">
            <span>{{ i.cityName }}</span>
            {{ item.cities.group }}
          </template>
          <template v-for="(city, idx) in item.cities" :key="city.cityId">
            <div>{{ item.cities[idx].group }}</div>
            <template v-for="c in item.cities[idx].cities">
              <span>{{ c.cityName }}</span>
            </template>
          </template>
        </van-tab>
      </template>
    </van-tabs>
  </div>
</template>
<style lang="sass" scoped></style>
