import { FunctionComponent, useState, useTransition } from "react";

interface TransitionProps {}

const Transition: FunctionComponent<TransitionProps> = () => {
  let [isPending, startTransition] = useTransition();
  let [count, setCount] = useState<number>(0);
  let handleClick = () => {
    startTransition(() => {
      setTimeout(() => {
        setCount(++count);
      }, 1000);
    });
  };
  return (
    <>
      {isPending && <div>Loading...</div>}
      <button className="btn btn-secondary" onClick={handleClick}>
        {count}
      </button>
    </>
  );
};

export default Transition;
