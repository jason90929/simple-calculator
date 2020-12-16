import React from 'react';
import Button from '@/Components/Button/Button';
import PropTypes from 'prop-types';
import styles from './styles/cal-long-btn.module.scss';

function CalLongBtn(props) {
  return (
    <Button
      type="button"
      className={styles['cal-long-btn']}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}

CalLongBtn.displayName = 'CalLongBtn';

CalLongBtn.defaultProps = {
  onClick() {},
  children: null,
};

CalLongBtn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default CalLongBtn;
