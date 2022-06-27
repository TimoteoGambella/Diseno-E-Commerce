import { useEffect, useState } from 'react';
import NavbarMenu from './components/NavbarMenu';
import TiendaContainer from './components/TiendaContainer';

export default function Tienda() {
  const [itemType, setItemType] = useState("Todo");

  return (

    <div className="root">
      
      <NavbarMenu/>

      <TiendaContainer itemType={itemType} setItemType={setItemType} />
      
    </div>
  )
}
