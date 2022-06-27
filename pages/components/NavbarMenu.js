import React,{useEffect} from 'react';
import { useRouter } from 'next/router';
import Image from "next/image"
import logo from "../../public/img/logo.png"

// NAVBAR DE RANKING COMPONENT
const NavbarMenu = ({handleRanking}) => {
    const { push } = useRouter();

    return (
        <div className="navbar-container">
                
                <div className='logo'>
                    <Image src={logo} width={300} height={300} alt="Banner" onClick={()=>push("/")}/>
                </div>

                <div className='fondo-sepLeft'></div>
                <div className="sepLeft">
                    <div></div>
                </div>

                <div className="navbar-nav">
                    <button onClick={() => push("/Nosotros")}>Nosotros</button>
                    <button onClick={() => push("/Tienda")}>Productos</button>
                </div>

        </div>
    )
}


export default NavbarMenu;