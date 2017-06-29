/**
 * Created by chenkang1 on 2017/6/29.
 */
import {Pagination} from 'antd';

export default ({}) => {

  const onChange = () => {
    console.log('xxxxxxxxxx')
  }

  return (
    <div>
      <Pagination showSizeChanger onChange={onChange} defaultCurrent={3} total={500}/>
      hehe
    </div>

  )
}


