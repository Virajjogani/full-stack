import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/loginForm/Login";
import Signup from "./components/signuForm/Signup";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TawkTo from 'tawkto-react'
import { useEffect } from "react";

  
function App() {


  useEffect(() => {
    
    var tawk = new TawkTo("637efaa2daff0e1306d9235d", "1gik063fu")

    tawk.onStatusChange((status) => 
    {
        // console.log(status)
    })

}, [])



  return (
    <BrowserRouter>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
