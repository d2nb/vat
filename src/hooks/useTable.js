import { reactive, computed, toRaw } from 'vue'
import useFetch from './useFetch'

const useTable = (service, options = {}) => {
  const pagination = reactive({
    current: 1,
    pageSize: 10,
    total: 0,
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: (total) => `共 ${total} 条`,
    onChange(page, pageSize) {
      pagination.current = page
      pagination.pageSize = pageSize

      const [params] = toRaw(fetchReturn.params.value)
      run(params)
    }
  })

  const fetchReturn = useFetch(service, {
    ...options,
    defaultParams: {
      page: pagination.current,
      page_size: pagination.pageSize,
      ...options.defaultParams
    },
    onSuccess(res) {
      pagination.total = res.totalCount
      options.onSuccess && options.onSuccess(res)
    }
  })

  const data = computed(() => fetchReturn.data.value?.list)

  const run = (params) => {
    return fetchReturn.run({
      ...params,
      page: pagination.current,
      page_size: pagination.pageSize
    })
  }

  return {
    ...fetchReturn,
    data,
    run,
    pagination
  }
}

export default useTable
