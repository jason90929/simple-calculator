import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import CalBtn from '@/Components/Calculator/components/CalBtn';
import calculatorAction from '@/store/user/calculatorAction';
import filterZeroAndDot from '@/resources/utils/filterZeroAndDot';

function BtnDigit(props) {
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
    <CalBtn
      onClick={setResult}
    >
      {props.children}
    </CalBtn>
  );
}

BtnDigit.defaultProps = {
  children: null,
  value: '',
  displayedResult: '',
  keepDisplayedInNextSet: false,
  setResult() {},
};

BtnDigit.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
  displayedResult: PropTypes.string,
  keepDisplayedInNextSet: PropTypes.bool,
  setResult: PropTypes.func,
};

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
)(BtnDigit);
