import { fetcher } from '@/utils'

export const getTestList = (data) => fetcher.post('/api/c/account/media_list', data)
