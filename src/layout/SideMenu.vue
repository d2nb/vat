<script setup lang="jsx">
const menu = [
  {
    key: '1',
    title: '仪表盘',
    label: '仪表盘',
    icon: <LineChartOutlined />
  },
  {
    key: '2',
    title: '个人中心',
    label: '个人中心',
    icon: <UserOutlined />,
    children: [
      {
        key: '2-1',
        title: '用户信息',
        label: '用户信息'
      },
      {
        key: '2-2',
        title: '用户设置',
        label: '用户设置'
      }
    ]
  }
]
</script>

<template>
  <a-menu class="!border-e-0" theme="light" mode="inline" :items="menu" />
</template>
