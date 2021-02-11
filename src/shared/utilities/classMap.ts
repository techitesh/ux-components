/**
 * @function classMap
 * @param {string[]} classes The string array of classes
 * @description Combines classes into a browser readable string
 * @returns {string} Browser ready string of classes
 */
const classMap = (...classes: (string | undefined)[]): string => {
  return classes
    .join(" ")
    .split(" ")
    .reduce((previousValue: string, currentValue: string): string => {
      return currentValue && previousValue.split(" ").indexOf(currentValue) < 0
        ? (previousValue += " " + currentValue)
        : previousValue;
    });
};

export default classMap;
