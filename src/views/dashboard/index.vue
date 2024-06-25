<script setup lang="jsx">
import { reactive } from 'vue'
import { SearchForm, ProTable } from '@/components'
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
    title: '绑定手机号',
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
  <SearchForm :schema="schema" @search="handleSearch" />
  <div class="bg-white p-6 mt-6">
    <ProTable :columns="columns" :data-source="data" />
  </div>
</template>
