import { signInWithGooglePopup } from "./firebase/firebase"
import GoogleLogo from "./images/googlelogo.png"
const Login = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();

        sessionStorage.setItem('user', response.user.displayName)
        sessionStorage.setItem('token', response.user.accessToken)
        sessionStorage.setItem('email', response.user.email)
        window.location.href = 'app'
        
    }
    return (
        <div>
            <button onClick={logGoogleUser} className="btn btn-danger mb-2">Iniciar sesión con Google <br />
            <img src={GoogleLogo} alt="Logo Google" width="40px" />
            </button>
        </div>
    )
}
export default Login;