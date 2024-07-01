<script setup>
import { computed } from 'vue'
import { cn } from '@/utils'

const props = defineProps({
  disabled: Boolean
})

const classes = computed(() => {
  return cn(
    'transition p-0 bg-transparent text-blue-500 hover:text-blue-400 active:text-blue-600 cursor-pointer',
    {
      'text-gray-400 hover:text-gray-400 active:text-gray-400 cursor-not-allowed': props.disabled
    }
  )
})
</script>

<template>
  <a :class="classes" v-bind="$attrs">
    <slot></slot>
  </a>
</template>
