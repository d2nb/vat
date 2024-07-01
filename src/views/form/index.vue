<script setup>
import { Modal } from 'ant-design-vue'

const handleSubmit = () => {
  Modal.confirm({
    title: '确认提交',
    content: '是否确认提交表单？'
  })
}
</script>

<template>
  <a-form layout="vertical">
    <a-card title="仓库管理" :bordered="false">
      <a-row :gutter="32">
        <a-col :span="8">
          <a-form-item label="仓库名">
            <a-input placeholder="请输入仓库名称" />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="仓库域名">
            <a-input addon-before="http://" addon-after=".com" />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="仓库管理员">
            <a-select placeholder="请选择管理员">
              <a-select-option value="1">周龙杰</a-select-option>
              <a-select-option value="2">张威</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="审批人">
            <a-select placeholder="请选择审批人">
              <a-select-option value="1">尚鸿馨</a-select-option>
              <a-select-option value="2">张威</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="生效日期">
            <a-range-picker class="w-full" />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="仓库类型">
            <a-select placeholder="请选择仓库类型">
              <a-select-option value="1">私密</a-select-option>
              <a-select-option value="2">公开</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
    </a-card>

    <a-card title="任务管理" :bordered="false" class="mt-8">
      <a-row :gutter="32">
        <a-col :span="8">
          <a-form-item label="任务名">
            <a-input placeholder="请输入任务名" />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="任务描述">
            <a-input placeholder="请输入任务描述" />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="执行人">
            <a-select placeholder="请选择执行人">
              <a-select-option value="1">周龙杰</a-select-option>
              <a-select-option value="2">张威</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="责任人">
            <a-select placeholder="请选择责任人">
              <a-select-option value="1">周龙杰</a-select-option>
              <a-select-option value="2">张威</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="生效日期">
            <a-date-picker class="w-full" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-card>
  </a-form>

  <div class="fixed right-0 bottom-0 bg-white w-full py-3 px-6 text-right">
    <a-space>
      <a-button>重置</a-button>
      <a-button type="primary" @click="handleSubmit">提交</a-button>
    </a-space>
  </div>
</template>
