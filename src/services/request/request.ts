import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { devConfig } from "@/services/request/config";
import useMainStore from "@/stores/modules/main";

const mainStore = useMainStore();

class Request {
  instance: AxiosInstance;

  constructor(public config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.instance.interceptors.request.use(
      (config) => {
        mainStore.isLoading = true;
        return config;
      },
      (err) => {}
    );
    this.instance.interceptors.response.use(
      (res) => {
        mainStore.isLoading = false;
        return res;
      },
      (err) => {
        return err;
      }
    );
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
