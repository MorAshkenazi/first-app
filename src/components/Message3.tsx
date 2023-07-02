// 3. conditional rendering - ternary operator
import { FunctionComponent } from "react";

interface Message3Props {
  isAdmin: boolean;
}

const Message3: FunctionComponent<Message3Props> = ({ isAdmin }) => {
  return (
    <>
      {isAdmin ? (
        <>
          <h2>Welcome back Admin</h2> <button>Add Products</button>
        </>
      ) : (
        <>
          <h2>Welcome back User</h2> <button>Show Products</button>
        </>
      )}
    </>
  );
};

export default Message3;
