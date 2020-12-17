import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import styles from './styles/screen.module.scss';

function Screen(props) {
  return (
    <div className={styles['screen']}>
      {props.screenResult || '0'}
    </div>
  );
}

Screen.defaultProps = {
  screenResult: '',
};

Screen.propTypes = {
  screenResult: PropTypes.string,
};

const mapStateToProps = function (state, ownProps) {
  return {
    screenResult: state.calculator.screenResult,
  };
};

export default connect(
  mapStateToProps,
)(Screen);
