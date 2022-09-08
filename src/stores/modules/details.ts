import { defineStore } from "pinia";
import { getDetailsData } from "@/services/modules/details";
import type { MainPart, Root } from "@/services/modules/types/details";

const useDetailsStore = defineStore("details", {
  state: () => ({
    detailsData: {} as Root,
    mainPart: {} as MainPart,
    mes: "",
  }),
  actions: {
    async fetchDetailsData(houseId: any) {
      const res: any = await getDetailsData(houseId);
      this.detailsData = res.data;
      this.mainPart = this.detailsData?.mainPart;
      this.mes = !this.detailsData ? `ID 为${houseId}的数据不存在` : "";
    },
  },
});
export default useDetailsStore;
