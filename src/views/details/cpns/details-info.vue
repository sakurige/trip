<script lang="ts" setup>
  import type { PropType } from "vue";
  import type { TopModule } from "@/services/modules/types/details";

  defineProps({
    mainPart: {
      type: Object as PropType<TopModule>,
      required: true,
    },
  });
</script>
<template>
  <div class="infos">
    <h3 class="house-name">{{ mainPart.houseName }}</h3>
    <div class="desc">
      <template v-for="item of mainPart.houseTags">
        <span
          :style="{
            color: item.tagText?.color,
            backgroundColor: item.tagText?.background.color,
          }"
        >
          {{ item.tagText?.text }}
        </span>
      </template>
    </div>
    <div class="comment">
      <span class="score">{{ mainPart.commentBrief.overall }}</span>
      <span class="score-title">{{ mainPart.commentBrief.scoreTitle }}</span>
      <span class="score-desc">"{{ mainPart.commentBrief.commentBrief }}"</span>
      <span class="count"
        >{{ mainPart.commentBrief.totalCount }}条评论 <van-icon name="arrow"
      /></span>
    </div>
    <div class="address">
      <span class="position">{{ mainPart.nearByPosition.address }}</span
      ><span class="text">地图*周边<van-icon name="arrow" /></span>
    </div>
  </div>
</template>
<style lang="sass" scoped>
  .desc
    display: flex
    justify-content: space-evenly
    font-size: 14px

  .comment
    display: flex
    justify-content: space-evenly
    align-items: center
    height: 45px
    width: 95vw
    margin: 10px auto
    border-radius: 8px
    background-color: #f4f6f9

    .score
      font-size: 14px
      font-weight: 600

    .score-title
      font-weight: 600

    .score-desc
      color: gray

    .count
      font-size: 12px
      color: #039be5

  .address
    display: flex
    justify-content: space-evenly
    align-items: center
    height: 45px
    width: 95vw
    margin: 10px auto
    background-color: #f4f6f9

    .position
      font-size: 14px
      font-weight: 600

    .text
      font-size: 12px
      color: #039be5
</style>
