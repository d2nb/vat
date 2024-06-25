<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const collapsed = ref(false)

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value
}
</script>

<template>
  <section class="flex h-screen">
    <aside class="flex flex-col w-20 border-r items-center py-4">
      <div class="text-4xl text-brand font-bold">F</div>
      <div class="mt-auto">
        <a-avatar style="background-color: #87d068">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </div>
    </aside>
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" theme="light" :width="220" class="border-r">
        <section class="flex flex-col h-full">
          <a-menu theme="light" mode="inline">
            <a-menu-item key="1">
              <user-outlined />
              <span>nav 1</span>
            </a-menu-item>
            <a-menu-item key="2">
              <video-camera-outlined />
              <span>nav 2</span>
            </a-menu-item>
            <a-menu-item key="3">
              <upload-outlined />
              <span>nav 3</span>
            </a-menu-item>
          </a-menu>

          <div :class="`mt-auto p-4 text-base ${collapsed ? 'text-center' : 'text-right'}`">
            <menu-unfold-outlined v-if="collapsed" @click="toggleCollapsed" />
            <menu-fold-outlined v-else @click="toggleCollapsed" />
          </div>
        </section>
      </a-layout-sider>
      <section class="flex flex-col bg-[#f8f9fa] w-full h-full overflow-auto">
        <main class="p-6">
          <RouterView />
        </main>
        <footer class="mt-auto px-6 py-4 text-xs text-right text-gray-500">
          <span>&copy;灵匠科技</span>
          <span class="mx-1">|</span>
          <span>v1.22.12</span>
        </footer>
      </section>
    </a-layout>
  </section>
</template>
