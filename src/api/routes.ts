import { http } from "@/utils/http";

type Result = {
  code: number;
  data?: any;
};

export const getAsyncRoutes = () => {
  return http.request<Result>("get", "/get-async-routes");
};
