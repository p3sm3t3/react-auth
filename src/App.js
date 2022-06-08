
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Nav from './components/Nav';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Otp from './pages/Otp';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <main className="form-signin w-100 m-auto">
       
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        
        <Route path="/otp" element={<Otp />} />
        
        
       
      </Routes>
      </main>
       </BrowserRouter>
        

       
    </div>
  );
}

export default App;
