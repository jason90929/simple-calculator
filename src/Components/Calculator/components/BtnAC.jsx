import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import CalBtn from '@/Components/Calculator/components/CalBtn';
import calculatorAction from '@/store/user/calculatorAction';
import styles from './styles/cal-btn-colors.module.scss';

function BtnAC(props) {
  return (
    <CalBtn
      className={styles['color-gray']}
      onClick={props.reset}
    >
      {Number(props.screenResult) ? 'C' : 'AC'}
    </CalBtn>
  );
}

BtnAC.defaultProps = {
  screenResult: '',
  reset() {},
};

BtnAC.propTypes = {
  screenResult: PropTypes.string,
  reset: PropTypes.func,
};

const mapStateToProps = function (state, ownProps) {
  return {
    screenResult: state.calculator.screenResult,
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    reset: () => dispatch(calculatorAction.reset()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BtnAC);
