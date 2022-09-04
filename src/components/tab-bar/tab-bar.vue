<script lang="ts" setup>
  import tabBarData from "@/assets/data/tab-bar-data";
  import { ref } from "vue";
  import TabBarItem from "./tab-bar-item.vue";

  const currentIdx = ref(0);
  const switchBar = (idx: number) => {
    // 改变当前idx
    currentIdx.value = idx;
  };
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
    z-index: 9999
    bottom: 0
    border-top: 1px solid #f0f0f0
    font-size: 12px
    background: #fff
</style>
