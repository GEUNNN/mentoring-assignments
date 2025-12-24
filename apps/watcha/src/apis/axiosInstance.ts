import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  isAxiosError,
} from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${
      import.meta.env.VITE_ACCESS_TOKEN
    }`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.error) {
      throw new Error(response.data.error);
    }
    return response;
  },
  (error: AxiosResponse<AxiosError, Error>) => {
    if (isAxiosError(error)) {
      switch (error.response?.status) {
        case 401:
          return Promise.reject(new Error("Access token expired"));
        case 403:
          return Promise.reject(new Error("Forbidden"));
        case 404:
          return Promise.reject(new Error("Not found"));
        case 500:
          return Promise.reject(new Error("Server error"));
        default:
          return Promise.reject(new Error("Something went wrong"));
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
