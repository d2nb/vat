<script setup>
import WorkStat from './components/WorkStat.vue'
import ProjectList from './components/ProjectList.vue'

const columns = [
  {
    title: '标题',
    dataIndex: 'title'
  },
  {
    title: '文件大小',
    dataIndex: 'size'
  },
  {
    title: '所有者',
    dataIndex: 'owner'
  },
  {
    title: '更新日期',
    dataIndex: 'updatedAt'
  }
]

const tableData = [
  {
    title: 'Fancy 设计稿.psd',
    size: '1.2MB',
    owner: '张菁芮',
    updatedAt: '2024-07-01'
  },
  {
    title: '广告创编项目原型.pdf',
    size: '2.3MB',
    owner: '张威',
    updatedAt: '2024-07-02'
  },
  {
    title: '后端 API 接口文档.docx',
    size: '3.4MB',
    owner: '尚鸿馨',
    updatedAt: '2024-07-03'
  }
]
</script>

<template>
  <div
    class="max-w-screen-xl mx-auto flex items-center px-3 py-2 text-brand-500 font-bold bg-brand-100 rounded mb-4 cursor-pointer"
  >
    <span class="mr-2">✨</span>
    <p>全球首款 Transformer 专用 AI 芯片 Sohu 发布：比英伟达 H100 快 20 倍！</p>
    <ArrowRightOutlined class="ml-auto" />
  </div>
  <div class="section-wrap">
    <div class="flex items-center text-3xl font-bold mb-8">
      <span class="mr-2 text-4xl">👋</span>
      <!-- <img src="@/assets/imgs/hello-icon.png" alt="hello" class="w-10 h-10 mr-2" /> -->
      你好，尚鸿馨
    </div>

    <WorkStat />
    <ProjectList />

    <div class="mt-16 mb-4 flex justify-between items-center">
      <div class="text-xl font-bold">待处理项目</div>
      <div>
        <a-range-picker class="mr-4" />
        <a-button type="primary">
          <template #icon><CloudUploadOutlined /></template>
          上传项目
        </a-button>
      </div>
    </div>
    <a-table
      class="mb-10"
      :columns="columns"
      :data-source="tableData"
      :pagination="false"
    ></a-table>
  </div>
</template>
