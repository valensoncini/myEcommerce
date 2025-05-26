import '../styles/Login.css'

function Login({setLogeadoUSer, setLogeadoAdmin, user, admin})
{
    return(
        <div className="loginContainer">
            <button onClick={setLogeadoUSer}>{user ? "Cerrar sesion User": "Iniciar Sesion User"} </button>
            <button onClick={setLogeadoAdmin}>{admin ? "Cerrar sesion admin": "Iniciar Sesion Admin"}</button>
        </div>
    )
}

export default Login