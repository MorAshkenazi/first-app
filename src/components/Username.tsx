import { FunctionComponent, useEffect, useState } from "react";

interface UsernameProps {}

const Username: FunctionComponent<UsernameProps> = () => {
  //   let usernameInput: string = "Avi";
  let [usernameInput, setUsernameInput] = useState<string>("Avi");
  let [count, setCount] = useState<number>(0);
  let handleUsername = (username: string) => {
    setUsernameInput(username);
    console.log(usernameInput);
  };

  // 1. הפונקציה תתבצע כל פעם שהקומפוננטה עוברת רינדור
  useEffect(() => {
    console.log("Username component was rendered");
  });

  // 2. הפונקציה תתבצע רק בטעינת הראשונית של הקומפוננטה - חד פעמי
  useEffect(() => {
    console.log("First render of Username component");
  }, []);

  // 3. פונקציה תתבצע רק בעת רנדור של משתנה מסוים
  useEffect(() => {
    console.log("UsernameInput was changed");
  }, [usernameInput]);

  return (
    <>
      <label htmlFor="username">Enter your username:</label>
      <input
        type="text"
        id="username"
        onChange={(e) => handleUsername(e.target.value)}
      />
      <p>{usernameInput}</p>
    </>
  );
};

export default Username;
