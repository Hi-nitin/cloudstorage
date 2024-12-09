import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/signup";
import Login from "./components/login";
import Dashboard from './components/dashboard'
import Myfiles from './components/myfiles'
import Mychatroom from "./components/mychatroom";

const App=()=>{

  return(
    <>

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/myfiles" element={<Myfiles/>}/>
          <Route path="/mychatroom" element={<Mychatroom/>}/>
      </Routes>
    </BrowserRouter>
  
    </>
  )

}

export default App;
