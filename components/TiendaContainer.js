import { useEffect, useState } from 'react';
import CardProducto from '../components/CardProducto';
import Image from "next/image";
import { getProductos } from '../firebase/FirebaseDB';
import loading from "../public/loading_icon.webp";


const TiendaContainer = ({itemType, setItemType}) => {

    const [productos, setProductos] = useState([]);
    const [totalProductos, setTotalProductos] = useState(0);
    const [cargando,setCargando]=useState(false)
    const [mostrarMas,setMostrarMas]=useState(10)

    useEffect(() => {
        setItemType(itemType)
        setMostrarMas(10)
        getProductos(itemType,mostrarMas).then(res => {
            setProductos(res);
            
        }).catch(err => console.log(err))
        
        getProductos(itemType,10000).then(res => {
            setTotalProductos(res.length);
        }).catch(err => console.log(err))
    }, [itemType]);// eslint-disable-line react-hooks/exhaustive-deps


    const cargarMasProductos=()=>{
        setCargando(true)
        getProductos(itemType,mostrarMas+5).then(res => {
          setTimeout(()=>{
            setMostrarMas(mostrarMas+5)
            setProductos(res);
            setCargando(false)
          },1000)
        }).catch(err => console.log(err))
      }

    return (
        <div className="tienda-container">

            <div className="title-container">
                    <h1>{itemType}</h1>
            </div>

            <div className="tienda">

                {itemType === "Todo" 
                ? productos.map(producto => <CardProducto producto={producto}  key={producto.id}></CardProducto>) 
                :  productos.filter(prod => prod.Categoria === itemType).map(producto => <CardProducto producto={producto} key={producto.id}></CardProducto>)}
            
            </div>
            
            {totalProductos>mostrarMas?
                <>
                {cargando?
                    <div className="cargarMas loading">
                        <Image src={loading} alt="loading" width={50} height={50}/>
                    </div>
                    :
                    <div className="cargarMas">
                        <p onClick={()=>{cargarMasProductos()}}>CARGAR MÁS</p>
                    </div> 
                } 
                </>:<></>
            }
        </div>
    )
}


export default TiendaContainer;