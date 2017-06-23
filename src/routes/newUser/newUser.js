import React from 'react';
import { connect } from 'dva';
import styles from './newUser.css';

function newUser() {
  return (
    <div className={styles.normal}>
      Route Component: NewUser/newUser
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(newUser);
