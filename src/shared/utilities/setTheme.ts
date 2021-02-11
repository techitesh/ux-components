import ThemesEnum from "../enums/themes.enum";

/**
 * @function setTheme
 * @param {Document} document Document obejct
 * @param {ThemesEnum} theme Theme to set
 * @param {string} base Base path
 * @description Sets the theme css in the dom
 * @returns {boolean} true
 */
const setTheme = (document: Document, theme: ThemesEnum, base: string = "/themes/"): boolean => {
  const head = document.head;
  const themeCss = head.querySelector("link[data-theme]");

  if (themeCss) {
    themeCss.setAttribute("data-theme", theme);
    themeCss.setAttribute("href", base + theme + "/index.css");
  } else {
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("data-theme", theme);
    link.setAttribute("href", base + theme + "/index.css");
    head.appendChild(link);
  }

  return true;
};

export default setTheme;
