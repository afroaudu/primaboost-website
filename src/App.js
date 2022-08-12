
import Visions from "./components2/Visions";
import Heros from "./components2/Heros"
import Services from "./components2/Services";
import Abouts from "./components2/Abouts";
import Technologys from "./components2/Technologys";
import Contacts from "./components2/Contacts";
import Navbars from "./components2/Navbars";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dropdown from "./components2/Dropdown";




function App() {
  
  return (
    <>
    
<Router>
  <Navbars/>
    <Routes>
      <Route path='/' element={<Heros />}/>
      <Route path='/visions' element={<Visions />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/abouts'  element={<Abouts />}/>
      <Route path='/technologys'  element={<Technologys />}/>
      <Route path='/contacts'  element={<Contacts />}/>
      </Routes>
   </Router>
    </>
  );
}

export default App;
