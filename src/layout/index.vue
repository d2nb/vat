<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Sidebar from './Sidebar.vue'
import SideMenu from './SideMenu.vue'

const collapsed = ref(false)

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value
}
</script>

<template>
  <section class="flex h-screen">
    <Sidebar />
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" theme="light" :width="220" class="border-r">
        <section class="flex flex-col h-full">
          <SideMenu />

          <div :class="`mt-auto p-4 text-base ${collapsed ? 'text-center' : 'text-right'}`">
            <menu-unfold-outlined v-if="collapsed" @click="toggleCollapsed" />
            <menu-fold-outlined v-else @click="toggleCollapsed" />
          </div>
        </section>
      </a-layout-sider>
      <section class="flex flex-col bg-[#f8f9fa] w-full h-full overflow-auto">
        <div class="p-6 pb-0">
          <a-breadcrumb>
            <a-breadcrumb-item>个人中心</a-breadcrumb-item>
            <a-breadcrumb-item>用户设置</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <main class="p-6">
          <RouterView />
        </main>
        <footer class="flex items-center justify-end mt-auto px-6 py-4 text-xs text-gray-400">
          <CopyrightOutlined />
          <span>灵匠科技</span>
          <span class="mx-1">|</span>
          <span>v1.22.12</span>
        </footer>
      </section>
    </a-layout>
  </section>
</template>
