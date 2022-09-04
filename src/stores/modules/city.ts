import { defineStore } from "pinia";
import { getCityAll } from "@/services";
import type { AllCities, City } from "@/services/modules/types/city";
// import { type City } from "@/services/modules/types/city";

const useCityStore = defineStore("city", {
  state: () => ({
    city: {} as AllCities,
    currentCity: { cityName: "成都" } as City,
  }),
  actions: {
    async fetchAllCitiesData() {
      const res: any = await getCityAll();
      this.city = res.data;
    },
    changeCurrent(currentCity: City) {
      this.currentCity = currentCity;
    },
  },
});
export default useCityStore;
