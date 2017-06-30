/**
 * Created by chenkang1 on 2017/6/30.
 */
import {parse} from 'qs'

export default {
  namespace: 'host',
  state: {
    modalVisible:false
  },

  effects: {},

  reducers: {
    showModal (state, { payload }) {
      return { ...state, ...payload, modalVisible: true }
    },
    hideModal (state) {
      return { ...state, modalVisible: false }
    },
  }
}
