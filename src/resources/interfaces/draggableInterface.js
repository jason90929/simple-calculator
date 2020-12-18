const draggableInterface = {
  defaultCondition() {
    return true;
  },

  // https://www.w3schools.com/howto/howto_js_draggable.asp
  init(element = null, condition = this.defaultCondition) {
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;

    function elementDrag(event) {
      if (condition(event)) {
        event = event || window.event;
        event.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - event.clientX;
        pos2 = pos4 - event.clientY;
        pos3 = event.clientX;
        pos4 = event.clientY;
        // set the element's new position:
        element.style.top = `${element.offsetTop - pos2}px`;
        element.style.left = `${element.offsetLeft - pos1}px`;
      }
    }

    function dragMouseDown(event) {
      if (condition(event)) {
        event = event || window.event;
        event.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = event.clientX;
        pos4 = event.clientY;
        // eslint-disable-next-line no-use-before-define
        document.body.addEventListener('mouseup', closeDragElement);
        // call a function whenever the cursor moves:
        document.body.addEventListener('mousemove', elementDrag);
      }
    }

    function closeDragElement() {
      // stop moving when mouse button is released:

      document.body.removeEventListener('mouseup', closeDragElement);
      document.body.removeEventListener('mousemove', elementDrag);
    }
    element.addEventListener('mousedown', dragMouseDown);

    return function destroy() {
      element.removeEventListener('mousedown', dragMouseDown);

      closeDragElement();
    };
  },
};

export default draggableInterface;
