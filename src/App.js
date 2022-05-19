import React from "react";
import Navbar from "./components/Navbar"
import Sign from "./components/Sign"
import Firstcondent from "./components/Firstcondent"
import Secondcontent from "./components/Secondcontent"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<><Firstcondent/><Secondcontent/></>}></Route>
    <Route exact path="/Sign" element={<Sign/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
