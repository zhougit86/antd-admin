/**
 * Created by root on 17-6-27.
 */


import React from 'react'
import PropTypes from 'prop-types'
import { FilterItem } from '../../components'
import { Form, Row, Col, Input } from 'antd'

const Search = Input.Search
const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16,
  },
}


const Filter = ({
  onFilterChange,
  name,
  form: {
    getFieldDecorator,
    getFieldsValue,
  },
})=>{
  const handleSubmit = () => {
    let fields = getFieldsValue()
    onFilterChange(fields)
  };
  return (
    <Row gutter={24}>
      <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
        {getFieldDecorator('name', { initialValue: name })(<Search placeholder="Search Name" size="large" onSearch={handleSubmit} />)}
      </Col>
    </Row>
  )
}


export default Filter
