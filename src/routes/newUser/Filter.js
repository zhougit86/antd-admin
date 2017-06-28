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
  filter,
  form: {
    getFieldDecorator,
    getFieldsValue,
  },
})=>{
  const handleSubmit = () => {
    let fields = getFieldsValue()
    onFilterChange(fields)
  };

  const { text } = filter

  return (
    <Row gutter={24}>
      <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
        {getFieldDecorator('text', { initialValue: text })(<Search placeholder="Search for any field" size="large" onSearch={handleSubmit} />)}
      </Col>
    </Row>
  )
}


export default Form.create()(Filter)
