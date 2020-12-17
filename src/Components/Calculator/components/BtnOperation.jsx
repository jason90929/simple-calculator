import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import CalBtn from '@/Components/Calculator/components/CalBtn';
import calculatorAction from '@/store/user/calculatorAction';
import styles from './styles/cal-btn-colors.module.scss';

function BtnOperation(props) {
  const onSetOperation = function () {
    if (props.storedResult) {
      console.log('calculate');
      props.onCalculate();
    }
    props.setOperation(props.operation);
  };

  return (
    <CalBtn
      className={styles['color-operation']}
      onClick={onSetOperation}
    >
      {props.children}
    </CalBtn>
  );
}

BtnOperation.defaultProps = {
  children: null,
  storedResult: '',
  operation: '',
  keepDisplayedInNextSet: false,
  keepResult() {},
  setOperation() {},
  onCalculate() {},
};

BtnOperation.propTypes = {
  children: PropTypes.node,
  storedResult: PropTypes.string, // eslint-disable-line
  operation: PropTypes.string,
  keepDisplayedInNextSet: PropTypes.bool, // eslint-disable-line
  keepResult: PropTypes.func, // eslint-disable-line
  setOperation: PropTypes.func,
  onCalculate: PropTypes.func, // eslint-disable-line
};

const mapStateToProps = function (state, ownProps) {
  return {
    storedResult: state.calculator.storedResult,
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    keepResult: () => dispatch(calculatorAction.keepResult()),
    setOperation: (operation) => dispatch(calculatorAction.setOperation(operation)),
    onCalculate: () => dispatch(calculatorAction.onCalculate()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BtnOperation);
