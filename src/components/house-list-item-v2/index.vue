<script lang="ts" setup>
  import type { PropType } from "vue";
  import { defineProps } from "vue";
  import { type HouseListData } from "@/services/modules/types/home";

  defineProps({
    data: Object as PropType<HouseListData>,
  });
</script>
<template>
  <div class="house-list-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="data.image.url" alt="" />
      </div>
    </div>
    <div class="infos">
      <div class="summary">{{ data.summaryText }}</div>
      <div class="name">{{ data.houseName }}</div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
  .house-list-item
    position: relative
    width: 40vw
    height: auto
    color: #fff

    img
      width: 160px

    .infos
      position: absolute
      z-index: 13
      bottom: 45px
      width: 100%
      padding-left: 10px

      .name
        height: 28px
        width: 80%
        overflow: hidden
        font-weight: 900
        text-overflow: ellipsis
        display: -webkit-box
        -webkit-line-clamp: 2
        -webkit-box-orient: vertical
</style>
