export default function DashboardLogin ({setLogin,login}) {

    const loginExito=(usuario,contraseña)=>{
        if(usuario==="Benet" & contraseña==="Benet2022"){
            setLogin(!login)
        }
    }

    return (
        <div className="logeo-block">
            <div className="logeo-container">

                <div className="loguin_input">
                    <label form="usuario">USUARIO:</label>
                    <input placeholder="Usuario" name="usuario" id="usuario"/>
                </div>
                
                <div className="loguin_input">
                    <label form="contraseña">CONTRASEÑA:</label>
                    <input placeholder="Contraseña" type="password" name="contraseña" id="contraseña"/>
                </div>
                
                <div className="container-logeo-button">
                    <button onClick={()=>{loginExito(usuario.value,contraseña.value)}}>ENTRAR</button>
                </div>
            </div>
        </div>
    )
}