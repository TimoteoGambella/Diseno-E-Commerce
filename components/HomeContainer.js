import React from 'react';

import Link from 'next/link'

const HomeContainer = () => {
    return (
        <div className='home-container'>
            <div className='home-nav'>
                <Link href="/Nosotros">NOSOTROS</Link>
                <Link href="/Tienda">TIENDA</Link>
            </div>
        </div>
    );
}

export default HomeContainer;
