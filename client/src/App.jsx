import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/signup";

const App=()=>{

  return(
    <>

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>

      </Routes>
    </BrowserRouter>
  
    </>
  )

}

export default App;
