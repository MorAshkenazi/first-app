import { FunctionComponent, useRef } from "react";

interface ColorsProps {}

const Colors: FunctionComponent<ColorsProps> = () => {
  let divColor = useRef<HTMLDivElement>(null);
  let handleClick = () => {
    (divColor.current as HTMLDivElement).style.color = "blue";
    (divColor.current as HTMLDivElement).style.backgroundColor = "yellow";
  };
  return (
    <>
      <div ref={divColor} onClick={handleClick}>
        bla bla
      </div>
    </>
  );
};

export default Colors;
