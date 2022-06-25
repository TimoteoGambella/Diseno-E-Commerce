import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import NavbarMenu from '../components/NavbarMenu';
import TiendaContainer from '../components/TiendaContainer';

export default function Tienda() {
  const [itemType, setItemType] = useState("Todo");


  return (

    <div className="root">

      <Banner/>

      <NavbarMenu/>

      <TiendaContainer itemType={itemType} setItemType={setItemType}/>

      
    </div>
  )
}
