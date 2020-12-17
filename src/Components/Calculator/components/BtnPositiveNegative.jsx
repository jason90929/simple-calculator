import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import CalBtn from '@/Components/Calculator/components/CalBtn';
import calculatorAction from '@/store/user/calculatorAction';
import filterZeroAndDot from '@/resources/utils/filterZeroAndDot';
import styles from './styles/cal-btn-colors.module.scss';

function BtnPositiveNegative(props) {
  const setPositiveOrNegative = function () {
    const result = filterZeroAndDot(Number.prototype.toString.call(
      -props.screenResult,
    ));
    props.setResult(result);
  };

  return (
    <CalBtn
      className={styles['color-gray']}
      onClick={setPositiveOrNegative}
    >
      ±
    </CalBtn>
  );
}

BtnPositiveNegative.defaultProps = {
  screenResult: '',
  setResult() {},
};

BtnPositiveNegative.propTypes = {
  screenResult: PropTypes.string,
  setResult: PropTypes.func,
};

const mapStateToProps = function (state, ownProps) {
  return {
    screenResult: state.calculator.screenResult,
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    setResult: (result) => dispatch(calculatorAction.setResult(result)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BtnPositiveNegative);
