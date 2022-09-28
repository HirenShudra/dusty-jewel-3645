import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';

export default function Allroutes(){

    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="./Login" element={<Login />}></Route>
            <Route path="./Register" element={<Register />}></Route>
        </Routes>
    );
}