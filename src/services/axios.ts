import axios from // InternalAxiosRequestConfig, // AxiosResponse, // AxiosError,
"axios";

// สร้าง axios instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api",
  timeout: 600000, //10 minutes
});

// Interface สำหรับ retry request
// interface RetryAxiosRequestConfig extends InternalAxiosRequestConfig {
//   _retry?: boolean;
// }

// Request interceptor - ใส่ token ใน header
axiosInstance.interceptors.request.use(
  (config) => {
    // ดึง token จาก localStorage หรือ cookies
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - จัดการ error และ refresh token
// axiosInstance.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response;
//   },
//   async (error: AxiosError) => {
//     const originalRequest = error.config as RetryAxiosRequestConfig;

//     // หาก token หมดอายุ (401)
//     if (error.response?.status === 401 && !originalRequest?._retry) {
//       if (originalRequest) {
//         originalRequest._retry = true;
//       }

//       try {
//         // ลองรีเฟรช token
//         const refreshToken =
//           typeof window !== "undefined"
//             ? localStorage.getItem("refreshToken")
//             : null;

//         if (refreshToken) {
//           const response = await axios.post(
//             `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh`,
//             { refreshToken }
//           );

//           const newToken = response.data.token;
//           localStorage.setItem("token", newToken);

//           // ลองส่ง request เดิมอีกครั้ง
//           if (originalRequest) {
//             originalRequest.headers.Authorization = `Bearer ${newToken}`;
//             return axiosInstance(originalRequest);
//           }
//         }
//       } catch {
//         // ถ้ารีเฟรช token ไม่ได้ ให้ logout
//         localStorage.removeItem("token");
//         localStorage.removeItem("refreshToken");
//         window.location.href = "/login";
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
