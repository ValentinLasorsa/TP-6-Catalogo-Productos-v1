import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Contacto from "./pages/Contacto";
import './App.css';

function App() {
  return (
    <BrowserRouter>
       <Routes>
       	<Route path="/" element={<Layout />}>
	  		<Route index element={<Home />}></Route>
  		<Route path="/contacto" element={<Contacto />}></Route>
<Route path="*" element={<h1>404</h1>}></Route>
	</Route>
       </Routes>
     </BrowserRouter>
)
}
export default App;
