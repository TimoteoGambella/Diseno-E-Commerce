import { useState } from 'react';
import { addStorage,removeProduct } from '../../../firebase/FirebaseDB';
import Image from "next/image";
import loading from "../../../public/loading_icon.webp"
import DashboardProductoInput from './DashboardProductoInput';
import Swal from 'sweetalert2'
import DashboardSelect from './DashboardProductoSelect';



export default function DashboardProductoItem ({producto,setReload, reload}) {
    const [cargando,setCargando] = useState(true);


    const changeImagen = (e)=>{
        if(e.target.files[0].type==="image/png"){
            setCargando(true);
            addStorage(producto.Nombre,"productos",e.target.files[0]).then(res => {
                editPropProduct(producto.id,"imagen",res).then(res=>{
                    setReload(!reload);
                    setCargando(false);
                })
            })
        }
    }


    const handleRemoveProduct = () => {
        Swal.fire({
            title: 'ESTAS SEGURO?',
            showCancelButton: true,
            confirmButtonText: 'ELIMINAR',
            color: '#e99b53',
            confirmButtonColor: '#e99b53',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                // removeProduct(producto.id).then(res => {
                //     setReload(!reload);
                // })
              Swal.fire('Eliminado!', '', 'success')
            }
          })


        setCargando(true)
        
    }

    return (
        <>
            {producto === undefined ? <></> :
            <div className="dash-prod-item-container">
                <div className="dash-prod-item">
                    <div className='img-dash-prod-item dash-prod-item-box'>
                        {
                            cargando?
                                <div>
                                  <Image src={loading} alt="loading" width={50} height={50}/>
                                </div>
                            :
                            <>
                                <Image src={producto.img} alt={"imagen-del-producto"} width={200} height={200}/>
                                <p>(245x320)</p>
                                <input
                                    type="file"
                                    name="img"
                                    id="img"
                                    accept="image/png"
                                    onChangeCapture={(e) => {changeImagen(e)}}
                                />
                            </>
                        }
                        
                    </div>

                    <div className='dash-prod-item-box'>
                        
                        <DashboardProductoInput setReload={setReload} reload={reload} productId={producto.id} propType={"nombre"} title={"Nombre: "} placeholderValue={producto.nombre} />
                        <DashboardProductoInput setReload={setReload} reload={reload} productId={producto.id} propType={"descripcion"} title={"Descripcion: "} placeholderValue={producto.descripcion} />

                    </div>

                    <div className='dash-prod-item-box'>
                        
                        <DashboardProductoInput setReload={setReload} reload={reload} productId={producto.id} propType={"precio"} title={"Precio: $"} placeholderValue={producto.precio} />
                        <DashboardProductoInput setReload={setReload} reload={reload} productId={producto.id} propType={"corte"} title={"Corte: "} placeholderValue={producto.corte} />
                        
                        <DashboardSelect setReload={setReload} reload={reload} productId={producto.id} propType={"tipoPrenda"} placeholderValue={producto.tipoPrenda}/>
                        {/* <DashboardProductoInput setReload={setReload} reload={reload} productId={producto.id} type={"precio"} title={"Tipo"}  /> */}

                    </div>
                    
                    <div className='dash-prod-item-box delete-item-box'>
                        <button onClick={handleRemoveProduct}>ELIMINAR PRODUCTO</button>
                    </div>
                </div>
            </div>
            
            }

        </>
        
)
}