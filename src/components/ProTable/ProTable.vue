<script setup>
import { ref } from 'vue'
import { useFullscreen } from '@vueuse/core'
import { message } from 'ant-design-vue'

const props = defineProps({
  columns: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['reload', 'rowClick'])

const toolBarDom = ref(null)

const { isFullscreen, enter, exit } = useFullscreen()

const tableKeys = props.columns.map((item) => ({
  label: item.title,
  value: item.dataIndex
}))

const tableColumns = ref([...props.columns])
const selectedKeys = ref(tableKeys.map((item) => item.value))

const handleFieldChange = (value) => {
  if (value.length === 0) {
    message.warning('至少选择一项')
    return
  }
  selectedKeys.value = value
  tableColumns.value = propColumns.filter((item) => value.includes(item.dataIndex))
}

const onReload = () => {
  emit('reload')
}

const onFullscreen = () => {
  isFullscreen.value ? exit() : enter()
}

const handleDownload = () => {
  console.log('handleDownload')
}

const customRow = (record) => {
  return {
    onClick: (e) => {
      emit('rowClick', e, record)
    }
  }
}
</script>

<template>
  <!-- <div class="flex justify-between items-center mb-5">
    <div class="flex items-center">
      <slot name="left"></slot>
    </div>

    <div class="flex items-center relative" ref="toolBarDom">
      <slot name="right"></slot>
      <a-space size="middle" class="ml-5">
        <ReloadOutlined @click="onReload" />
        <a-popover trigger="click" :getPopupContainer="() => toolBarDom">
          <template #content>
            <div class="max-h-[320px] overflow-y-scroll">
              <a-checkbox-group :value="selectedKeys" @change="handleFieldChange">
                <a-space direction="vertical">
                  <a-checkbox v-for="item in tableKeys" :key="item.value" :value="item.value">
                    {{ item.label }}
                  </a-checkbox>
                </a-space>
              </a-checkbox-group>
            </div>
          </template>
          <SettingOutlined />
        </a-popover>
        <DownloadOutlined @click="handleDownload" />
        <FullscreenExitOutlined v-if="isFullscreen" @click="onFullscreen" />
        <FullscreenOutlined v-else @click="onFullscreen" />
      </a-space>
    </div>
  </div> -->

  <a-table v-bind="$attrs" :columns="tableColumns" :customRow="customRow">
    <template v-for="(item, key) in $slots" v-slot:[key]="props">
      <slot v-if="key" :name="key" v-bind="props"></slot>
      <slot v-else></slot>
    </template>
  </a-table>
</template>
