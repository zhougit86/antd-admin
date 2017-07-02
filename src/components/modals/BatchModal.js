/**
 * Created by chenkang1 on 2017/7/2.
 */
import React from 'react';
import {Modal, Button} from 'antd';

class BatchModal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }


  handleOk = (e) => {
    console.log(e);
    // this.setState({
    //   visible: false,
    // });
  }
  handleCancel = (e) => {
    console.log(e);
    // this.setState({
    //   visible: false,
    // });
  }

  render() {
    return (
      <div>
        <Modal
          title={this.props.title}
          visible={this.props.visible}
          onOk={this.props.handleOk}
          onCancel={this.props.onCancel}
        >
          {
            this.props.selectedItems.map((item)=> (<p>{item.name}</p>))
          }
        </Modal>
      </div>
    );
  }

}


BatchModal.propTypes = {

};

export default BatchModal
