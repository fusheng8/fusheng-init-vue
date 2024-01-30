import { http } from "@/utils/http";

type Result = {
  code: number;
  data?: any;
};

/** 地图数据 */
export const mapJson = (params?: object) => {
  return http.request<Result>("get", "/get-map-info", { params });
};
