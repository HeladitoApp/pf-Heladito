import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsuario } from '../../redux/actions/updateUsuario'
import { Button} from "@chakra-ui/react";
import './darDeAlta.css'
export default function DarDeAlta () {

    const { isLoading, user, logout } = useAuth0();
    const dispatch = useDispatch();
    const usuariosss = useSelector((state) => state.state.usuario);    
    let email = usuariosss[0]?.email
    const handleLogout = () => {
        logout({ returnTo: window.location.origin })
        }
        const handleAlta = () => {
        window.location.reload()
        dispatch(updateUsuario({email: email, activo: true }))
        }
        return (
            <main className="main">
                <div className='fondoActivar' >
                    <h1 className="temporal">Cuenta inactiva</h1>
                    <Button
                        variant="ghost"
                        rounded="md"
                        mb={{ base: 2, sm: 0 }}
                        minW="9rem"
                        bg="amarillo.claro"
                        value = {true}
                        className = 'botonActivar'
                        onClick = {handleAlta}
                        >
                        <h1 className = 'Activar'>Activar cuenta</h1>
                    </Button>
                    <Button
                        className="BotonNoActivar"
                        variant="ghost"
                        rounded="md"
                        mb={{ base: 2, sm: 0 }}
                        minW="9rem"
                        bg="amarillo.claro"
                        onClick = {e => handleLogout(e)}
                        >
                        <h1 className="BotonNoActivar">Salir</h1>
                    </Button>
                </div>
            </main>
        )
    }
