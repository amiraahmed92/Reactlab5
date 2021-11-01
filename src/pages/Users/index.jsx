import { users } from "./users.js";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts";
import { useContext,  } from "react";
export const Users = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    //Dummy code
    authContext.logout()
      //   history.push("/main-page");
        history.replace("/login");
};
  return (
    <>
      <h1>Users-Page</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-warning" onClick={handleSubmit}>Log-out</button>
    </>
  );
};
