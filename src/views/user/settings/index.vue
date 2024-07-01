<script setup>
import { LinkButton } from '@/components'
</script>

<template>
  <div class="bg-white rounded-lg border max-w-screen-xl mx-auto overflow-hidden">
    <div class="p-6">
      <h3 class="text-lg font-semibold mb-4">用户名</h3>
      <p class="mb-4">请输入您的全名或您喜欢的名称。</p>
      <a-input class="w-[320px]" />
    </div>
    <div class="bg-gray-50 border-t px-6 py-3 flex justify-between items-center">
      <p class="text-gray-500">最多使用 16 个字符</p>
      <a-button type="primary">保存</a-button>
    </div>
  </div>

  <div class="bg-white rounded-lg border max-w-screen-xl mx-auto overflow-hidden mt-8">
    <div class="p-6">
      <h3 class="text-lg font-semibold mb-4">邮箱</h3>
      <p class="mb-4">输入您想要用于登录的电子邮件地址，您的电子邮件将用于接收与帐户相关的通知。</p>
      <a-input class="w-[320px]" />
    </div>
    <div class="bg-gray-50 border-t px-6 py-3 flex justify-between items-center">
      <p class="text-gray-500">最多使用 48 个字符</p>
      <a-button type="primary">保存</a-button>
    </div>
  </div>

  <div class="bg-white rounded-lg border max-w-screen-xl mx-auto overflow-hidden mt-8">
    <div class="p-6">
      <h3 class="text-lg font-semibold mb-4">消息通知</h3>
      <p class="mb-4">允许向您的邮箱发送最新的活动消息。</p>
      <a-switch :checked="true" />
    </div>
    <div class="bg-gray-50 border-t px-6 py-3 flex justify-between items-center">
      <p class="text-gray-500">
        <span>了解更多关于</span>
        <LinkButton href="https://www.baidu.com/" target="_blank">
          <span>消息通知</span>
          <ExportOutlined class="ml-1" />
        </LinkButton>
      </p>
      <a-button type="primary">保存</a-button>
    </div>
  </div>
</template>
