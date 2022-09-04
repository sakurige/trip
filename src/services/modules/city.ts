import request from "@/services/request/request";

export default () => {
  return request.get({
    url: "api/city/all",
  });
};
