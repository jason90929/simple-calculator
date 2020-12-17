import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import styles from './styles/screen.module.scss';

function Screen(props) {
  return (
    <div className={styles['screen']}>
      <div className={styles['operation']}>
        {props.operation}
      </div>
      <div className={styles['result']}>
        {props.screenResult || '0'}
      </div>
    </div>
  );
}

Screen.defaultProps = {
  operation: '',
  screenResult: '',
};

Screen.propTypes = {
  operation: PropTypes.string,
  screenResult: PropTypes.string,
};

const mapStateToProps = function (state, ownProps) {
  return {
    operation: state.calculator.operation,
    screenResult: state.calculator.screenResult,
  };
};

export default connect(
  mapStateToProps,
)(Screen);
