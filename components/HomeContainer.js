import React from 'react';

import Link from 'next/link'
import Carousel from './Carousel';

const HomeContainer = () => {
    return (
        <div className='home-container'>
            <Carousel/>


            <div className='home-nav'>
                <Link href="/Nosotros">NOSOTROS</Link>
                <Link href="/Tienda">PRODUCTOS</Link>
            </div>
        </div>
    );
}

export default HomeContainer;
