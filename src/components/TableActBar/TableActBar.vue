<script setup>
import { TransitionRoot, TransitionChild } from '@headlessui/vue'

const props = defineProps({
  open: Boolean,
  selected: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <TransitionRoot appear :show="props.open" as="template">
    <div class="fixed z-10 left-[50%] translate-x-[-50%] bottom-12">
      <TransitionChild
        as="template"
        enter="duration-200 ease-out"
        enter-from="translate-y-[100px]"
        enter-to="translate-y-0"
        leave="duration-200 ease-in"
        leave-from="translate-y-0"
        leave-to="translate-y-[100px]"
      >
        <div
          class="min-w-[360px] transform overflow-hidden rounded-full bg-white py-3 px-2 border shadow-xl transition-all"
        >
          <div class="flex items-center">
            <div class="text-sm leading-none ml-4 mr-8">已选{{ props.selected }}条</div>
            <div class="flex items-center ml-auto">
              <slot></slot>
            </div>
          </div>
        </div>
      </TransitionChild>
    </div>
  </TransitionRoot>
</template>
