import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import CalBtn from '@/Components/Calculator/components/CalBtn';
import calculatorAction from '@/store/user/calculatorAction';
import filterZeroAndDot from '@/resources/utils/filterZeroAndDot';
import filterDigits from '@/resources/utils/filterDigits';
import divide from '@/resources/utils/divide';
import styles from './styles/cal-btn-colors.module.scss';

function BtnPercentage(props) {
  const setPercentage = function () {
    const result = filterZeroAndDot(
      filterDigits(
        Number.prototype.toString.call(
          divide(props.screenResult, 100),
        ),
        8,
      ),
    );
    props.setResult(result);
  };

  return (
    <CalBtn
      className={styles['color-gray']}
      onClick={setPercentage}
    >
      ％
    </CalBtn>
  );
}

BtnPercentage.defaultProps = {
  screenResult: '',
  setResult() {},
};

BtnPercentage.propTypes = {
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
)(BtnPercentage);
