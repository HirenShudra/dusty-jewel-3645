import { NavLink } from 'react-router-dom';
import '../App.css';

export default function Navbar(){

    return (
        <div className='Navbar'>
            <NavLink to="/"><img src="logo.svg" alt="" /></NavLink>
            <input type="text" placeholder='Search for a product or brand...' />
            <NavLink to="/login">LOGIN</NavLink>
            <NavLink to="/register">REGISTER</NavLink>
        </div>
    )
}