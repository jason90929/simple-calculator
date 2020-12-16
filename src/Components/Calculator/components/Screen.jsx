import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';

function Screen(props) {
  return (
    <div>
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
