<script lang="ts" setup>
  import useHomeStore from "@/stores/modules/home";
  import { storeToRefs } from "pinia";

  const homeStore = useHomeStore();
  homeStore.fetchHomeSuggest();
  const { hotSuggests } = storeToRefs(homeStore);
  console.log(hotSuggests.value);
</script>
<template>
  <div class="hot-suggests">
    <template v-for="item in hotSuggests" :key="item.tagCode">
      <div :style="{ color: item.tagText.color }" class="space-name">
        {{ item.tagText.text }}
      </div>
    </template>
  </div>
</template>
<style lang="sass">
  .hot-suggests
    display: flex
    justify-content: space-evenly
    flex-wrap: wrap
    width: 80vw
    height: 15vh
    align-items: center
    margin-top: 8px
    font-size: 12px

    .space-name
      background-color: #cccccc80
      height: 20px
      line-height: 20px
      padding: 0 6px 0 6px
      border-radius: 8px
</style>
