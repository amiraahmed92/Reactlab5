import { Route, Redirect, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Posts } from "./pages/post";
import { UserDetails } from "./pages/userdetails";
import { Users } from "./pages/Users";
import {Contactus} from "./components/Contactus"
import {Login} from "./pages/login"
import { ProtectedRoute } from "./components/protectedroute";
import {Placeholderpost} from "./pages/place_holder_post";

export const App = () => {

  return(
    <>
    <Navbar />
    <div className="container">
      <Switch>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/Contactus">
          < Contactus/>
        </Route>
        <Route path="/placeholderpost">
          <Placeholderpost/>
        </Route>
        
        <Route path="/users/:id">
            <UserDetails />
          </Route>
          <ProtectedRoute path="/users">
          <Users />
        </ProtectedRoute>
        
        <Route path="/">
          <Redirect to="/posts" />
        </Route>
      </Switch>
    </div>
  </>
  
  ) 
};
