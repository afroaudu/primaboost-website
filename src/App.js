
import Visions from "./components2/Visions";
import Heros from "./components2/Heros"
import Services from "./components2/Services";
import Abouts from "./components2/Abouts";
import Technologys from "./components2/Technologys";
import Contacts from "./components2/Contacts";
import Navbars from "./components2/Navbars";
import { BrowserRouter as Router } from "react-router-dom"





function App() {
  
  return (
    <>
    
<Router>
  <Navbars/>
    
<Heros />
      <Visions />
      <Services />
      <Abouts />
      <Technologys />
      <Contacts />
   </Router>
    </>
  );
}

export default App;
