import { http } from "@/utils/http";

type Result = {
  code: number;
  data?: any;
};

/** 文件上传 */
export const uploadFile = data => {
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
