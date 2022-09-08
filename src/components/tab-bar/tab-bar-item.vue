<script lang="ts" setup>
  import { defineProps, type PropType } from "vue";
  import { getAssetsURL } from "@/utils/getAssets";
  import { useRoute, useRouter } from "vue-router";

  const route = useRoute();

  interface imgUrlTypes {
    normalImg: string;
    activeImg: string;
  }

  const props = defineProps({
    url: {
      type: Object as PropType<imgUrlTypes>,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  });

  // 子组件向父组件发送事件
  const emits = defineEmits(["switch-bar"]);
  // 使用路由用于切换
  const router = useRouter();

  const changeRoute = () => {
    // 切换路由
    router.push(props.path);
    // 向父组件发送事件，用于改变状态
    emits("switch-bar", props.idx);
  };
</script>
<template>
  <div :class="{ active: isActive }" class="tab-bar-item" @click="changeRoute">
    <img v-show="isActive" :src="getAssetsURL(url.activeImg)" alt="" />
    <img v-show="!isActive" :src="getAssetsURL(url.normalImg)" alt="" />
    <span>{{ text }}</span>
  </div>
</template>
<style lang="sass" scoped>
  .tab-bar-item
    display: flex
    flex: 1
    flex-direction: column
    justify-content: space-between
    align-items: center

    img
      box-sizing: border-box
      padding-top: 6px
      height: 28px

    span
      box-sizing: border-box
      padding-top: 2px

  .active
    color: red
</style>
