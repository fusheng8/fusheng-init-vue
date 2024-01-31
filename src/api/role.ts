import { http } from "@/utils/http";

type Result = {
  code: number;
  data?: any;
};

type ResultTable = {
  success: boolean;
  data?: any;
};

/** 用户管理-获取所有角色列表 */
export const getAllRoleList = () => {
  return http.request<Result>("get", "/role/getAllList");
};

/** 获取分页角色管理列表 */
export const getPageRoleList = (data?: object) => {
  return http.request<ResultTable>("post", "/role/list", { data });
};

/** 保存或者更新角色 */
export const saveRole = (data?: object) => {
  return http.request<Result>("post", "/role/save", { data });
};

/** 根据id批量删除角色 */
export const deleteRoleByIds = (params?: object) => {
  return http.request<Result>("get", "/role/deleteByIds?ids=" + params);
};
