/**
 * Created by chenkang1 on 2017/6/29.
 */
import request from "../utils/request";
import config from "../config";


export async function fetch({url, params = null, method = 'get'}) {
  console.log('xxxxxxxxxxxxxxx')
  return request({
    url: config.uri.api + url,
    method: method,
    data: params,
  })
}


