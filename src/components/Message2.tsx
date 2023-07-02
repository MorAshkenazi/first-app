// 2. conditional rendering - && operator
import { FunctionComponent } from "react";

interface Message2Props {
  isAdmin: boolean;
}

const Message2: FunctionComponent<Message2Props> = ({ isAdmin }) => {
  return (
    <>
      {isAdmin && <div className="text-danger">Admin</div>}
      {!isAdmin && <div className="text-success">User</div>}
    </>
  );
};

export default Message2;
