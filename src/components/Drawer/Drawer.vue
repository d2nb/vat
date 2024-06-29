<script setup>
import IconBtn from '../IconBtn'

const props = defineProps({
  open: Boolean,
  title: String
})

const emits = defineEmits(['update:open'])

const onClose = () => {
  emits('update:open', false)
}
</script>

<template>
  <a-drawer
    :open="props.open"
    rootClassName="outline-none text-gray-800"
    :headerStyle="{ display: 'none' }"
    :bodyStyle="{ padding: '0' }"
    :footerStyle="{ borderTop: '1px solid #f0f0f0' }"
    @close="onClose"
  >
    <div class="flex justify-between items-center px-4 py-3 border-b border-b-[#f0f0f0]">
      <h2 class="text-base font-semibold">{{ props.title }}</h2>
      <div class="flex items-center">
        <a-dropdown trigger="hover" placement="bottomRight">
          <IconBtn>
            <EllipsisOutlined class="text-base" />
          </IconBtn>

          <template #overlay>
            <a-menu class="text-center min-w-20">
              <a-menu-item>编辑</a-menu-item>
              <a-menu-item>充值</a-menu-item>
              <a-menu-item>减款</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>

        <!-- <IconBtn @click="onClose">
          <CloseOutlined />
        </IconBtn> -->
      </div>
    </div>
    <div class="p-4">
      <slot></slot>
    </div>
    <template #footer v-if="$slots.footer">
      <div class="text-right">
        <slot name="footer"></slot>
      </div>
    </template>
  </a-drawer>
</template>
