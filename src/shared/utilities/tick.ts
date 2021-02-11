/**
 * @function tick
 * @param {number} time The wait time (in ms)
 * @description A method for waiting
 * @returns {Promise} the timed promise
 */
const tick = (time: number = 100) => new Promise((resolve) => setTimeout(resolve, time));

export default tick;
