import {NavLink} from 'react-router-dom';

export default function Navbar(){

    return (
        <div>
            <NavLink to="/"></NavLink>
            {/* <input type="text" placeholder='Search for a product or brand' /> */}
            <NavLink to="/Login">LOGIN</NavLink>
            <NavLink to="Register">REGISTER</NavLink>
        </div>
    )
}