/**
 * @function assetImport
 * @param {string} id id to import
 * @param {string} theme theme to import from
 * @description Uses require to import from assets or themes
 * @returns {string} import
 */
const assetImport = (id: string, theme?: string): any =>
  id.startsWith("theme:")
    ? require("../../themes/" + theme + "/" + id.substr(6))
    : require("../../assets/" + id.substr(7));

export default assetImport;
