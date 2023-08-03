import { useParams } from "react-router-dom";

const DetalleXProducto = () => {
 const { DetalleXProductoId } = useParams();
 
 return (
   <div>
     Más datos de producto mediante ID: {`ID: ${DetalleXProductoId}`}
   </div>
 );
};
export default DetalleXProducto;