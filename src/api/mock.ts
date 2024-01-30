import { http } from "@/utils/http";

type Result = {
  code: number;
  data?: any;
};

/** 地图数据 */
export const mapJson = (params?: object) => {
  return http.request<Result>("get", "/get-map-info", { params });
};
/** 文件上传 */
export const uploadFile = data => {
  console.log("sss", data);
  return http.request<Result>(
    "post",
    "/file/upload",
    { data },
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );
};
