import request from "@/services/request/request";

const getHotSuggests = () =>
  request.get({
    url: "/api/home/hotSuggests",
  });
const getCategory = () =>
  request.get({
    url: "api/home/categories",
  });
const getHouseList = (page: number) =>
  request.get({
    url: "/api/home/houselist",
    params: {
      page,
    },
  });

export { getCategory, getHotSuggests, getHouseList };
