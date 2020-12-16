import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import CalBtn from '@/Components/Calculator/components/CalBtn';
import calculatorAction from '@/store/user/calculatorAction';

function BtnOperation(props) {
  const onSetOperation = function () {
    props.setOperation(props.operation);
    props.keepResult();
  };

  return (
    <CalBtn
      onClick={onSetOperation}
    >
      {props.children}
    </CalBtn>
  );
}

BtnOperation.defaultProps = {
  children: null,
  operation: '',
  keepResult() {},
  setOperation() {},
};

BtnOperation.propTypes = {
  children: PropTypes.node,
  operation: PropTypes.string,
  keepResult: PropTypes.func,
  setOperation: PropTypes.func,
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    keepResult: () => dispatch(calculatorAction.keepResult()),
    setOperation: (operation) => dispatch(calculatorAction.setOperation(operation)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(BtnOperation);
