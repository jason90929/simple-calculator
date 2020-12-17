import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '@/Components/Button/Button';
import styles from './styles/cal-btn.module.scss';

const CalBtn = React.forwardRef(function (props, ref) {
  return (
    <Button
      ref={ref}
      type="button"
      className={cx(styles['cal-btn'], props.className)}
      onClick={props.onClick}
    >
      <div className={styles['cal-btn-inner']}>
        {props.children}
      </div>
    </Button>
  );
});

CalBtn.displayName = 'CalBtn';

CalBtn.defaultProps = {
  className: '',
  onClick() {},
  children: null,
};

CalBtn.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default CalBtn;
