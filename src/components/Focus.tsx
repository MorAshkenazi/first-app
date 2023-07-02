import { FunctionComponent, useRef } from "react";

interface FocusProps {}

const Focus: FunctionComponent<FocusProps> = () => {
  let inputRef = useRef<HTMLInputElement>(null);
  let focusInput = () => {
    (inputRef.current as HTMLInputElement).focus();
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button className="btn btn-info ms-2" onClick={() => focusInput()}>
        Focus
      </button>
    </>
  );
};

export default Focus;
