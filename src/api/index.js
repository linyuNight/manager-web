import server from '@/server/index'

export const getUpdateWeb = () => {
  return server.get('/updateWeb',)
}
