<script setup lang="jsx">
import { reactive, computed, toRaw } from 'vue'
import { Form } from 'ant-design-vue'

const props = defineProps({
  schema: {
    type: Object,
    required: true
  },
  labelWidth: {
    type: String,
    default: 'auto'
  }
})

const emit = defineEmits(['search', 'reset'])

const span = computed(() => {
  return (4 - (Object.keys(props.schema).length % 4)) * 6
})

const formData = reactive({})

for (const key in props.schema) {
  formData[key] = props.schema[key].props?.defaultValue
}

const { resetFields, validate, validateInfos } = Form.useForm(formData)

const handleReset = () => {
  resetFields()
  emit('reset', toRaw(formData))
}

const handleSearch = async () => {
  try {
    await validate()
    const value = Object.keys(toRaw(formData)).reduce((acc, key) => {
      acc[key] = formData[key] === '' ? undefined : formData[key]
      return acc
    }, {})

    emit('search', value)
  } catch (error) {
    console.log(error)
  }
}

const getWidget = (widget) => {
  switch (widget) {
    case 'input':
      return <a-input />
    case 'select':
      return <a-select />
    case 'date-picker':
      return <a-date-picker />
    case 'range-picker':
      return <a-range-picker />
    default:
      return <a-input />
  }
}
</script>

<template>
  <a-form :labelCol="{ style: { width: props.labelWidth } }">
    <a-row class="w-full">
      <a-col v-for="(value, key) in props.schema" :key="key" :span="6">
        <a-form-item :label="value.title" class="px-2" v-bind="validateInfos[key]">
          <component
            :is="getWidget(value.widget)"
            class="w-full"
            v-model:value="formData[key]"
            v-bind="value.props"
          />
        </a-form-item>
      </a-col>
      <a-col :span="span" class="text-right px-2">
        <a-space class="mb-6">
          <a-button type="primary" @click="handleSearch">查询</a-button>
          <a-button @click="handleReset">重置</a-button>
        </a-space>
      </a-col>
    </a-row>
  </a-form>
</template>
