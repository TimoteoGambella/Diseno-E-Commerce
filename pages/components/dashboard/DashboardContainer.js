import DashboardProductos from "./DashboardProductos";

export default function DashboardContainer () {


    return (
        <div className="dashboard-container">

            <div className="dashboard-title">
                <h2>BENET</h2>
                <h3>DASHBOARD</h3>
            </div>


            <DashboardProductos/>

        </div>
            
    )
}