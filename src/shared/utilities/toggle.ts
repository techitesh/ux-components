interface Toggles {
  [key: string]: boolean;
}

/**
 * @function toggle
 * @param {string} key The key of the toggle to modify
 * @description Modifies a toggle
 * @returns {boolean} true (for storybook knobs update purposes; modify for future needs)
 */
const toggle = (key: string, toggles: Toggles): Toggles => {
  toggles[key] = !toggles[key];
  return toggles;
};

export default toggle;
