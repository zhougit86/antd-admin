/**
 * Created by root on 17-6-23.
 */


import { request, config } from '../utils'
const { api } = config
const { Obj, superLogin, superAttr } = api

export async function query (params) {
  return request({
    url: superAttr,
    method: 'get',
    // data: params,
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
  console.log(superLogin)
  return request(
    {
      url: superLogin,
      method: 'auth',
      // baseURL: 'http://10.0.31.116:8088',
      // withCredentials: true,
      // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: params,
    }
  )
}

