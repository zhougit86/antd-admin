/**
 * Created by chenkang1 on 2017/6/29.
 */
import request from "../utils/request";
export async function doGet ({url,params = null}) {
  return request({
    url: url,
    method: 'get',
    data: params,
  })
}

export async function doPost ({url,params = null}) {
  return request({
    url: url,
    method: 'post',
    data: params,
  })
}

export async function doPut ({url,params = null}) {
  return request({
    url: url,
    method: 'put',
    data: params,
  })
}

export async function doDelete ({url,params = null}) {
  return request({
    url: url,
    method: 'delete',
    data: params,
  })
}

export async function doPatch ({url,params = null}) {
  return request({
    url: url,
    method: 'patch',
    data: params,
  })
}
