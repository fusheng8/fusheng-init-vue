<script setup lang="ts">
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons-vue'
import CrudTableModal from './components/userAddOrUpdateForm.vue'
import type { CrudTableModel } from '~@/api/list/crud-table'
import { useTableQuery } from '~@/composables/table-query'
import { deleteUserByIds, getUserPageList } from '~/api/common/user'
import { getAllRoleList } from '~/api/common/role.ts'

const message = useMessage()
const roleArr: any = ref([])
const roleObj: any = ref({})

const columns = shallowRef([
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    key: 'avatar',
  },
  {
    title: '状态',
    dataIndex: 'userStatus',
    key: 'userStatus',
  },
  {
    title: '角色',
    dataIndex: 'roles',
    key: 'roles',
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
  },
])

const { state, initQuery, resetQuery, query } = useTableQuery({
  queryApi: getUserPageList,
  queryParams: {
    username: undefined,
  },
  afterQuery: (res) => {
    return res
  },
})

const crudTableModal = ref<InstanceType<typeof CrudTableModal>>()

onMounted(async () => {
  const { data } = await getAllRoleList()
  roleArr.value = data
  data?.forEach((item) => {
    roleObj.value[item.id] = item.name
  })
})

async function handleDelete(record: CrudTableModel[]) {
  // 解构出id数组
  const ids = record.map(item => item.id)
  console.log(typeof ids, ids)
  await deleteUserByIds([...ids])
  await query()
  message.success('删除成功')

  close()
}

function handleAdd() {
  crudTableModal.value?.open({}, roleArr.value)
}

function handleEdit(record: CrudTableModel) {
  crudTableModal.value?.open(record, roleArr.value)
}
</script>

<template>
  <page-container>
    <a-card mb-4>
      <a-form class="system-crud-wrapper" :label-col="{ span: 7 }" :model="state.queryParams">
        <a-row :gutter="[15, 0]">
          <a-col :span="6">
            <a-form-item name="name" label="用户名">
              <a-input v-model:value="state.queryParams.username" placeholder="请输入用户名" />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-space flex justify-end w-full>
              <a-button :loading="state.loading" type="primary" @click="initQuery">
                查询
              </a-button>
              <a-button :loading="state.loading" @click="resetQuery">
                重置
              </a-button>
            </a-space>
          </a-col>
        </a-row>
      </a-form>
    </a-card>

    <a-card title="用户管理">
      <template #extra>
        <a-space size="middle">
          <a-button
            type="primary" danger :disabled="!state.rowSelections.selectedRows.length > 0"
            @click="handleDelete(state.rowSelections.selectedRows)"
          >
            <template #icon>
              <DeleteOutlined />
            </template>
            删除
          </a-button>
          <a-button type="primary" @click="handleAdd">
            <template #icon>
              <PlusOutlined />
            </template>
            新增
          </a-button>
        </a-space>
      </template>
      <a-table
        row-key="id" :row-selection="state.rowSelections" :loading="state.loading" :columns="columns"
        :data-source="state.dataSource" :pagination="state.pagination"
      >
        <template #bodyCell="scope">
          <template v-if="scope?.column?.dataIndex === 'avatar'">
            <a-avatar :src="scope?.record?.avatar" />
          </template>

          <template v-else-if="scope?.column?.dataIndex === 'userStatus'">
            <a-tag :color="scope?.record?.userStatus === 1 ? 'success' : 'error'">
              {{ scope?.record?.userStatus === 1 ? '启用' : '禁用' }}
            </a-tag>
          </template>

          <template v-else-if="scope?.column?.dataIndex === 'roles'">
            <a-space>
              <a-tag v-for="role in JSON.parse(scope?.record?.roles)" :key="role.id" :color="role.id % 2 === 0 ? '#87d068' : '#2db7f5'">
                {{ roleObj[role] }}
              </a-tag>
            </a-space>
          </template>

          <template v-if="scope?.column?.dataIndex === 'action'">
            <div flex gap-2>
              <a-button type="link" @click="handleEdit(scope?.record as CrudTableModel)">
                编辑
              </a-button>
              <a-popconfirm
                title="确定删除该条数据？" ok-text="确定" cancel-text="取消"
                @confirm="handleDelete([scope?.record as CrudTableModel])"
              >
                <a-button type="link">
                  删除
                </a-button>
              </a-popconfirm>
            </div>
          </template>
        </template>
      </a-table>
    </a-card>

    <CrudTableModal ref="crudTableModal" @ok="query" />
  </page-container>
</template>

<style lang="less" scoped>
.system-crud-wrapper{
  .ant-form-item{
    margin: 0;
  }
}
</style>
