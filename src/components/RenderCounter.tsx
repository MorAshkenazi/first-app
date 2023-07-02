// המשימה: להציג מונה (קאונטר) שיעיד על כמות הרנדורים שעברה הקומפוננטה
import { FunctionComponent, useEffect, useRef, useState } from "react";

interface RenderCounterProps {}

const RenderCounter: FunctionComponent<RenderCounterProps> = () => {
  let [username, setUsername] = useState<string>("Mor Ashkenazi");
  let counter = useRef<number>(0);
  let num = 1;

  useEffect(() => {
    counter.current++;
  });

  return (
    <>
      <p>App rendered {counter.current} times</p>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => num++}>Inc</button>
    </>
  );
};

export default RenderCounter;
