import React from 'react';
import PropTypes from 'prop-types';

const Form = React.forwardRef(function (props, ref) {
  const onSubmit = function (event) {
    event.preventDefault();
    props.onSubmit(event);
  };

  const {
    children,
    ...remainProps
  } = props;
  remainProps.ref = ref;
  remainProps.className = props.className;
  remainProps.onSubmit = onSubmit;

  return (
    <form {...remainProps}>{children}</form>
  );
});

Form.defaultProps = {
  className: '',
  children: null,
  onSubmit() {},
};

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};

Form.whyDidYouRender = true;

export default React.memo(Form);
