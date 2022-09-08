<script lang="ts" setup>
  import useHomeStore from "@/stores/modules/home";
  import { storeToRefs } from "pinia";
  import HouseListItemV1 from "@/components/house-list-item-v1/index.vue";
  import HouseListItemV2 from "@/components/house-list-item-v2/index.vue";
  import { useScroll } from "@/hooks";
  import { computed, ref, watch } from "vue";
  import useMainStore from "@/stores/modules/main";

  const homeStore = useHomeStore();
  const { houseList } = storeToRefs(homeStore);
  //  滚动处理
  const { isScrollBottom } = useScroll();
  watch(isScrollBottom, () => {
    homeStore.fetchHomeHouseList().then(() => {
      isScrollBottom.value = false;
    });
  });
  //  显示输入框
  const iptValue = ref("");
  const { scrollTop } = useScroll();
  const showBox = computed(() => scrollTop.value >= 350);
  //  输入框的时间部分
  const mainStore = useMainStore();
  const { endTimeFormat, startTimeFormat } = storeToRefs(mainStore);
</script>
<template>
  <div v-if="showBox" class="main-search-box">
    <div class="time-info">
      <div>
        <span>住</span>
        <span class="time">{{ startTimeFormat("MM.DD") }}</span>
      </div>
      <div>
        <span>离</span>
        <span class="time">{{ endTimeFormat("MM.DD") }}</span>
      </div>
    </div>
    <div class="input-warp">
      <input
        v-model="iptValue"
        class="search-bar"
        placeholder="关键字/位置/名宿"
        type="text"
      />
      <van-icon name="search" />
    </div>
  </div>

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

  .main-search-box
    display: flex
    justify-content: space-evenly
    width: 100vw
    height: 67px
    position: fixed
    z-index: 99
    top: 0
    box-sizing: border-box
    padding: 10px
    background-color: #fff
    font-size: 12px
    color: #a7a2a5

    .time-info
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      width: 20%
      height: 47px
      border-right: solid 4px #fff
      background-color: #f1f3f4
      border-radius: 4px

      .time
        font-weight: 800
        color: #00000080
        padding-left: 6px

    .input-warp
      display: flex
      align-items: center
      height: 47px
      line-height: 47px
      width: 80%
      background-color: #f1f3f4
      border-radius: 4px

      .search-bar
        outline: none
        border: none
        text-indent: 8px
        background-color: #f1f3f4
        padding: 0
        width: 100%
        height: 100%

      i
        padding-right: 20px
        font-size: 24px
        font-weight: 800
</style>
