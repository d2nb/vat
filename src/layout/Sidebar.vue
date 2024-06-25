<template>
  <aside class="flex flex-col shrink-0 w-16 border-r items-center py-4">
    <div class="text-4xl text-brand font-bold">F</div>
    <div class="mt-auto flex flex-col items-center">
      <!-- <div
        class="flex justify-center items-center rounded w-10 h-10 hover:bg-gray-200 mb-6 cursor-pointer"
      >
        <a-badge dot count="2">
          <MailOutlined class="text-xl" />
        </a-badge>
      </div> -->
      <a-dropdown>
        <img
          src="@/assets/imgs/avatar.svg"
          alt="avatar"
          class="w-8 h-8 rounded-full cursor-pointer"
        />

        <template #overlay>
          <a-menu>
            <a-menu-item>个人中心</a-menu-item>
            <a-menu-item>退出登录</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </aside>
</template>
