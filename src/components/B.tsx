import { FunctionComponent, useContext } from "react";
import { SiteTheme } from "../App";

interface BProps {}

const B: FunctionComponent<BProps> = () => {
  let theme = useContext(SiteTheme);
  return (
    <>
      <button style={{ color: theme.color, background: theme.background }}>
        Welcome to B component
      </button>
      {/* <button className={ `btn ${theme == "dark" ? "dark" : "light"}`}></button> */}
    </>
  );
};

export default B;
