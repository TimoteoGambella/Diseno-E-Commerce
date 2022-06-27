import React,{useEffect} from 'react';
import { useRouter } from 'next/router';
 
// NAVBAR DE RANKING COMPONENT
const NavbarMenu = ({handleRanking,scrollRef}) => {
    const { push } = useRouter();

    return (
        <div className="navbar-container">
                
                <div className='fondo-sepLeft'></div>
                <div className="sepLeft">
                    <div></div>
                </div>

                <div className="navbar-nav" ref={scrollRef}>
                    <button onClick={() => push("/Nosotros")}>Nosotros</button>
                    <button onClick={() => push("/Tienda")}>Productos</button>
                </div>

        </div>
    )
}


export default NavbarMenu;