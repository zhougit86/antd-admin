/**
 * Created by chenkang1 on 2017/6/30.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'dva'
import DataTable from '../../components/BasicTable2/DataTable';
import {Table, Row, Col, Card, Select} from 'antd';
import styles from './List.less';
import {Link} from 'dva/router'
import DropOption from "../../components/DropOption/DropOption";
import {fetch} from "../../services/restfulService";

class DataTablePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      loading:true,
      columns: [
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
          sorter: true,
        }, {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          sorter: true,
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
      ]

    }
  }

  componentDidMount() {
    fetch({url: 'cluster'}).then((result) => {
      this.setState({
        dataSource: result.data,
        loading:false
      });
    })
  }


  render() {
    let tableDataProps = {
      ...this.state
    };

    return (<div className="content-inner">
      <Row gutter={32}>
        <Col lg={24} md={24}>
          <Card title="远程数据">
            <DataTable
              {...tableDataProps}
            />
          </Card>
        </Col>
      </Row>

    </div>)
  }
}


function mapStateToProps({host, loading}) {
  return {
    host,
    loading
  }
}

DataTablePage.propTypes = {
  cluster: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
};

export default connect(mapStateToProps)(DataTablePage)


