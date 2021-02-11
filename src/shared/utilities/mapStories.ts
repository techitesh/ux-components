/**
 * @function mapStories
 * @param {any} stories The stories for a component
 * @param {any} callback The callback for each story
 * @description Maps the stories for a component and executes them for testing
 */
const mapStories = (stories: any, callback: any): void => {
  Object.keys(stories).map((story: any) => {
    if (story.indexOf("Props") < 0 && typeof stories[story] === "function") {
      callback(stories[story]);
    }
  });

  return;
};

export default mapStories;
