export interface RoleInfo {
  id: number | string
  name: string
  roleKey: string
  status: number
  remark: string
}
export function getAllRoleList() {
  return useGet<RoleInfo[]>('/role/getAllList')
}
