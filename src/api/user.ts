import { http } from "@/utils/http";

export type UserResult = {
  success: boolean;
  data: any;
};

/** 登录 */
export const getLogin = (data?: object) => {
  return http.request<UserResult>("post", "/user/login", { data });
};

/** 获取用户信息 */
export const getUserInfo = () => {
  return http.request<UserResult>("get", "/user/info");
};

/** 保存或者更新用户 */
export const saveUser = (data?: object) => {
  return http.request<UserResult>("post", "/user/save", { data });
};

/** 根据id批量删除用户 */
export const deleteUserByIds = (params?: object) => {
  return http.request<UserResult>("get", "/user/deleteByIds?ids=" + params);
};

/** 设置用户角色 */
export const setUserRole = (data?: object) => {
  return http.request<UserResult>("post", "/user/setUserRole", { data });
};
/** 获取用户管理列表 */
export const getUserList = (data?: object) => {
  return http.request<UserResult>("post", "/user/list", {data});
};
/** 用户管理-根据userId，获取对应角色id列表（userId：用户id） */
export const getRoleIdsByUserId = (params?: object) => {
  return http.request<UserResult>("get", "/user/getRoleIdsByUserId", {params});
};
