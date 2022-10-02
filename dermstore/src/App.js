import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Allroutes from './Pages/Allroutes';


function App() {
  return (
    <div className="App"> 
        <Navbar />    
        <Allroutes />    
    </div>
  );
}

export default App;
