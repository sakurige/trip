import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { devConfig } from "@/services/request/config";

class Request {
  instance: AxiosInstance;

  constructor(public config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  request(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => reject(err));
    });
  }

  post(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "post" });
  }

  get(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "get" });
  }
}

export default new Request(devConfig);
