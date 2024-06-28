<script setup>
import { formatAmount } from '@/utils'

const items = [
  {
    title: '已处理',
    value: formatAmount(1234, 0),
    rate: '12.69%',
    isIncrease: true
  },
  {
    title: '平均处理时长',
    value: '2.5h',
    rate: '9.12%',
    isIncrease: false
  },
  {
    title: '待处理',
    value: 16
  },
  {
    title: '总计工作时长',
    value: '60h',
    rate: '5.5%',
    isIncrease: false
  }
]
</script>

<template>
  <ul class="flex items-center mb-10">
    <li v-for="(item, index) in items" :key="index" class="mr-16">
      <div class="text-gray-400 mb-2">{{ item.title }}</div>
      <div class="flex items-center">
        <span class="text-2xl font-medium">{{ item.value }}</span>
        <span
          v-if="item.rate"
          :class="`ml-3 ${item.isIncrease ? 'text-[#52c41a]' : 'text-[#ff4d4f]'}`"
        >
          <CaretUpFilled v-if="item.isIncrease" />
          <CaretDownFilled v-else />
          <span>{{ item.rate }}</span>
        </span>
      </div>
    </li>
  </ul>
</template>
