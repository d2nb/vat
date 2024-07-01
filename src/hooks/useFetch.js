import { ref } from 'vue'
import { useAsyncState } from '@vueuse/core'

const processParams = (params) => {
  if (!Array.isArray(params)) {
    return [params]
  }
  return params
}

const useFetch = (service, options = {}) => {
  const params = ref([])
  const data = ref()

  const { isLoading, execute, error } = useAsyncState(
    (...args) => {
      params.value = args.length ? args : processParams(options.defaultParams)
      return service(...params.value)
    },
    undefined,
    {
      ...options,
      onSuccess(res) {
        data.value = res.data
        options.onSuccess && options.onSuccess(res.data)
      }
    }
  )

  const run = (...args) => {
    if (args.length) {
      params.value = args
    }
    return execute(0, ...params.value)
  }

  const refresh = () => {
    return execute(0, ...params.value)
  }

  return {
    data,
    isLoading,
    params,
    run,
    refresh,
    error
  }
}

export default useFetch
