// 1. conditional rendering - if statement
import { FunctionComponent } from "react";

interface MessageProps {
  isAdmin: boolean;
}

const Message: FunctionComponent<MessageProps> = ({ isAdmin }) => {
  if (isAdmin) {
    return (
      <>
        <h2>Welcome back Admin</h2>
        <button>Add Products</button>
      </>
    );
  }
  return (
    <>
      <h2>Welcome back User</h2>
      <button>Show Products</button>
    </>
  );
};

export default Message;
