import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { UnsavedProvider } from 'react-unsaved';
import A from '@/Components/A/A';
import draggableInterface from '@/resources/interfaces/draggableInterface';
import styles from './styles/modal.module.scss';

function ModalContent(props) {
  const contentRef = React.useRef(null);

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

  React.useEffect(function () {
    if (props.draggable) {
      const condition = typeof props.draggable === 'function' ? props.draggable : undefined;
      return draggableInterface.init(contentRef.current, condition);
    }
    return null;
  }, [props.draggable, contentRef]);

  return (
    <div
      ref={contentRef}
      className={cx(styles['modal-card'], styles['modal-content'], props.className, {
        [styles['modal-draggable']]: !!props.draggable,
      })}
    >
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
  draggable: false,
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
  draggable: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
  ]),
};

ModalContent.whyDidYouRender = true;

export default ModalContent;
