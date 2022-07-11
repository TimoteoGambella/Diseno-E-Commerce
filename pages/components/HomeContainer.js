import React from 'react';
import logo from "../../public/img/logo.png"
import Image from 'next/image';
import Link from 'next/link'
import Carousel from './Carousel';

const HomeContainer = () => {
    return (
        <div className='home-container'>
            <Carousel/>



            <div className='home-nav'>
                <div className='logo-home'>
                    <Image src={logo} width={300} height={300} alt="Banner"/>
                    <div></div>
                </div>
                <Link href="/Tienda">PRODUCTOS</Link>
            </div>
        </div>
    );
}

export default HomeContainer;
