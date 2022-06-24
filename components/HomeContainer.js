import React from 'react';

import Link from 'next/link'

const HomeContainer = () => {
    return (
        <div className='home-container'>

            <div className='home-title'>
                <h1>BENET</h1>
            </div>


            <div className='home-nav'>
                <Link href="/Nosotros">Nosotros</Link>
                <Link href="/Tienda">Tienda</Link>
            </div>
        </div>
    );
}

export default HomeContainer;
