import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import calculatorAction from '@/store/user/calculatorAction';
import CalLongBtn from '@/Components/Calculator/components/CalLongBtn';
import styles from './styles/cal-btn-colors.module.scss';

function BtnLongDigit(props) {
  const setResult = function () {
    props.setResult(props.value);
  };

  return (
    <CalLongBtn
      className={styles['color-digit']}
      onClick={setResult}
    >
      {props.children}
    </CalLongBtn>
  );
}

BtnLongDigit.defaultProps = {
  children: null,
  value: '',
  setResult() {},
};

BtnLongDigit.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
  setResult: PropTypes.func,
};

BtnLongDigit.displayName = 'CalLongBtn';

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    setResult: (result) => dispatch(calculatorAction.setResult(result)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(BtnLongDigit);
