import React from "react"
import LoginForm from "./LoginForm"
import regisetPhoto from "../../assets/images/register-img.png"

const Login = (props) => {
    const { handleIsLoggedIn } = props
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <div className="form-container">
                        <div className="img-container">
                            <img src={regisetPhoto} alt="regisetPhoto" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="form-container">
                    <LoginForm handleIsLoggedIn={handleIsLoggedIn} />
                </div>
            </div>
        </div>
    )
}

export default Login