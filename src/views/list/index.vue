<script setup lang="jsx">
import { ref, reactive, computed } from 'vue'
import { SearchForm, ProTable, TableActBar, Drawer, IconBtn } from '@/components'
import { getTestList } from '@/api'
import { useTable } from '@/hooks'

const columns = [
  {
    title: '账户ID',
    dataIndex: 'account_id'
  },
  {
    title: '代理商',
    dataIndex: 'agent_name'
  },
  {
    title: '销售负责人',
    dataIndex: 'con_sale_user_name'
  },
  {
    title: '运营负责人',
    dataIndex: 'con_opera_user_name'
  },
  {
    dataIndex: 'action',
    width: 80
  }
]

const schema = reactive({
  account_name: {
    title: '客户账号',
    widget: 'input'
  },
  phone: {
    title: '手机号码',
    widget: 'input'
  },
  signupTimeRange: {
    title: '注册时间',
    props: {
      valueFormat: 'YYYY-MM-DD'
    },
    widget: 'range-picker'
  }
})

const { data, pagination, isLoading, run } = useTable(getTestList)

const handleSearch = (values) => {
  run(values)
}

const handleReset = (values) => {
  pagination.current = 1
  pagination.pageSize = 10
  run(values)
}

const selectedRowKeys = ref([])
const onSelectChange = (keys) => {
  selectedRowKeys.value = keys
}
const isOpen = computed(() => selectedRowKeys.value.length > 0)

const isOpenDrawer = ref(false)
</script>

<template>
  <TableActBar v-model:open="isOpen" :selected="selectedRowKeys.length">
    <button class="text-btn">导出</button>
    <a-button danger type="text" size="small">删除</a-button>
  </TableActBar>
  <div class="white-box">
    <SearchForm :schema="schema" @search="handleSearch" @reset="handleReset" class="mb-4" />
    <ProTable
      rowKey="id"
      :columns="columns"
      :data-source="data"
      :pagination="pagination"
      :loading="isLoading"
      :row-selection="{ selectedRowKeys, preserveSelectedRowKeys: true, onChange: onSelectChange }"
    >
      <template #bodyCell="{ column }">
        <template v-if="column.dataIndex === 'action'">
          <IconBtn @click="isOpenDrawer = true">
            <RightOutlined />
          </IconBtn>
        </template>
      </template>
    </ProTable>
  </div>

  <Drawer v-model:open="isOpenDrawer" title="媒体账号">
    <a-descriptions :column="1" :labelStyle="{ color: '#1c1f239e' }">
      <a-descriptions-item label="账户ID">7317943630415659009</a-descriptions-item>
      <a-descriptions-item label="代理商">上海ABC</a-descriptions-item>
      <a-descriptions-item label="销售负责人">张威</a-descriptions-item>
      <a-descriptions-item label="运营负责人">王琦</a-descriptions-item>
    </a-descriptions>
    <template #footer>
      <a-space>
        <a-button type="text" @click="isOpenDrawer = false">取消</a-button>
        <a-button danger type="primary">删除</a-button>
      </a-space>
    </template>
  </Drawer>
</template>
