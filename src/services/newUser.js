/**
 * Created by root on 17-6-23.
 */


import { request, config } from '../utils'
const { api } = config
const { newUser } = api

export async function query (params) {
  return request({
    url: newUser,
    method: 'get',
    data: params,
  })
}
