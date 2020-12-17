import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import styles from './styles/screen.module.scss';

function Screen(props) {
  return (
    <div className={styles['screen']}>
      {props.displayedResult || '0'}
    </div>
  );
}

Screen.defaultProps = {
  displayedResult: '',
};

Screen.propTypes = {
  displayedResult: PropTypes.string,
};

const mapStateToProps = function (state, ownProps) {
  return {
    displayedResult: state.calculator.displayedResult,
  };
};

export default connect(
  mapStateToProps,
)(Screen);
