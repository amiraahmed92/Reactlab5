import { Inputuser } from "../../components/inputuser";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts";

export const Login =()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValidCred, setIsValidCred] = useState(true);
    const history = useHistory();
    const authContext = useContext(AuthContext);
const handleSubmit = (event) => {
    event.preventDefault();
    //Dummy code
    if (authContext.login(email,password)){ history.replace("/users");
        console.log(authContext.isLoggedIn)
    }
      //   history.push("/main-page");
    else setIsValidCred(false);
    };
    if (authContext.isLoggedIn ) history.replace("/post");
    const item =localStorage.getItem("token")
    if (item){
    history.replace("/users");
    }
    return (
        <div className="d-flex justify-content-center">
            <form className="card p-3 col-6" onSubmit={handleSubmit}>
                <Inputuser
                    type="email"
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                />
                <Inputuser
                    type="password"
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                />
                {!isValidCred && (
                <div className="alert alert-danger">Invalid login credentials</div>
                )}
                <button className="btn btn-primary">Log-in</button>
            </form>
        </div>

    );
};