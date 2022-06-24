import React from 'react';
import Image from 'next/image';
import background from '../public/img/modeloimportante.jpeg';
import NavbarMenu from './NavbarMenu';

const HomeContainer = () => {
    return (
        <div className='home-container'>
            <div className='img'>
                <NavbarMenu/>
            </div>
        </div>
    );
}

export default HomeContainer;
