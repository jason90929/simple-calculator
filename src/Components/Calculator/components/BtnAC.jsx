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
      AC
    </CalBtn>
  );
}

BtnAC.defaultProps = {
  reset() {},
};

BtnAC.propTypes = {
  reset: PropTypes.func,
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    reset: () => dispatch(calculatorAction.reset()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(BtnAC);
