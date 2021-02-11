/**
 * @function eventHelper
 * @param {function} callback the callback to help with
 * @description Creates a handler for mouse click and keyboad enter or space
 * @returns {object} the handlers in prop object form
 */
const eventHelper = (callback: any = () => {}): object => ({
  onClick: callback,
  onKeyPress: (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      callback(event);
    }
  }
});

export default eventHelper;
