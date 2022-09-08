import { defineStore } from "pinia";
import { formatMonthDay } from "@/utils/formatTime";

const startTime = new Date();
const endTime = new Date();
endTime.setDate(startTime.getDate() + 1);
const useMainStore = defineStore("main", {
  state: () => ({
    startTime,
    endTime,
    isLoading: true,
  }),
  getters: {
    startTimeFormat:
      (state) =>
      (layout = "MM月DD日") =>
        formatMonthDay(state.startTime, layout),
    endTimeFormat:
      (state) =>
      (layout = "MM月DD日") =>
        formatMonthDay(state.endTime, layout),
  },
  actions: {},
});
export default useMainStore;
