import { Link } from "react-router-dom";


export function NotFound(){
    return(
        <div>
            <h1>404 found</h1>
            <p>Please Go to Home Page</p>
            <Link to="/home">Home</Link>
        </div>
    )
}