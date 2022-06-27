import { useRouter } from 'next/router';
import Image from "next/image"
import banner from "../public/img/BENET (3).png"

export default function Banner(){
    const { push } = useRouter();

    return (
        <div className="banner">
            <div className='container-titulo'>
                <Image src={banner} width={1500} height={220} alt="Banner"/>
                <h1 onClick={() => push("/")}>BENET</h1>
            </div>
        </div>
    )
}