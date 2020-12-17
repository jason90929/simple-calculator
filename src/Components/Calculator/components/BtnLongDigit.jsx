import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import calculatorAction from '@/store/user/calculatorAction';
import CalLongBtn from '@/Components/Calculator/components/CalLongBtn';
import filterZeroAndDot from '@/resources/utils/filterZeroAndDot';
import filterDigits from '@/resources/utils/filterDigits';
import styles from './styles/cal-btn-colors.module.scss';

function BtnLongDigit(props) {
  const setResult = function () {
    let value;
    if (props.keepDisplayedInNextSet) {
      value = props.value;
      props.keepResult();
    } else {
      value = filterZeroAndDot(
        filterDigits(
          props.screenResult + props.value,
          8,
        ),
      );
    }
    props.setResult(value);
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
  screenResult: '',
  keepDisplayedInNextSet: false,
  keepResult() {},
  setResult() {},
};

BtnLongDigit.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
  screenResult: PropTypes.string,
  keepDisplayedInNextSet: PropTypes.bool,
  keepResult: PropTypes.func,
  setResult: PropTypes.func,
};

BtnLongDigit.displayName = 'CalLongBtn';
const mapStateToProps = function (state, ownProps) {
  return {
    screenResult: state.calculator.screenResult,
    keepDisplayedInNextSet: state.calculator.keepDisplayedInNextSet,
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    keepResult: () => dispatch(calculatorAction.keepResult()),
    setResult: (result) => dispatch(calculatorAction.setResult(result)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BtnLongDigit);
