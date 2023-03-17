import './Login.css'
import socialDesktop from '../images/social-desktop.PNG'
const Login = ()=>{
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-7">
                    <img src={socialDesktop}/>
                </div>
                <div className="col-md-5 border border-danger">Login form</div>
            </div>
        </div>
    );
}

export default Login;