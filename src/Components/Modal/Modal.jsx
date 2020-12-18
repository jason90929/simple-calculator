import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import A from '@/Components/A/A';
import { UnsavedProvider, unsavedInstance } from 'react-unsaved';
import modalInterface from './modalInterface';
import ModalContent from './ModalContent';
import styles from './styles/modal.module.scss';

// https://bulma.io/documentation/components/modal/
class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      useFirstActiveRender: false,
    };
    this.modalRef = React.createRef();

    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
    this.onEscClose = this.onEscClose.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  componentWillUnmount() {
    modalInterface.close(
      this.modalRef.current,
      this.onEscClose,
    );
  }

  onEscClose(event) {
    if (this.state.isActive === false) {
      return;
    }
    if (event.keyCode === 27 /* esc */) {
      event.preventDefault();
      event.stopPropagation();
      if (this.props.bindUnsaved) {
        if (unsavedInstance.getUnsavedStatus()) {
          unsavedInstance.showModal();
          const self = this;
          unsavedInstance.setAfterConfirmEvent(function () {
            self.close();
          });
          return;
        }
      }
      this.close();
    }
  }

  async show() {
    if (this.state.isActive === true) {
      return;
    }
    await this.setState({
      isActive: true,
      useFirstActiveRender: true,
    });
    modalInterface.open(
      this.modalRef.current,
      this.onEscClose,
    );
  }

  async close() {
    if (this.state.isActive === false) {
      return;
    }
    await this.setState({
      isActive: false,
    });
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
    window.setTimeout(async function (self) {
      modalInterface.close(
        self.modalRef.current,
        self.onEscClose,
      );

      if (self.props.destroyWhenClose) {
        await self.setState({
          useFirstActiveRender: false,
        });
      }
    }, 300, this); // Delay for modal closing animation
  }

  renderChildren() {
    if (this.props.renderWhenFirstActive) {
      if (this.state.useFirstActiveRender) {
        return this.props.children;
      }
      return null;
    }
    return this.props.children;
  }

  render() {
    let bgEl = <div className={cx(styles['modal-background'], this.props.bgClass)} />;
    if (this.props.canBgClose) {
      const aEl = (
        <A
          role="button"
          onClick={this.close}
        >
          {bgEl}
        </A>
      );
      bgEl = this.props.bindUnsaved
        ? (
          <UnsavedProvider>
            {aEl}
          </UnsavedProvider>
        )
        : aEl;
    }

    return (
      <div
        ref={this.modalRef}
        className={cx(styles['modal'], this.props.className, {
          [styles['is-active']]: this.state.isActive,
        })}
      >
        {bgEl}
        <ModalContent
          header={this.props.header}
          className={cx(styles['modal-content'], this.props.contentClass)}
          headerClass={this.props.headerClass}
          bodyClass={this.props.bodyClass}
          footerClass={this.props.footerClass}
          footer={this.props.footer}
          onClose={this.close}
          showXClose={this.props.showXClose}
          bindUnsaved={this.props.bindUnsaved}
          draggable={this.props.draggable}
        >
          {this.renderChildren()}
        </ModalContent>
      </div>
    );
  }
}

Modal.defaultProps = {
  className: '',
  contentClass: '', // modal 大小可在這個 class 加
  headerClass: '',
  bodyClass: '',
  footerClass: '',
  bgClass: '',
  header: null,
  children: null,
  footer: null,
  onClose() {},
  canBgClose: true,
  showXClose: true,
  draggable: false,
  bindUnsaved: false,
  renderWhenFirstActive: false,
  destroyWhenClose: false, // 通常和 renderWhenFirstActive 一起是 true
};

Modal.propTypes = {
  className: PropTypes.string,
  contentClass: PropTypes.string,
  headerClass: PropTypes.string,
  bodyClass: PropTypes.string,
  footerClass: PropTypes.string,
  bgClass: PropTypes.string,
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  children: PropTypes.node,
  footer: PropTypes.node,
  onClose: PropTypes.func,
  canBgClose: PropTypes.bool,
  showXClose: PropTypes.bool,
  draggable: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
  ]),
  bindUnsaved: PropTypes.bool,
  renderWhenFirstActive: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  destroyWhenClose: PropTypes.bool, // 通常和 renderWhenFirstActive 一起是 true
};

export default Modal;
