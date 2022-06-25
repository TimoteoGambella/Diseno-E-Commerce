import React from 'react';
import { useRouter } from 'next/router';
 
// NAVBAR DE RANKING COMPONENT
const NavbarMenu = ({handleRanking}) => {
    const { push } = useRouter();

    return (
        <div className="navbar-container">

                <div className="navbar-nav">
                    <button onClick={() => push("/Nosotros")}>Nosotros</button>
                    <button onClick={() => push("/Tienda")}>Productos</button>
                </div>

        </div>
    )
}


export default NavbarMenu;