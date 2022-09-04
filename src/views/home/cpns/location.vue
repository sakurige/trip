<script lang="ts" setup>
  import { useRouter } from "vue-router";
  import useCityStore from "@/stores/modules/city";

  const router = useRouter();
  const cityStore = useCityStore();
  const getPosition = () => {
    // 获取经纬度
    navigator.geolocation.getCurrentPosition(
      (res) => console.log(res),
      (err) => {
        console.log(err);
      }
    );
  };
  const changeCity = () => {
    router.push("/city");
  };
</script>
<template>
  <div class="location">
    <div class="city" @click="changeCity">
      {{ cityStore.currentCity.cityName }}
    </div>
    <div class="position" @click="getPosition">
      <div class="text">我的位置</div>
      <img alt="" src="@/assets/img/home/local/location.png" />
    </div>
  </div>
</template>
<style lang="sass" scoped>
  .location
    font-size: 14px
    color: #757575
    display: flex
    width: 100%
    margin-top: 4px
    justify-content: space-between

    .city
      padding-left: 8px

    .position
      display: flex
      padding-right: 20px
      align-items: center

      img
        width: 24px
        padding-left: 6px
</style>
