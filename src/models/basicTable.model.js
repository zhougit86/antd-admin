import {parse} from 'qs'
import lodash from 'lodash'
import {sortJsonArr} from "../utils/dataUtils";

export default {
  namespace: 'basicTable',
  state: {
    list: [],
    listBack: [],
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      current: 1,
      total: null,
      pageSize: 5,
      defaultPageSize: 5,
      pageSizeOptions: ['5', '20', '30', '40'],
    },
  },

  effects: {},

  reducers: {

    search(state, {payload}){
      let result = [];
      let list = lodash.cloneDeep(state.listBack);
      if (payload) {
        if (list && list.length > 0) {
          result = list.filter((row) => {
            return Object.values(row).filter(item => item && String(item).toLowerCase().indexOf(payload.toLowerCase()) > -1).length > 0
          });
        }
      } else {
        result = state.listBack;
      }

      return {
        ...state,
        list: result
      }
    },

    changePage(state, {payload}){
      state.pagination.current = payload;
      return {
        ...state
      }
    },

    sort(state, {payload}){

      let orderType = payload.order === 'descend' ? 'desc' : 'asc';
      sortJsonArr(state.list,payload.field,orderType);

      return {
        ...state
      }
    }
  }
}
