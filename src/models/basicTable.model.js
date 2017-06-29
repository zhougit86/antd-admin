import {create, remove, update} from '../services/user'
import * as usersService from '../services/users'
import {parse} from 'qs'
import lodash from 'lodash'

const {query} = usersService;


export default {
  state: {
    list: [],
    listBack: [],
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    selectedRowKeys: [],
    isMotion: localStorage.getItem('antdAdminUserIsMotion') === 'true',
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      current: 1,
      total: null,
    },
  },

  effects: {



    *'delete' ({payload}, {call, put, select}) {
      const data = yield call(remove, {id: payload})
      const {selectedRowKeys} = yield select(_ => _.user)
      if (data.success) {
        yield put({type: 'updateState', payload: {selectedRowKeys: selectedRowKeys.filter(_ => _ !== payload)}})
        yield put({type: 'query'})
      } else {
        throw data
      }
    },

    *'multiDelete' ({payload}, {call, put}) {
      const data = yield call(usersService.remove, payload)
      if (data.success) {
        yield put({type: 'updateState', payload: {selectedRowKeys: []}})
        yield put({type: 'query'})
      } else {
        throw data
      }
    },

    *create ({payload}, {call, put}) {
      const data = yield call(create, payload)
      if (data.success) {
        yield put({type: 'hideModal'})
        yield put({type: 'query'})
      } else {
        throw data
      }
    },

    *update ({payload}, {select, call, put}) {
      const id = yield select(({user}) => user.currentItem.id)
      const newUser = {...payload, id}
      const data = yield call(update, newUser)
      if (data.success) {
        yield put({type: 'hideModal'})
        yield put({type: 'query'})
      } else {
        throw data
      }
    },

  },

  reducers: {

    querySuccess (state, action) {
      const {list, pagination} = action.payload
      return {
        ...state,
        list,
        listBack: lodash.cloneDeep(list),
        pagination: {
          ...state.pagination,
          ...pagination,
        }
      }
    },

    updateState (state, {payload}) {
      return {
        ...state,
        ...payload,
      }
    },

    showModal (state, action) {
      return {...state, ...action.payload, modalVisible: true}
    },

    hideModal (state) {
      return {...state, modalVisible: false}
    },

    switchIsMotion (state) {
      localStorage.setItem('antdAdminUserIsMotion', !state.isMotion)
      return {...state, isMotion: !state.isMotion}
    },

    search(state, {payload}){
      let result = [];
      console.log(result)
      if (payload) {
        if (state.list && state.list.length > 0) {
          result = state.list.filter((row) => {
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
    }
  }
}
