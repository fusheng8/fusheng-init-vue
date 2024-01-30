import { http } from "@/utils/http";

type Result = {
  code: number;
  data?: any;
};

/** 卡片列表 */
export const getCardList = (data?: object) => {
  return http.request<Result>("post", "/get-card-list", { data });
};
