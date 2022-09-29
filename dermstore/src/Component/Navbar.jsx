import { NavLink } from 'react-router-dom';

export default function Navbar(){

    return (
        <>
            <NavLink to="/"><img src="logo.svg" alt="" /></NavLink>
            <input type="text" placeholder='Search for a product or brand...' />
            <NavLink to="/login">LOGIN</NavLink>
            <NavLink to="/register">REGISTER</NavLink>
        </>
    )
}