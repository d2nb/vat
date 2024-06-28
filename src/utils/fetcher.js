import axios from 'axios'
import router from '@/router'
import appConfig from '@/config'
import { storage } from '@/utils'
import { message } from 'ant-design-vue'

const fetcher = axios.create({
  baseURL: appConfig.API_URL,
  timeout: 8000
})

fetcher.interceptors.request.use((config) => {
  // const token = storage.get(appConfig.TOKEN_KEY)
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJwbGF0Zm9ybSI6MiwiZXhwIjoxNzE5NjI0NDU4LCJpc3MiOiJkYWVyZG8tbWVkaWNpbmUifQ.2VptPZOgh1Tidi0wbQwRg-sXGZ5s6zJZybt4-nsaP9A'

  if (token) {
    config.headers.Authorization = token
  }

  return config
})

fetcher.interceptors.response.use(({ data }) => {
  if (data.code === 0) {
    return data
  }

  // 错误处理
  switch (data.code) {
    case 40000:
      storage.clear()
      router.push('/sign-in')
      break
  }

  message.error(data.msg)
  return Promise.reject(data)
})

export default fetcher
