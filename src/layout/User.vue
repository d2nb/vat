<script setup>
import { useRouter } from 'vue-router'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons-vue'

const router = useRouter()

const props = defineProps({
  collapsed: Boolean
})

const handleSignout = () => {
  router.push('/sign-in')
}

const menuItems = [
  {
    icon: UserOutlined,
    name: '个人中心'
  },
  {
    icon: LogoutOutlined,
    name: '退出登录',
    handler: handleSignout
  }
]
</script>

<template>
  <div v-if="props.collapsed" class="flex justify-center py-4">
    <a-dropdown trigger="click">
      <a-avatar size="small" class="bg-[#f56a00] cursor-pointer">尚</a-avatar>
      <template #overlay>
        <a-menu>
          <a-menu-item
            v-for="(item, index) in menuItems"
            :key="index"
            title=""
            @click="() => item.handler && item.handler()"
          >
            <div class="px-2">
              <component :is="item.icon" class="mr-1" />
              {{ item.name }}
            </div>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
  <div v-else class="flex justify-between items-center py-4 px-6">
    <a-dropdown trigger="click">
      <div class="flex items-center cursor-pointer">
        <a-avatar size="small" class="bg-[#f56a00]">尚</a-avatar>
        <span class="leading-none font-bold ml-2 max-w-[140px] line-1">尚鸿馨</span>
      </div>

      <template #overlay>
        <a-menu>
          <a-menu-item
            v-for="(item, index) in menuItems"
            :key="index"
            @click="() => item.handler && item.handler()"
          >
            <div class="px-2">
              <component :is="item.icon" class="mr-1" />
              {{ item.name }}
            </div>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
    <a-badge :count="2" dot>
      <BellOutlined class="cursor-pointer" />
    </a-badge>
  </div>
</template>
