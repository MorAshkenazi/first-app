import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface NotFoundProps {}

const NotFound: FunctionComponent<NotFoundProps> = () => {
  let navigate = useNavigate();
  return (
    <>
      <h1 className="display-1">404 - Page Not Found</h1>
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
};

export default NotFound;
