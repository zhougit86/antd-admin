const APIV1 = '/api/v1'
const APIV2 = '/api/v2'
const APINEW = '/apinew'
const SUPER = ''

module.exports = {
  pageSize:4,
  name: 'AntD Admin',
  prefix: 'antdAdmin',
  footerText: 'Ant Design Admin  © 2017 zuiidea',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  YQL: ['http://www.zuimeitianqi.com'],
  CORS: ['http://10.0.31.116:8088'],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
    newUser: `${APINEW}/newUser`,
    Obj: `${APINEW}/config`,
    superLogin: `${SUPER}/login/`,
    superAttr: `${SUPER}/superset/table/4/SUPP_VENDOR_ARR_RATIO_DAY/DW/`,
  },
}
