/**
 * @function setupTestSuite
 * @param {string} name The name to describe the test suite
 * @param {any} tests The test suite to run in form of a key-callback object
 * @description Describes a component test suite and iterates through each test
 */
const setupTestSuite = (name: string, tests: any) => {
  const selector: string = ".edge-ux-" + name.toLowerCase().replace(/ /g, "-");

  describe(name + " Component", () => {
    for (let key in tests) {
      it(key, () => tests[key](selector));
    }
  });
};

export default setupTestSuite;
