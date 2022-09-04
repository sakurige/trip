import { defineStore } from "pinia";
import type {
  Category,
  HotSuggest,
  HouseList,
} from "@/services/modules/types/home";
import {
  getCategory,
  getHotSuggests,
  getHouseList,
} from "@/services/modules/home";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [] as Array<HotSuggest>,
    category: [] as Array<Category>,
    houseList: [] as Array<HouseList>,
  }),
  actions: {
    async fetchHomeSuggest() {
      const res: any = await getHotSuggests();
      this.hotSuggests = res.data;
    },
    async fetchHomeCategory() {
      const res: any = await getCategory();
      this.category = res.data;
    },
    async fetchHomeHouseList() {
      const res: any = await getHouseList();
      this.houseList = res.data;
    },
  },
});
export default useHomeStore;
