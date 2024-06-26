<script setup>
import { LinkButton } from '@/components'
</script>

<template>
  <div class="relative h-screen w-full bg-white bg-grid-black/[0.2]">
    <div
      className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"
    ></div>
    <div
      class="absolute left-0 top-0 w-full h-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(99,102,241,0.25)_20%,transparent)]"
    ></div>
    <div class="flex justify-center items-center w-full h-full">
      <div class="rounded-xl ring-1 ring-gray-200 shadow w-[400px] bg-white/75 backdrop-blur">
        <div class="p-6">
          <h1 class="text-3xl text-gray-900 font-bold mb-2">Fancy 出海</h1>
          <p class="text-gray-400 mb-6">Welcome to Fancy</p>
          <a-form size="large">
            <a-form-item>
              <a-input placeholder="请输入账号" />
            </a-form-item>
            <a-form-item class="!mb-0">
              <a-input-password placeholder="请输入密码" />
            </a-form-item>
            <div class="text-right py-4">
              <LinkButton>忘记密码?</LinkButton>
            </div>
            <a-form-item class="!mb-0">
              <a-button html-type="submit" block type="primary">
                <span>登录</span>
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
    <div class="fixed left-0 bottom-0 w-full py-6 text-center text-sm text-gray-400">
      <CopyrightOutlined />
      <span>灵匠科技</span>
      <span class="mx-1">|</span>
      <span>v1.22.4</span>
    </div>
  </div>
</template>
