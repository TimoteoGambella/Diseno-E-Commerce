import React from 'react';
import { useRouter } from 'next/router';
 
// NAVBAR DE RANKING COMPONENT
const NavbarMenu = ({handleRanking}) => {
    const { push } = useRouter();

    return (
        <div className="navbar-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='background-nav'>
                    <path fill="#00000" fill-opacity="1" d="M0,256L1440,128L1440,0L0,0Z"></path>
                </svg>

                <div className="navbar-nav">
                    <button onClick={() => push("/Nosotros")}>Nosotros</button>
                    <button onClick={() => push("/Tienda")}>Productos</button>
                </div>

        </div>
    )
}


export default NavbarMenu;