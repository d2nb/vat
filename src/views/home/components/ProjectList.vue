<template>
  <ul class="flex items-center mb-4">
    <li class="px-4 py-2 text-brand font-bold bg-brand-50 rounded-sm cursor-pointer">我的关注</li>
    <li class="ml-4 text-gray-500 cursor-pointer">我的项目</li>
  </ul>
  <ul class="flex">
    <li class="border rounded px-6 py-4 w-[360px] mr-6">
      <div class="flex items-start mb-6">
        <img src="@/assets/imgs/douyin-icon.png" class="w-12 h-12 mr-3" />
        <div>
          <div class="text-base font-bold">抖音极速版</div>
          <div class="text-gray-400">AppID: 10010</div>
        </div>
      </div>
      <ul class="flex items-center mb-6">
        <li class="mr-10">
          <div class="text-gray-400 mb-2">待处理</div>
          <div class="text-xl font-medium">17</div>
        </li>
        <li>
          <div class="text-gray-400 mb-2">已解决</div>
          <div class="text-xl font-medium">22</div>
        </li>
      </ul>
    </li>

    <li class="border rounded px-6 py-4 w-[360px]">
      <div class="flex items-start mb-6">
        <img src="@/assets/imgs/toutiao-icon.png" class="w-12 h-12 mr-3" />
        <div>
          <div class="text-base font-bold">头条搜索</div>
          <div class="text-gray-400">AppID: 10086</div>
        </div>
      </div>
      <ul class="flex items-center mb-6">
        <li class="mr-10">
          <div class="text-gray-400 mb-2">待处理</div>
          <div class="text-xl font-medium">17</div>
        </li>
        <li>
          <div class="text-gray-400 mb-2">已解决</div>
          <div class="text-xl font-medium">22</div>
        </li>
      </ul>
    </li>
  </ul>
</template>
