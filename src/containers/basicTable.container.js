/**
 * Created by chenkang1 on 2017/6/29.
 */
import React from 'react';
export class BasicTableContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  search = (value) => {
    // console.log()
    console.log(value)
    this.props.dispatch({
      type: `${this.props.route.path}/search`,
      payload: value.name
    })
  };

  handleChange = (pagination, filters, sorter) => {
    this.props.dispatch({
      type: `${this.props.route.path}/tableChange`,
      payload: {
        sorter,
        pagination
      }
    })
  }

}