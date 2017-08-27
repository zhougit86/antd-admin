/**
 * Created by Administrator on 2017-08-27.
 */


import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Cascader } from 'antd'


const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const modal = ({
                 item = {},
                 onOk,
                 form: {
                   getFieldDecorator,
                   validateFields,
                   getFieldsValue,
                 },
                 ...modalProps
               }) => {
  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        // key: item.key,
      }
      // console.log(data)
      onOk(data)
    })
  }

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
  }

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="ServiceName" hasFeedback {...formItemLayout}>
          {getFieldDecorator('ServiceName', {
        initialValue: item.name,
        rules: [
          {
            required: true,
          },
        ],
      })(<Input />)}
      </FormItem>

        <FormItem label="ObjectName" hasFeedback {...formItemLayout}>
          {getFieldDecorator('ObjectName', {
            initialValue: item.name,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>

        <FormItem label="ObjectType" hasFeedback {...formItemLayout}>
          {getFieldDecorator('ObjectType', {
            initialValue: item.name,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>

        <FormItem label="MinNum" hasFeedback {...formItemLayout}>
          {getFieldDecorator('MinNum', {
            initialValue: item.name,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>

        <FormItem label="MaxNum" hasFeedback {...formItemLayout}>
          {getFieldDecorator('MaxNum', {
            initialValue: item.name,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>

        <FormItem label="SupportOps" hasFeedback {...formItemLayout}>
          {getFieldDecorator('SupportOps', {
            initialValue: item.name,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>

        <FormItem label="OpsWithScript" hasFeedback {...formItemLayout}>
          {getFieldDecorator('OpsWithScript', {
            initialValue: item.name,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>

        <FormItem label="AdmVisible" hasFeedback {...formItemLayout}>
          {getFieldDecorator('AdmVisible', {
            initialValue: item.name,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>

        <FormItem label="EngName" hasFeedback {...formItemLayout}>
          {getFieldDecorator('EngName', {
            initialValue: item.name,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>

        <FormItem label="ChnName" hasFeedback {...formItemLayout}>
          {getFieldDecorator('ChnName', {
            initialValue: item.name,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>


      </Form>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}



export default Form.create()(modal)
