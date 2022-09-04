import request from "@/services/request/request";

const getHotSuggests = () =>
  request.get({
    url: "/api/home/hotSuggests",
  });
const getCategory = () =>
  request.get({
    url: "/api/home/category",
  });
const getHouseList = () =>
  request.get({
    url: "/api/home/houseList",
    params: {
      page: 1,
    },
  });

export { getCategory, getHotSuggests, getHouseList };
