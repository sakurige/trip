<script lang="ts" setup>
  import useHomeStore from "@/stores/modules/home";
  import { storeToRefs } from "pinia";

  const homeStore = useHomeStore();
  homeStore.fetchHomeCategory();
  const { category } = storeToRefs(homeStore);
</script>
<template>
  <div class="category">
    <template v-for="item in category">
      <div class="item-box">
        <img :src="item.pictureUrl" alt="" />
        <span class="title">{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>
<style lang="sass">
  .category
    display: flex
    overflow: auto

    &::-webkit-scrollbar
      display: none

    .item-box
      flex-shrink: 0
      width: 70px
      display: flex
      align-items: center
      flex-direction: column

      img
        width: 32px
        height: 32px

      .title
        font-size: 12px
</style>
