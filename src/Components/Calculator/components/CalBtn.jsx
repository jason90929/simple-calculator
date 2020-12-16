import React from 'react';
import Button from '@/Components/Button/Button';
import PropTypes from 'prop-types';
import styles from './styles/cal-btn.module.scss';

function CalBtn(props) {
  return (
    <Button
      type="button"
      className={styles['cal-btn']}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}

CalBtn.displayName = 'CalBtn';

CalBtn.defaultProps = {
  onClick() {},
  children: null,
};

CalBtn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default CalBtn;
