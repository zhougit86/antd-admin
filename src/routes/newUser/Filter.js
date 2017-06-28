/**
 * Created by root on 17-6-27.
 */


import React from 'react'
import PropTypes from 'prop-types'
import {FilterItem} from '../../components'
import {Form, Row, Col, Input, Button} from 'antd'

const Search = Input.Search
const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16,
  },
}

const TwoColProps = {
  ...ColProps,
  xl: 96,
}


const Filter = ({
  refresh,
  loading,
  selectedRowKeys,
  hasSelected,
  onFilterChange,
  filter,
  form: {
    getFieldDecorator,
    getFieldsValue,
  },
}) => {
  const handleSubmit = () => {
    let fields = getFieldsValue()
    onFilterChange(fields)
  };

  const {text} = filter

  return (
    <Row gutter={24}>
      <Col {...ColProps} xl={{span: 4}} md={{span: 8}}>
        {getFieldDecorator('text', {initialValue: text})(<Search placeholder="Search for any field" size="large"
                                                                 onSearch={handleSubmit}/>)}
      </Col>
      <Col {...TwoColProps} xl={{span: 10}} md={{span: 24}} sm={{span: 24}}>
          <Button type="primary" onClick={refresh} loading={loading}>Refresh</Button>
          <span style={{marginLeft: 8}}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
      </Col>

    </Row>
  )
}


export default Form.create()(Filter)
