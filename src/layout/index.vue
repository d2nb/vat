<script setup>
import { ref, computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { Copyright } from '@/components'
import User from './User.vue'
import SideMenu from './SideMenu.vue'

const route = useRoute()

const hideBreadcrumb = computed(() => route.meta.hideBreadcrumb)

const collapsed = ref(false)

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value
}
</script>

<template>
  <a-layout class="h-screen">
    <a-layout-sider
      v-model:collapsed="collapsed"
      theme="light"
      :width="240"
      class="border-r relative z-[1]"
    >
      <section class="flex flex-col h-full overflow-hidden">
        <User :collapsed="collapsed" />
        <SideMenu />
        <div :class="`mt-auto p-4 ${collapsed ? 'text-center' : 'text-left'}`">
          <div
            class="inline-flex items-center hover:bg-[#f0f0f0] p-2 rounded cursor-pointer"
            @click="toggleCollapsed"
          >
            <img src="@/assets/imgs/sidebar-icon.png" alt="sidebar-icon" class="w-4 h-4" />
            <span v-if="!collapsed" class="ml-2 font-bold whitespace-nowrap">收起侧边栏</span>
          </div>
        </div>
      </section>
    </a-layout-sider>
    <section class="relative flex flex-col w-full h-full bg-[#f8f9fa] overflow-auto">
      <div v-if="!hideBreadcrumb" class="p-6 pb-0">
        <a-breadcrumb>
          <a-breadcrumb-item>个人中心</a-breadcrumb-item>
          <a-breadcrumb-item>用户设置</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <main class="p-6">
        <RouterView />
      </main>
      <footer class="mt-auto">
        <Copyright />
      </footer>
    </section>
  </a-layout>
</template>
