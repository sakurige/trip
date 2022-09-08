<script lang="ts" setup>
  import TabBar from "./components/tab-bar/tab-bar.vue";
  import Loading from "./components/loading/loading.vue";
</script>

<template>
  <!-- 对路由进行优化减少网络请求 -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <loading />
  <tab-bar />
</template>

<style scoped></style>
