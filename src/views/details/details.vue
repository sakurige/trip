<script lang="ts" setup>
  import { useRoute, useRouter } from "vue-router";
  import useDetailsStore from "@/stores/modules/details";
  import { storeToRefs } from "pinia";
  import { computed, onUnmounted } from "vue";
  import DetailsSwiper from "./cpns/details-swiper.vue";
  import DetailsInfo from "@/views/details/cpns/details-info.vue";
  import type { MainPart, Root } from "@/services/modules/types/details";

  const router = useRouter();
  const route = useRoute();
  const detailsStore = useDetailsStore();
  detailsStore.fetchDetailsData(route.params.id);

  // 导航栏点击事件
  const onClickLeft = () => {
    router.back();
  };
  //  轮播部分
  const { mes, mainPart, detailsData } = storeToRefs(detailsStore);
  const housePics = computed(
    () => mainPart.value?.topModule?.housePicture?.housePics
  );
  onUnmounted(() => {
    mainPart.value = {} as MainPart;
    detailsData.value = {} as Root;
  });

  //  info 部分
</script>
<template>
  <div class="details top-page">
    <van-nav-bar
      left-arrow
      left-text="返回"
      title="详情"
      @click-left="onClickLeft"
    />
    <div v-if="!mes" class="main">
      <template v-if="housePics">
        <details-swiper :house-pics="housePics" :mes="mes" />
      </template>
      <template v-if="housePics">
        <details-info :main-part="mainPart.topModule" />
      </template>
    </div>
    <div v-else>{{ mes }}</div>
  </div>
</template>
<style lang="sass" scoped>
  .main
    position: relative

    .my-swipe
      width: 100%

      img
        width: 100%

      .custom-indicator
        position: absolute
        right: 20px
        font-size: 12px
        bottom: 20px

        background-color: rgba(0, 0, 0, 50)
        display: flex

        .custom-indicator-item
          margin-left: 8px
          padding: 2px
          color: #039be5

        .active
          background-color: #fff
</style>
