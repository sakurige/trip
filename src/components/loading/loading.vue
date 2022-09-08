<script lang="ts" setup>
  import useMainStore from "@/stores/modules/main";

  const mainStore = useMainStore();
</script>
<template>
  <div
    v-if="mainStore.isLoading"
    class="loading"
    @click="mainStore.isLoading = false"
  >
    Loading...
  </div>
</template>
<style lang="sass" scoped>
  .loading
    display: flex
    justify-content: center
    align-items: center
    position: fixed
    top: 0
    z-index: 99999
    width: 100vw
    height: 100vh
    font-size: 22px
    color: #fff
    background-color: rgba(0, 0, 0, .5)
</style>
