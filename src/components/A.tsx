import { FunctionComponent } from "react";
import B from "./B";

interface AProps {}

const A: FunctionComponent<AProps> = () => {
  return (
    <>
      <B />
    </>
  );
};

export default A;
