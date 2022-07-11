import Image from 'next/image';
import campera from "../../public/ropa/Diseño sin título (9).png"
import remera from "../../public/ropa/Diseño sin título (8).png"
import gorra from "../../public/ropa/Diseño sin título (11).png"
import jeans from "../../public/ropa/Diseño sin título (10).png"
import bermuda from "../../public/ropa/Diseño sin título (12).png"

export default function CardProducto({producto}) {

    return (
    <>
      {producto !== undefined && 
        <div className="card-container">
          <div className="card-image">
            {producto.tipoPrenda === "Camperas" && <Image src={campera} width={220} height={290} alt="Campera"/>}
            {producto.tipoPrenda === "Remeras" && <Image src={remera} width={220} height={290} alt="Remeras"/>}
            {producto.tipoPrenda === "Joggins" && <Image src={jeans} width={220} height={290} alt="Joggins"/>}
            {producto.tipoPrenda === "Bermudas" && <Image src={bermuda} width={220} height={290} alt="Bermudas"/>}
            {producto.tipoPrenda === "Gorras" && <Image src={gorra} width={220} height={290} alt="Gorras"/>}
          </div>
          
          <div className="card-info">
            <h1>{producto.nombre}</h1>
            <ul>
              <li>{`Corte: ${producto.corte}`}</li>
              <li>{`Precio: $${producto.precio}`}</li>
              <li>{`Tipo: ${producto.tipoPrenda}`}</li>
            </ul>
          </div>
        </div>
      }
    </>
  );
}