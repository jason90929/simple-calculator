import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import routerInterface from './routerInterface';

class RouterBinder extends React.Component {
  async componentDidMount() {
    routerInterface.subscribeObserver((path) => {
      this.props.history.push(path);
      console.log('route pushed', path);
    });
  }

  componentWillUnmount() {
    routerInterface.unsubscribeObserver();
  }

  render() {
    return this.props.children;
  }
}

RouterBinder.defaultProps = {
  children: null,
  history: {
    push() {},
  }, // From withRouter()
};

RouterBinder.propTypes = {
  children: PropTypes.node,
  history: PropTypes.shape({
    push: PropTypes.func,
  }), // From withRouter()
};

export default withRouter(RouterBinder);
