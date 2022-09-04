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
      <div class="space">{{ data.location }}</div>
      <div class="summary">{{ data.summaryText }}</div>
      <div class="name">{{ data.houseName }}</div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
  .house-list-item
    display: flex
    flex-direction: column
    width: 40vw

    img
      width: 150px
</style>
