import { FunctionComponent } from "react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  let handleWelcome = () => console.log("Welcome Mor");
  let handleWelcome2 = (username: string) => console.log("Welcome " + username);

  return (
    <>
      <h3>Home Page</h3>
      <button className="btn btn-primary" onClick={handleWelcome}>
        Welcome
      </button>
      <button
        className="btn btn-success"
        onClick={() => handleWelcome2("Margol")}
      >
        Welcome 2
      </button>
    </>
  );
};

export default Home;
