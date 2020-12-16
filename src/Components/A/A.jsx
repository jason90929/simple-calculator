import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const A = React.forwardRef(function (props, ref) {
  const {
    className: cn,
    children,
    ...remainProps
  } = props;

  return (
    <a
      ref={ref}
      className={cx('cursor-pointer', props.className)}
      {...remainProps}
    >
      {props.children}
    </a>
  );
});

A.defaultProps = {
  className: '',
  role: void 0,
  href: void 0,
  onClick() {},
  children: null,
};

A.propTypes = {
  className: PropTypes.string,
  role: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

A.whyDidYouRender = true;

export default A;
