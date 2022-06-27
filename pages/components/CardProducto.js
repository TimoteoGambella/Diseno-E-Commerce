export default function CardProducto({producto}) {

    return (

      <div className="card-container">
        <div className="card-image">
          IMAGEN
        </div>
        <div className="card-info">
          <h1>{producto.nombre}</h1>
          <ul>
            <li>{`Corte: ${producto.corte}`}</li>
            <li>{`Material: ${producto.material}`}</li>
            <li>{`Precio: $${producto.precio}`}</li>
            <li>{`Tipo: ${producto.tipo}`}</li>
          </ul>
        </div>
      </div>
   
  );
}