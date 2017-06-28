import lodash from 'lodash'
import basicTableModel from './basicTable.model'

let basic = lodash.cloneDeep(basicTableModel);

export default {

  namespace: 'cluster',

  ...basic
}
