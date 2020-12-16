import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import calculatorAction from '@/store/user/calculatorAction';
import CalLongBtn from '@/Components/Calculator/components/CalLongBtn';
import filterZeroAndDot from '@/resources/utils/filterZeroAndDot';

function BtnLongDigit(props) {
  const setResult = function () {
    let value;
    if (props.keepDisplayedInNextSet) {
      value = props.value;
    } else {
      value = filterZeroAndDot(props.displayedResult + props.value);
    }
    props.setResult(value);
  };

  return (
    <CalLongBtn
      onClick={setResult}
    >
      {props.children}
    </CalLongBtn>
  );
}

BtnLongDigit.defaultProps = {
  children: null,
  value: '',
  displayedResult: '',
  keepDisplayedInNextSet: false,
  setResult() {},
};

BtnLongDigit.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
  displayedResult: PropTypes.string,
  keepDisplayedInNextSet: PropTypes.bool,
  setResult: PropTypes.func,
};

BtnLongDigit.displayName = 'CalLongBtn';

const mapStateToProps = function (state, ownProps) {
  return {
    displayedResult: state.calculator.displayedResult,
    keepDisplayedInNextSet: state.calculator.keepDisplayedInNextSet,
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
)(BtnLongDigit);
