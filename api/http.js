import axios from "axios";
import { toast } from "react-toastify";
import { clearStorage, getToken } from "../utils/localStorage";

const createAxios = (baseURL) => {
  const Axios = axios.create({ baseURL });

  Axios.interceptors.response.use(
    async (response) => {
      return response.data;
    },
    async (error) => {
      console.log(error);
      let originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        // if the error is 401 and hasent already been retried
        originalRequest._retry = true; // now it can be retried
        try {
          const token = await getToken();

          Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          return Axios(originalRequest);
        } catch (error) {
          if (error.response.status === 401) {
            // logout dispatch
            toast("Session Expired");
            clearStorage();
          }
        }
      }
      return error.response.data;
    }
  );

  Axios.interceptors.request.use(
    async (config) => {
      const token = await getToken();
      if (token) {
        config.headers = {
          Authorization: `Bearer ${token}`,
        };
      }
      return config;
    },
    (error) => {
      return Promise.reject(error.response.data);
      // if (error.response.data) {
      //   return Promise.reject(error.response.data);
      // } else {
      //   return Promise.reject({
      //     status: false,
      //     message: error.message,
      //     error: error.res,
      //     // statusCode: error.response.status,
      //   });
      // }
    }
  );

  return Axios;
};

const apiService = createAxios(
  "http://ec2-43-204-111-100.ap-south-1.compute.amazonaws.com:3020/api/v1"
  // "http://43.204.111.100:3020/api/v1"
);

const http = {
  get: apiService.get,
  post: apiService.post,
  put: apiService.put,
  delete: apiService.delete,
};

export default http;
