/**
 * Created by chenkang1 on 2017/7/2.
 */
export default {
  state: {
    modalVisible: false,
    selectedItems: [],
    refresh: 1,
  },

  effects: {},

  reducers: {
    showModal (state, {payload}) {
      return {...state, ...payload, modalVisible: true}
    },
    hideModal (state) {
      return {...state, modalVisible: false}
    },
    updateSelectItems(state, {payload: selectedItems}){
      return {
        ...state,
        selectedItems
      }
    },
    refresh(state){
      return {
        ...state,
        refresh: ++state.refresh
      }
    }
  }
}
