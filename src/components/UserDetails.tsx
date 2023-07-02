import { FunctionComponent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

interface UserDetailsProps {}

const UserDetails: FunctionComponent<UserDetailsProps> = () => {
  let { id } = useParams();
  let [user] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  let navigate = useNavigate();
  return (
    <>
      <p>User Details</p>
      <p>User number {id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button className="btn btn-primary me-1" onClick={() => navigate(-1)}>
        Back
      </button>
      <button className="btn btn-danger" onClick={() => navigate("/")}>
        Home
      </button>
    </>
  );
};

export default UserDetails;
