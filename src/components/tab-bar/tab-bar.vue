<script lang="ts" setup>
  import { ref, watch } from "vue";
  import { useRoute } from "vue-router";
  import tabBarData from "@/assets/data/tab-bar-data";

  import TabBarItem from "./tab-bar-item.vue";

  const route = useRoute();

  const currentIdx = ref(0);
  const switchBar = (idx: number) => {
    // 改变当前idx
    currentIdx.value = idx;
  };
  //  路由BUG处理 直接在地址栏中输入路由 tabbar 不改变的BUG
  watch(route, () => {
    currentIdx.value = tabBarData.findIndex((item) => {
      return item.path === route.path;
    });
  });
</script>
<template>
  <div class="tab-bar">
    <template v-for="(item, idx) in tabBarData" :key="item.text">
      <tab-bar-item
        :idx="idx"
        :isActive="currentIdx === idx"
        :path="item.path"
        :text="item.text"
        :url="{ normalImg: item.img, activeImg: item.activeImg }"
        @switch-bar="switchBar"
      ></tab-bar-item>
    </template>
  </div>
</template>
<style lang="sass" scoped>
  .tab-bar
    position: fixed
    width: 100vw
    justify-content: space-evenly
    display: flex
    z-index: 13
    bottom: 0
    border-top: 1px solid #f0f0f0
    font-size: 12px
    background: #fff
</style>
