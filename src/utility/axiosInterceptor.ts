import axios, { AxiosInstance } from "axios";

// Axios 인스턴스 생성
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "",
});

// Request interceptor를 등록합니다.
axiosInstance.interceptors.request.use(
  async (config) => {
    // Request가 보내기 전에 수행할 작업을 여기에 작성합니다.
    return config;
  },
  (error: any) => {
    // Request interceptor에서 에러가 발생한 경우 처리할 작업을 여기에 작성합니다.
    return Promise.reject(error);
  }
);

// Response interceptor를 등록합니다.
axiosInstance.interceptors.response.use(
  (response: any) => {
    // Response를 받은 후 수행할 작업을 여기에 작성합니다.
    return response;
  },
  (error: any) => {
    // Response interceptor에서 에러가 발생한 경우 처리할 작업을 여기에 작성합니다.
    return Promise.reject(error);
  }
);

export default axiosInstance;
