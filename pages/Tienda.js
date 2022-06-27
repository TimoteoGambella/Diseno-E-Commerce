import { useEffect, useState, useRef } from 'react';
import Banner from '../components/Banner';
import NavbarMenu from '../components/NavbarMenu';
import TiendaContainer from '../components/TiendaContainer';

export default function Tienda() {
  const [itemType, setItemType] = useState("Todo");

  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }, [itemType]);

  return (

    <div className="root">



      <Banner/>
      
      <NavbarMenu scrollRef={scrollRef}/>

      <TiendaContainer itemType={itemType} setItemType={setItemType} />
      
    </div>
  )
}
