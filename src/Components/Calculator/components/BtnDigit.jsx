import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import CalBtn from '@/Components/Calculator/components/CalBtn';
import calculatorAction from '@/store/user/calculatorAction';
import styles from './styles/cal-btn-colors.module.scss';

function BtnDigit(props) {
  const setResult = function () {
    props.setResult(props.value);
  };

  return (
    <CalBtn
      className={styles['color-digit']}
      onClick={setResult}
    >
      {props.children}
    </CalBtn>
  );
}

BtnDigit.defaultProps = {
  children: null,
  value: '',
  setResult() {},
};

BtnDigit.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
  setResult: PropTypes.func,
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    setResult: (result) => dispatch(calculatorAction.setResult(result)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(BtnDigit);
