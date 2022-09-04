<script lang="ts" setup>
  import useHomeStore from "@/stores/modules/home";
  import { storeToRefs } from "pinia";
  import HouseListItemV1 from "@/components/house-list-item-v1/index.vue";
  import HouseListItemV2 from "@/components/house-list-item-v2/index.vue";

  const homeStore = useHomeStore();
  const { houseList } = storeToRefs(homeStore);
</script>
<template>
  <div class="house-list">
    <h2 class="title">精选商品</h2>
    <template v-for="item in houseList">
      <house-list-item-v1
        v-if="item.discoveryContentType === 3"
        :data="item.data"
      />
      <house-list-item-v2
        v-else-if="item.discoveryContentType === 9"
        :data="item.data"
      />
    </template>
  </div>
</template>
<style lang="sass" scoped>
  .house-list
    display: flex
    flex-wrap: wrap
    font-size: 12px
    justify-content: space-evenly
    overflow-y: auto

    .title
      width: 100vw
      padding: 10px 0 10px 10px
</style>
