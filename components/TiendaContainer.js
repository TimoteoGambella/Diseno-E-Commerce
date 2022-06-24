import React,{useEffect,useState} from 'react';
import data from "../data";
import CardProducto from './CardProducto';



const TiendaContainer = () => {
    const [products, setProducts] = useState(undefined);

    useEffect(() => {
        setProducts(data.productos);
    }, []);


    return (
        <div className='tienda-container'>

            <div className='tienda'>
                {products && products.map(product => <CardProducto product={product}/>)}
            </div>
        
        </div>
    );
}

export default TiendaContainer;
