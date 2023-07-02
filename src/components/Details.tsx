import { FunctionComponent } from "react";

interface DetailsProps {}

const Details: FunctionComponent<DetailsProps> = () => {
  let handleInput = (input: string) => console.log(input);

  return (
    <>
      <label htmlFor="username">Enter your username:</label>
      <input
        type="text"
        id="username"
        onChange={(e) => handleInput(e.target.value)}
      />
    </>
  );
};

export default Details;
