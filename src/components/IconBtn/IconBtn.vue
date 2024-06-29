<script setup>
const emits = defineEmits(['click'])

const onClick = (e) => {
  emits('click', e)
}
</script>

<template>
  <div
    class="flex justify-center items-center w-8 h-8 text-xs rounded text-gray-500 hover:bg-gray-100 active:bg-gray-200 cursor-pointer"
    @click="onClick"
  >
    <slot></slot>
  </div>
</template>
