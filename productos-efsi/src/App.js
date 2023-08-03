import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import Contacto from "./components/Contacto";
import Productos from "./components/Productos";
import DetalleXProducto from "./components/DetalleXProducto";
import './css/App.css';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
             <Route path="/" element={<Main />}>
                 <Route index element={<Home />}></Route>
                 <Route path="/productos" element={<Productos/>}></Route>
                 <Route path="/quienes-somos/:personaId" element={<DetalleXProducto/>}></Route>
                 <Route path="/contacto" element={<Contacto />}></Route>
                 <Route path="*" element={<h1>404</h1>}></Route>
             </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
 };
 
 export default App;