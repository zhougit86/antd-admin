import React from 'react'
import PropTypes from 'prop-types'
import {Table} from 'antd'
import './DataTable.less';
import lodash from 'lodash';
import {fetch} from "../../services/restfulService";
import {sortJsonArr} from "../../utils/dataUtils";
import Filter from "./Filter";

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      current: 1,
      dataSourceBack: []
    }
  }

  componentDidMount() {
    const {fetchData} = this.props;

    fetch(fetchData)
      .then((result) => {
        this.setState({
          dataSource: result.data,
          dataSourceBack: lodash.cloneDeep(result.data),
          loading: false
        });
      })
  }

  handleTableChange = (pagination, filters, sorter) => {
    if (sorter.order) {
      let orderType = sorter.order === 'descend' ? 'desc' : 'asc';
      sortJsonArr(this.state.dataSource, sorter.field, orderType);
    }
    this.setState({current: pagination.current})
  };

  filterProps = {
    onFilterChange: ({name:keyword})=> {
      let result = [];
      let list = lodash.cloneDeep(this.state.dataSourceBack);
      if (keyword) {
        if (list && list.length > 0) {
          result = list.filter((row) => {
            return Object.values(row).filter(item => item && String(item).toLowerCase().indexOf(keyword.toLowerCase()) > -1).length > 0
          });
        }
      } else {
        result = this.state.dataSourceBack;
      }
      this.setState({dataSource: result})
    }
  };

  render() {
    const tableProps = {
      columns: this.props.columns,
      ...this.state
    };
    let pagination = {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      total: null,
      pageSize: 5,
      defaultPageSize: 5,
      pageSizeOptions: ['5', '20', '30', '40'],
      current: this.state.current
    };


    return (
      <div>
        <Filter {...this.filterProps} />
        <Table
          ref="DataTable"
          bordered
          onChange={this.handleTableChange}
          {...tableProps}
          pagination={pagination}
        />
      </div>
    )
  }
}


DataTable.propTypes = {
  fetch: PropTypes.object,
  rowKey: PropTypes.string,
  pagination: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object,
  ]),
  columns: PropTypes.array,
  dataSource: PropTypes.array,
}

export default DataTable
