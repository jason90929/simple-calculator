import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/cal-grid.module.scss';

function CalGrid(props) {
  const { children } = props;

  return (
    <ul className={styles['cal-grid']}>
      {Array.prototype.map.call(children, function (child, index) {
        return (
          <li
            key={index}
            className={String.prototype.includes.call(child?.type?.displayName, 'Long')
              ? styles['cal-grid-long-item']
              : styles['cal-grid-item']}
          >
            {child}
          </li>
        );
      })}
    </ul>
  );
}

CalGrid.defaultProps = {
  children: null,
};

CalGrid.propTypes = {
  children: PropTypes.node,
};

export default CalGrid;
