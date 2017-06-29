import PropTypes from 'prop-types'
import {connect} from 'dva'
import BasicTable from '../../components/BasicTable'
import {Link} from 'dva/router'
import styles from './List.less'
import DropOption from "../../components/DropOption/DropOption";
import {BasicTableContainer} from "../../containers/basicTable.container";

class clusterTable extends BasicTableContainer {
  constructor() {
    super();

  }

  componentDidMount() {
    // console.log(this.props)
  }

  render() {

    let columns = [
      {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
        width: 64,
        className: styles.avatar,
        render: (text) => <img alt={'avatar'} width={24} src={text}/>,
      }, {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
      }, {
        title: 'NickName',
        dataIndex: 'nickName',
        key: 'nickName',
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: 'Gender',
        dataIndex: 'isMale',
        key: 'isMale',
        render: (text) => <span>{text
          ? 'Male'
          : 'Female'}</span>,
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
      }, {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      }, {
        title: 'CreateTime',
        dataIndex: 'createTime',
        key: 'createTime',
      }, {
        title: 'Operation',
        key: 'operation',
        width: 100,
        render: (text, record) => {
          return <DropOption onMenuClick={e => handleMenuClick(record, e)}
                             menuOptions={[{key: '1', name: 'Update'}, {key: '2', name: 'Delete'}]}/>
        },
      },
    ];

    let tableProps = {
      columns: columns,
      dataSource: this.props.cluster.list,
      loading:this.props.loading.effects['cluster/queryTableData'],
      filterProps: {
        onFilterChange: this.search
      },
      pagination: {
        ...this.props.cluster.pagination,
        onChange:this.onChange
      },
    };


    return (
      <div className="content-inner">
        <BasicTable {...tableProps} />
      </div>
    )
  }
}


function mapStateToProps({cluster,loading}) {
  return {
    cluster,
    loading
  }
}

BasicTableContainer.propTypes = {
  cluster: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
};

export default connect(mapStateToProps)(clusterTable)


