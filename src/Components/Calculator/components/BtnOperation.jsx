import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import CalBtn from '@/Components/Calculator/components/CalBtn';
import calculatorAction from '@/store/user/calculatorAction';
import styles from './styles/cal-btn-colors.module.scss';

const BtnOperation = React.forwardRef(function (props, ref) {
  const onSetOperation = function () {
    if (props.storedResult) {
      props.onCalculate();
    }
    props.setOperation(props.operation);
  };

  return (
    <CalBtn
      ref={ref}
      className={styles['color-operation']}
      onClick={onSetOperation}
    >
      {props.children}
    </CalBtn>
  );
});

BtnOperation.defaultProps = {
  children: null,
  storedResult: '',
  operation: '',
  setOperation() {},
  onCalculate() {},
};

BtnOperation.propTypes = {
  children: PropTypes.node,
  storedResult: PropTypes.string,
  operation: PropTypes.string,
  setOperation: PropTypes.func,
  onCalculate: PropTypes.func,
};

const mapStateToProps = function (state, ownProps) {
  return {
    storedResult: state.calculator.storedResult,
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    setOperation: (operation) => dispatch(calculatorAction.setOperation(operation)),
    onCalculate: () => dispatch(calculatorAction.onCalculate()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true },
)(BtnOperation);
