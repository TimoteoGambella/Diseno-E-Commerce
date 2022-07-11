import { useEffect, useState } from 'react';
import CardProducto from '../components/CardProducto';
import Image from "next/image";
import { getProductos } from '../../firebase/FirebaseDB';
import loading from "../../public/loading_icon.webp";
import { useRouter } from 'next/router';


const TiendaContainer = ({itemType, setItemType}) => {
    const { push } = useRouter();

    const [productos, setProductos] = useState([]);
    const [totalProductos, setTotalProductos] = useState(0);
    const [cargando,setCargando]=useState(false)
    const [mostrarMas,setMostrarMas]=useState(5);
    const [display,setDisplay]=useState(true)

    useEffect(() => {

        getProductos(itemType,mostrarMas).then(res => {
            setProductos(res);
        }).catch(err => console.log(err))
        
        getProductos(itemType,10000).then(res => {
            setTotalProductos(res.length);
        }).catch(err => console.log(err))

        setMostrarMas(4);

    }, [itemType]);// eslint-disable-line react-hooks/exhaustive-deps


    const cargarMasProductos=()=>{
        setCargando(true)

        getProductos(itemType,mostrarMas+5).then(res => {

          setTimeout(()=>{
            setMostrarMas(mostrarMas+5)
            setProductos(res);
            setCargando(false)
          },500)

        }).catch(err => console.log(err))
    }

    const handleButton =(tipo)=>{
        push("#card-REF")
        setItemType(tipo)
    }

    return (<>

        <div className="tienda-container">
            <div className="tienda-tabs-container">
                <div className='tienda-title'>
                    <h1>{itemType.toUpperCase()}</h1>
                </div>

                <div className='filtros-container'>
                    <button onClick={() => {handleButton("Todo")}}>Todo</button>
                    <button onClick={() => {handleButton("Remeras")}}>Remeras</button>
                    <button onClick={() => {handleButton("Joggins")}}>Joggins</button>
                    <button onClick={() => {handleButton("Camperas")}}>Camperas</button>
                    <button onClick={() => {handleButton("Gorras")}}>Gorras</button>
                    <button onClick={() => {handleButton("Bermudas")}}>Bermudas</button>
                </div>
            </div>

            <div className="tienda">
                {display && <div id='card-REF' style={{width:"300px",paddingTop:"10vw"}}></div>}
                
                {productos.map(producto => <CardProducto producto={producto}  key={producto.id}></CardProducto>) }
                {productos.map(producto => <CardProducto producto={producto}  key={producto.id}></CardProducto>) }
                {productos.map(producto => <CardProducto producto={producto}  key={producto.id}></CardProducto>) }
                {productos.map(producto => <CardProducto producto={producto}  key={producto.id}></CardProducto>) }
              
                {mostrarMas<totalProductos?
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
        
        </div>
    </>
    )
}


export default TiendaContainer;