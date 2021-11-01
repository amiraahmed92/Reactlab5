import { useParams, Link } from "react-router-dom";
import { users } from "./Users/users.js";
import { useHistory } from "react-router-dom";
console.log (users)
export const UserDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const user = users.find((us) => us.id === +id);
    const handleSubmit = (event) => {
        event.preventDefault();
        //Dummy code
        
            localStorage.removeItem("token", "12345");
          //   history.push("/main-page");
            history.replace("/login");
    };
    return (
    <>
        <h1>Welcome {user.name}</h1>
        <p>Phone: {user.phone}</p>
        <p>Company: {user.company.name}</p>
        <p>Phone: {user.website}</p>
        <Link to="/users">back</Link>
        <button className="btn btn-warning" onClick={handleSubmit}>Log-out</button>
    </>
    );
};