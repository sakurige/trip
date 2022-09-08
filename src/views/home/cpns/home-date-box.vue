<script lang="ts" setup>
  import { ref } from "vue";
  import { getDiffDate } from "@/utils/formatTime";
  import useMainStore from "@/stores/modules/main";
  import { storeToRefs } from "pinia";

  const mainStore = useMainStore();
  const { startTime, endTime } = storeToRefs(mainStore);
  // 开始时间
  // const nowTime = new Date();
  // const startTime = ref(formatMonthDay(nowTime));
  // // 一天后的时间
  // const TT = new Date();
  // TT.setDate(nowTime.getDate() + 1);
  // const endTime = ref(formatMonthDay(TT));
  // 停留的天数
  const totalDays = ref(getDiffDate(startTime.value, endTime.value));

  // 日历相关
  const showCalendar = ref(false);
  // 提交日历后的操作
  const onConfirm = (time: Array<Date>) => {
    startTime.value = time[0];
    endTime.value = time[1];
    totalDays.value = getDiffDate(time[0], time[1]);
    showCalendar.value = false;
  };
</script>
<template>
  <div class="date-box">
    <div class="start-date" @click="showCalendar = true">
      <span class="text">入住</span>
      <div class="date">{{ mainStore.startTimeFormat() }}</div>
    </div>
    <div class="total-time" @click="showCalendar = true">
      总 {{ totalDays }} 晚
    </div>
    <div class="end-date">
      <span class="text" @click="showCalendar = true">离店</span>
      <div class="date">{{ mainStore.endTimeFormat() }}</div>
    </div>
    <van-calendar
      v-model:show="showCalendar"
      :round="false"
      :show-confirm="false"
      class="calendar"
      color="#039be5"
      type="range"
      @confirm="onConfirm"
    />
  </div>
</template>
<style lang="sass" scoped>
  .date-box
    display: flex
    justify-content: space-around
    flex-wrap: wrap
    --van-calendar-popup-height: 100%

    .total-time
      font-size: 13px
      color: #a7a8bd

    .text
      font-size: 12px
      color: #ccc

    .date
      padding-top: 4px
</style>
