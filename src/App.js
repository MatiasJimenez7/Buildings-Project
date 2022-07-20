import {BrowserRouter, Routes, Route} from "react-router-dom"
import Contact from "./components/Contact/Contact";
import Detail from "./components/Detail/Detail";
import Inicio from "./components/Inicio/Inicio"
import Item from "./components/Item/Item"
import NavBar from "./components/NavBar/NavBar";
//  import elContext from "./components/Context/Context";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/detail/:id" element={<Detail></Detail>}/>
        <Route path="/contact" element={<Contact></Contact>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
