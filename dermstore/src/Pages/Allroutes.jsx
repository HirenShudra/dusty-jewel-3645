import { Routes, Route} from 'react-router-dom';
import Home from '../Component/Home';
import Login from '../Component/Login';
import Register from "../Component/Register";

export default function Allroutes(){

    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
        </Routes>
    );
}