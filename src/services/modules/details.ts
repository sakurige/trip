import request from "@/services/request/request";

export const getDetailsData = (houseId: number) => {
  return request.get({
    url: "api/detail/infos",
    params: {
      houseId,
    },
  });
};
