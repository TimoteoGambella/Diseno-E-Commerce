import { useRouter } from 'next/router';

export default function Banner(){
    const { push } = useRouter();

    return (
        <div className="banner">
            {/* <h1 className='tituloMobile'>BENET</h1> */}
            
            <div className='container-titulo'>
                <h1 onClick={() => push("/")}>BENET</h1>
            </div>

            <div className='banner-image-container'>
            </div>

        </div>
    )
}