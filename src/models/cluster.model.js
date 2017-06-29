import lodash from 'lodash'
import basicTableModel from './basicTable.model'

let basic = lodash.cloneDeep(basicTableModel);

export default {

  namespace: 'cluster',

  state:{
    ...basic.state
  },
  subscriptions: {
    setup ({dispatch, history}) {
      history.listen(location => {
        if (location.pathname === '/cluster') {
          dispatch({
            type: 'query',
            payload: location.query,
          })
        }
      })
    },
  },
  effects: {
    ...basic.effects,

  },
  reducers:{
    ...basic.reducers,

  }

}
