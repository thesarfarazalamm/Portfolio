
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./Component/Home"
import Nav from "./Component/Nav"
import About from "./Component/About"
import Projects from "./Component/Projects"
import Contact from "./Component/Contact"
import Skills from "./Component/Skills"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');
</style>
const App=()=>{
    return(
        <div>
           <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route element={<Home/>} path="/"/>
                    <Route element={<About/>} path="/about" />
                    <Route element={<Projects/>} path="/projects"/>
                    <Route element={<Skills/>} path="/skills"/>
                    <Route element={<Contact/>} path="/contact"/>
                </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App
