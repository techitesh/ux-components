import React from "react";

import config from "../../config";
import ThemeProps from "./theme.props";

const ThemeContext = React.createContext(config.defaults.theme);

const ThemeProvider: React.SFC<ThemeProps> = (props: ThemeProps) => {
  return <ThemeContext.Provider {...props}>{props.children}</ThemeContext.Provider>;
};

export default ThemeProvider;
export { ThemeContext };
