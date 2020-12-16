import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { UnsavedProvider } from 'react-unsaved';
import A from '@/Components/A/A';
import styles from './modal.module.scss';

function ModalContent(props) {
  let xCloseEl = null;
  if (props.onClose) {
    const aEl = (
      <A
        role="button"
        title="Close"
        className="close"
        onClick={props.onClose}
      >
        ✕
      </A>
    );

    if (props.showXClose) {
      xCloseEl = props.bindUnsaved
        ? (
          <UnsavedProvider>
            {aEl}
          </UnsavedProvider>
        )
        : aEl;
    }
  }

  return (
    <div className={cx(styles['modal-card'], styles['modal-content'], props.className)}>
      {props.header && (
        <header className={cx(styles['modal-card-head'], props.headerClass)}>
          {typeof props.header === 'string'
            ? (
              <h6 className={styles['modal-card-title']}>
                {props.header}
              </h6>
            )
            : props.header}
          {xCloseEl}
        </header>
      )}
      <section className={cx(styles['modal-card-body'], props.bodyClass)}>
        {props.children}
      </section>
      {props.footer && (
        <footer className={cx(styles['modal-card-foot'], props.footerClass)}>
          {props.footer}
        </footer>
      )}
    </div>
  );
}

ModalContent.defaultProps = {
  className: '',
  headerClass: '',
  bodyClass: '',
  footerClass: '',
  header: null,
  children: null,
  footer: null,
  onClose: void 0,
  showXClose: true,
  bindUnsaved: false,
};

ModalContent.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  className: PropTypes.string,
  headerClass: PropTypes.string,
  bodyClass: PropTypes.string,
  footerClass: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node,
  onClose: PropTypes.func,
  showXClose: PropTypes.bool,
  bindUnsaved: PropTypes.bool,
};

ModalContent.whyDidYouRender = true;

export default ModalContent;
