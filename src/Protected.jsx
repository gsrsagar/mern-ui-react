import { Outlet } from "react-router-dom";
import { Login } from "./Login";


export function Protected(){
    let user ={ isLoggedIn:true};
    user?.isLoggedIn ==true ? <Outlet/>: <Login />
}