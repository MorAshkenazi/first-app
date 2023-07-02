import { FunctionComponent, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

interface UsersProps {}

// משימה: בעת טעינת הקומפוננטה, תיוצר בקשה לקבלת פרטי כל המשתמשים בג'ייסון פלייסהולדר
// fetch
// כל שמות המשתמשים יוצגו ברשימה ul li
// אם אין יוזרים תופיע פסקה מתאימה
const Users: FunctionComponent<UsersProps> = () => {
  //   let [users, setUsers] = useState<any>([]);
  let [users] = useFetch("https://jsonplaceholder.typicode.com/users");

  //   useEffect(() => {
  //     // fetch for users
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((users) => setUsers(users))
  //       .catch((error) => console.log(error));
  //   }, []);
  return (
    <>
      {users.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => (
              <tr key={user.id}>
                <td>
                  <Link to={`/users/${user.id}`}>{user.id}</Link>
                </td>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>There are no users</p>
      )}
    </>
  );
};

export default Users;
