import './Login.css'
import socialDesktop from '../images/social-desktop.PNG'
const Login = () => {
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-7">
                    <img src={socialDesktop} />
                </div>
                <div className="col-md-5">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="card-title text-center mt-3 fw-bold">Log In</h4>
                            <form>
                                <div classNames="mb-3">
                                    <input type="email" className="form-control" />
                                </div>
                                <div class="mb-3">
                                    <input type="password" className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;