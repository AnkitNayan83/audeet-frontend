import { Login } from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home } from "./pages/home/Home";
import { Otp } from "./components/otp/Otp";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/otp' element={<Otp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
