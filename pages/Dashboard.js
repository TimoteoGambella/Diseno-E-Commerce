import { useState} from "react"
import DashboardContainer from "./components/dashboard/DashboardContainer"
import DashboardLogin from "./components/dashboard/DashboardLogin"

export default function Dashboard(){

    // LOGIN------------------------------
    const [login, setLogin] = useState(true)

    return(
        <>
            {login?
               <DashboardLogin setLogin={setLogin} login={login}/>
                :
                <DashboardContainer/>
            }
        </>    
    )
}