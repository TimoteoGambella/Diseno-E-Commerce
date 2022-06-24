import Head from 'next/head';
import Banner from '../components/Banner';
import NavbarMenu from '../components/NavbarMenu';
import NosotrosContainer from '../components/NosotrosContainer';

export default function Home() {
  return (

    <div className="root">


      <Banner/>

      <NavbarMenu/>

      <NosotrosContainer/>

      
    </div>
  )
}
