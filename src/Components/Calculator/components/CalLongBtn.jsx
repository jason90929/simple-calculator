import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '@/Components/Button/Button';
import styles from './styles/cal-long-btn.module.scss';

const CalLongBtn = React.forwardRef(function (props, ref) {
  return (
    <Button
      ref={ref}
      type="button"
      className={cx(styles['cal-long-btn'], props.className)}
      onClick={props.onClick}
    >
      <div className={styles['cal-btn-inner']}>
        {props.children}
      </div>
    </Button>
  );
});

CalLongBtn.displayName = 'CalLongBtn';

CalLongBtn.defaultProps = {
  className: '',
  onClick() {},
  children: null,
};

CalLongBtn.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default CalLongBtn;
