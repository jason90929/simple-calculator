import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '@/Components/Button/Button';
import styles from './styles/cal-btn.module.scss';

function CalBtn(props) {
  return (
    <Button
      type="button"
      title={props.title}
      className={cx(styles['cal-btn'], props.className)}
      onClick={props.onClick}
    >
      <div className={styles['cal-btn-inner']}>
        {props.children}
      </div>
    </Button>
  );
}

CalBtn.displayName = 'CalBtn';

CalBtn.defaultProps = {
  className: '',
  title: '',
  onClick() {},
  children: null,
};

CalBtn.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default CalBtn;
