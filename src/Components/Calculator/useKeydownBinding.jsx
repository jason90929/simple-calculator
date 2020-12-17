import React from 'react';

const useKeydownBinding = function () {
  const acBtnRef = React.useRef(null);
  const divideBtnRef = React.useRef(null);
  const multiplyBtnRef = React.useRef(null);
  const subtractBtnRef = React.useRef(null);
  const addBtnRef = React.useRef(null);
  const enterBtnRef = React.useRef(null);
  const oneBtnRef = React.useRef(null);
  const twoBtnRef = React.useRef(null);
  const threeBtnRef = React.useRef(null);
  const fourBtnRef = React.useRef(null);
  const fiveBtnRef = React.useRef(null);
  const sixBtnRef = React.useRef(null);
  const sevenBtnRef = React.useRef(null);
  const eightBtnRef = React.useRef(null);
  const nineBtnRef = React.useRef(null);
  const zeroBtnRef = React.useRef(null);
  const dotBtnRef = React.useRef(null);

  React.useEffect(function () {
    return (function initKeypress() {
      const onKeydown = function (event) {
        let targetRef = null;
        switch (event.keyCode) {
          case 13: // enter
            targetRef = enterBtnRef;
            break;
          case 8: // backspace
          case 46: // delete
            targetRef = acBtnRef;
            break;
          case 107: // +
            targetRef = addBtnRef;
            break;
          case 109: // -
            targetRef = subtractBtnRef;
            break;
          case 106: // *
            targetRef = multiplyBtnRef;
            break;
          case 111: // /
            targetRef = divideBtnRef;
            break;
          case 110: // .
            targetRef = dotBtnRef;
            break;
          case 48: // 0
            targetRef = zeroBtnRef;
            break;
          case 49: // 1
            targetRef = oneBtnRef;
            break;
          case 50: // 2
            targetRef = twoBtnRef;
            break;
          case 51: // 3
            targetRef = threeBtnRef;
            break;
          case 52: // 4
            targetRef = fourBtnRef;
            break;
          case 53: // 5
            targetRef = fiveBtnRef;
            break;
          case 54: // 6
            targetRef = sixBtnRef;
            break;
          case 55: // 7
            targetRef = sevenBtnRef;
            break;
          case 56: // 8
            targetRef = eightBtnRef;
            break;
          case 57: // 9
            targetRef = nineBtnRef;
            break;
          default:
        }
        targetRef?.current?.click?.();
      };
      document.body.addEventListener('keydown', onKeydown);

      return function unmount() {
        document.body.removeEventListener('keydown', onKeydown);
      };
    }());
  }, []);

  return {
    acBtnRef,
    divideBtnRef,
    multiplyBtnRef,
    subtractBtnRef,
    addBtnRef,
    enterBtnRef,
    oneBtnRef,
    twoBtnRef,
    threeBtnRef,
    fourBtnRef,
    fiveBtnRef,
    sixBtnRef,
    sevenBtnRef,
    eightBtnRef,
    nineBtnRef,
    zeroBtnRef,
    dotBtnRef,
  };
};

export default useKeydownBinding;
