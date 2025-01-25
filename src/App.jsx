import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ContactUs from "./Pages/ContactUs"
import About from "./Pages/About"
import OurProducts from "./Pages/OurProducts"
import NewLaunches from "./Pages/NewLaunches"


const App=()=>{
  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Contact" element={<ContactUs/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Products" element={<OurProducts/>}/>
        <Route path="/New-Launches" element={<NewLaunches/>}/>
       </Routes>
       </BrowserRouter>
    </>
  )
}
export default App