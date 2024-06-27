<script setup>
const props = defineProps({
  collapsed: Boolean
})
</script>

<template>
  <div v-if="props.collapsed" class="flex justify-center py-4">
    <a-avatar size="small" class="bg-[#f56a00]">尚</a-avatar>
  </div>
  <div v-else class="flex justify-between items-center py-4 px-6">
    <a-dropdown trigger="click">
      <div class="flex items-center cursor-pointer">
        <a-avatar size="small" class="bg-[#f56a00]">尚</a-avatar>
        <span class="leading-none font-bold ml-2 max-w-[140px] line-1">尚鸿馨</span>
      </div>

      <template #overlay>
        <a-menu>
          <a-menu-item>
            <div class="px-1 py-1">
              <UserOutlined class="mr-1" />
              个人中心
            </div>
          </a-menu-item>
          <a-menu-item>
            <div class="px-1 py-1">
              <LogoutOutlined class="mr-1" />
              退出登录
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
