import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import CalBtn from '@/Components/Calculator/components/CalBtn';
import calculatorAction from '@/store/user/calculatorAction';
import styles from './styles/cal-btn-colors.module.scss';

const BtnCalculate = React.forwardRef(function (props, ref) {
  return (
    <CalBtn
      ref={ref}
      className={styles['color-operation']}
      onClick={props.onCalculate}
    >
      ＝
    </CalBtn>
  );
});

BtnCalculate.defaultProps = {
  onCalculate() {},
};

BtnCalculate.propTypes = {
  onCalculate: PropTypes.func,
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    onCalculate: () => dispatch(calculatorAction.onCalculate()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
  null,
  { forwardRef: true },
)(BtnCalculate);
