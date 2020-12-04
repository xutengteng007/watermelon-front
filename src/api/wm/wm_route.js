import fetch from '@/utils/fetch'

export function getRouteList() {
  return fetch({
    url: '/route/getRouteList',
    method: 'get'
  })
}
