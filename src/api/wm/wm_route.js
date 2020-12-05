import fetch from '@/utils/fetch'

export function getRouteList() {
  return fetch({
    url: '/route/getRouteList',
    method: 'get'
  })
}

export function addRoute(data) {
  return fetch({
    url: '/route/add',
    method: 'post',
    data
  })
}
