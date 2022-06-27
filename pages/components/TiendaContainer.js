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
    const [mostrarMas,setMostrarMas]=useState(10)
    const [display,setDisplay]=useState(false)

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

    return (<>

        <div className="tienda-container">
            <div className="tienda-tabs-container">
                <div className='tienda-title'>
                    <h1>{itemType.toUpperCase()}</h1>
                </div>

                <button onClick={() => {setItemType("Todo"),setDisplay(true),push("#card-REF")}}>Todo</button>
                <button onClick={() => {setItemType("Remeras"),setDisplay(true),push("#card-REF")}}>Remeras</button>
                <button onClick={() => {setItemType("Joggins"),setDisplay(true),push("#card-REF")}}>Joggins</button>
                <button onClick={() => {setItemType("Camperas")}}>Camperas</button>
            </div>

            <div className="tienda">
                {display && <div id='card-REF' style={{height:"2500",width:"300px",paddingTop:"10vw"}}></div>}
                
                {productos.map(producto => <CardProducto producto={producto}  key={producto.id}></CardProducto>) }
                {productos.map(producto => <CardProducto producto={producto}  key={producto.id}></CardProducto>) }
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
    </>
    )
}


export default TiendaContainer;