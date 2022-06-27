import React,{useEffect, useState} from 'react';
import Image from 'next/image';



const Carousel = () => {
    const [counter, setCounter] = useState(1);
    const [srcImage, setSrcImage] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter + 1);
            setSrcImage(`../public/img/comboBenet${counter}.jpeg`);
            if(counter === 5)
                setCounter(1)
        }, 2000);
        return () => clearInterval(interval);
      }, []);

    return (
        <div className='carousel-container'>
            {srcImage && <Image src={srcImage} width={300} height={300}/>}
        </div>
    );
}

export default Carousel;
