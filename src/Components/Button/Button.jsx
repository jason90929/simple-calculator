import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Button = React.forwardRef(function (props, ref) {
  const {
    children,
    ...remainProps
  } = props;

  remainProps.ref = ref;
  remainProps.className = cx('btn', props.className);

  return (
    // eslint-disable-next-line react/button-has-type
    <button {...remainProps}>{props.children}</button>
  );
});

Button.defaultProps = {
  className: '',
  type: 'submit',
  onClick() {},
  disabled: false,
  children: null,
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'button',
    'submit',
  ]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Button.whyDidYouRender = true;

export default React.memo(Button);
