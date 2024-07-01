<script setup lang="jsx">
import { useRouter } from 'vue-router'

const router = useRouter()

const menu = [
  {
    key: 'home',
    title: '首页',
    label: '首页',
    icon: <HomeOutlined />
  },
  {
    key: 'list',
    title: '列表页',
    label: '列表页',
    icon: <ProfileOutlined />
  },
  {
    key: 'form',
    title: '表单页',
    label: '表单页',
    icon: <FormOutlined />
  },
  {
    key: 'user-center',
    title: '个人中心',
    label: '个人中心',
    icon: <UserOutlined />,
    children: [
      {
        key: 'user/settings',
        title: '用户设置',
        label: '用户设置'
      }
    ]
  }
]

const handleClick = ({ key }) => {
  router.push(`/${key}`)
}
</script>

<template>
  <a-menu class="!border-e-0" theme="light" mode="inline" :items="menu" @click="handleClick" />
</template>
