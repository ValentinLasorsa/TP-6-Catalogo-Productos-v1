import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contacto from "./components/Contacto";
import Productos from "./components/Productos";
import './css/App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
             <Route path="/" element={<Header />}>
                 <Route index element={<Home />}></Route>
                 <Route path="/productos" element={<Productos/>}></Route>
                 <Route path="/quienes-somos" element={<Nosotros/>}></Route>
                 <Route path="/quienes-somos/:personaId" element={<Persona/>}></Route>
                 <Route path="/contacto" element={<Contacto />}></Route>
                 <Route path="*" element={<h1>404</h1>}></Route>
             </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
 };
 
 export default App;