<script lang="ts" setup>
  import type { PropType } from "vue";
  import { computed } from "vue";
  import type { HousePic } from "@/services/modules/types/details";

  const props = defineProps({
    housePics: {
      type: Array as PropType<HousePic[]>,
      required: true,
    },
    mes: {
      type: String,
      default: "",
    },
  });
  const housePics = computed(() => props.housePics);
  const group: any = {};
  // 根据enumPictureCategory进行分组
  for (const item in housePics.value) {
    let v: any = group[housePics.value[item].enumPictureCategory];
    if (!v) {
      v = [];
      group[housePics.value[item].enumPictureCategory] = v;
    }
    v.push(housePics.value[item]);
  }
  const getTitle = (title: string) =>
    title.replace("：", "").replace("【", "").replace("】", "");
  // 根据元素获取在group中的索引
  const getCategoryIndex = (item: HousePic) => {
    const v = group[item.enumPictureCategory];
    return v.findIndex((data: HousePic) => data === item);
  };
</script>
<template>
  <van-swipe :autoplay="3000" class="my-swipe" indicator-color="white">
    <template v-for="item in housePics">
      <van-swipe-item>
        <img :src="item.url" alt="" />
      </van-swipe-item>
    </template>
    <template #indicator="{ active, total }">
      <div class="custom-indicator">
        <template v-for="(v, k) in group">
          <div
            :class="{
              active: k === housePics[active]?.enumPictureCategory?.toString(),
            }"
            class="custom-indicator-item"
          >
            {{ getTitle(v[0].title) }}
            <span
              v-if="k === housePics[active]?.enumPictureCategory?.toString()"
              >{{ getCategoryIndex(housePics[active]) + 1 }}/{{ v.length }}
            </span>
          </div>
        </template>
      </div>
    </template>
  </van-swipe>
</template>
<style lang="sass" scoped>
  .main
    position: relative

    .my-swipe
      width: 100%

      img
        width: 100%

      .custom-indicator
        position: absolute
        right: 20px
        font-size: 12px
        bottom: 20px

        background-color: rgba(0, 0, 0, 50)
        display: flex

        .custom-indicator-item
          margin-left: 8px
          padding: 2px
          color: #039be5

        .active
          background-color: #fff
</style>
