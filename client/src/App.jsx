import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/signup";
import Login from "./components/login";

const App=()=>{

  return(
    <>

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  
    </>
  )

}

export default App;
