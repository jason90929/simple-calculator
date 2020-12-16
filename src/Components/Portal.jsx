import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// This should be found in index.html
const root = document.getElementById('root');

// Let's create a Modal component that is an abstraction around
// the portal API.
class Portal extends React.Component {
  constructor(props) {
    super(props);
    // Create a div that we'll render the modal into. Because each
    // Modal component has its own element, we can render multiple
    // modal components into the modal container.
    this.el = document.createElement('div');

    this.getElement = this.getElement.bind(this);
  }

  componentDidMount() {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    root.appendChild(this.el);
  }

  componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    root.removeChild(this.el);
  }

  getElement(children) {
    return (
      ReactDOM.createPortal(
        // Any valid React child: JSX, strings, arrays, etc.
        children,
        // Icon DOM element
        this.el,
      )
    );
  }

  render() {
    // Use a portal to render the children into the element
    return this.getElement(this.props.children);
  }
}

Portal.defaultProps = {
  children: null,
};

Portal.propTypes = {
  children: PropTypes.node,
};

Portal.whyDidYouRender = true;

export default Portal;
