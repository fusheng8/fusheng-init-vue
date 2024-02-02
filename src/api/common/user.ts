export interface UserInfo {
  id: number | string
  username: string
  nickName: string
  avatar: string
  roles: (string | number)[]
}

export function getUserInfoApi() {
  return useGet<UserInfo>('/user/info')
}
export async function getUserPageList(params?: any) {
  return usePost<UserInfo[]>('/user/list', params)
}
