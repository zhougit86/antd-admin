/**
 * Created by root on 17-6-23.
 */


import { request, config } from '../utils'
const { api } = config
const { Obj } = api

export async function query (params) {
  return request({
    url: Obj,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: Obj,
    method: 'post',
    data: params,
  })
}

export async function auth (params) {
  console.log(Obj)
  return request(
    {
      url: 'http://10.0.31.116:8088' + Obj,
      method: 'post',
      data: params,
    }
  )
}
