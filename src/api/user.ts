import { http } from "@/utils/http";

export type UserResult = {
  success: boolean;
  data: {
    /** 用户名 */
    username: string;
    /** 当前登陆用户的角色 */
    roles: Array<string>;
  };
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
export const save = (data?: object) => {
  return http.request<UserResult>("post", "/user/save", { data });
};

/** 根据id批量删除用户 */
export const deleteByIds = (params?: object) => {
  return http.request<UserResult>("get", "/user/deleteByIds?ids=" + params);
};
