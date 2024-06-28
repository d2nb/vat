<script setup lang="jsx">
import { reactive } from 'vue'
import { SearchForm, ProTable, ActionsModal } from '@/components'
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

const schema = reactive([
  {
    key: 'account',
    title: '客户账号',
    widget: <a-input />
  },
  {
    key: 'phone',
    title: '手机号码',
    widget: <a-input />
  },
  {
    key: 'signupTimeRange',
    title: '注册时间',
    widget: <a-range-picker value-format="YYYY-MM-DD" class="w-full" />
  }
])

const { data } = useTable(getTestList)

const handleSearch = (values) => {
  console.log(values)
}
</script>

<template>
  <ActionsModal :selected="3">
    <button class="text-btn">导出</button>
    <button class="text-btn">导出</button>
    <a-button danger type="text">删除</a-button>
  </ActionsModal>
  <div class="bg-white p-6">
    <SearchForm :schema="schema" @search="handleSearch" />
    <ProTable :columns="columns" :data-source="data">
      <template #bodyCell="{ column }">
        <template v-if="column.dataIndex === 'action'">
          <div
            class="inline-block py-1 px-3 rounded hover:bg-[#f0f0f0] active:bg-[#e8e8e8] cursor-pointer"
          >
            <RightOutlined />
          </div>
        </template>
      </template>
    </ProTable>
  </div>
</template>
