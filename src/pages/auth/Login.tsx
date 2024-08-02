import { useState } from "react";
import { Link } from "react-router-dom";
import { togglePasswordVisibility } from "../../helper/FormHelper";

const Login = (): JSX.Element => {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    return (
        <>
            <div className="header_sign_up">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-lg-3">
                            <div className="header_logo">
                                <Link to="#">
                                    <img src="assets/images/logo.png" alt="" />
                                </Link>
                            </div>
                            <h5 className="copyright">© 2023 10 CentsAir</h5>
                        </div>
                        <div className="col-md-9 col-lg-9">
                            <div className="row box_showd">
                                <div className="col-md-6 pr_0">
                                    <form className="signup_box">
                                        <div className="text_bt">
                                            <div className="text_sing">
                                                <h1 className="l1">Log In</h1>
                                            </div>
                                            <div className="email_tr">
                                                <p>Email</p>
                                                <input className="email_1" type="email" name="email" placeholder="" />
                                            </div>
                                            <div className="email_tr">
                                                <p>Password </p>
                                                <input
                                                    className="email_1"
                                                    type={passwordVisible ? "text" : "password"}
                                                    name="password"
                                                    placeholder=""
                                                />
                                                <span
                                                    className={`fa ${passwordVisible ? "fa-eye-slash" : "fa-eye"} fet_eye`}
                                                    onClick={() => togglePasswordVisibility(passwordVisible, setPasswordVisible)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <em>{passwordVisible ? "Hide" : "Show"}</em>
                                                </span>
                                                <div className="d-flex justify-content-between">
                                                    <Link to="/signup" className="forgot">Don't Have Account? Please Sign Up</Link>
                                                    <Link to="#" className="forgot">Forgot password?</Link>
                                                </div>
                                            </div>
                                            <div className="or_box">
                                                <input className="sign_email log_ing" type="submit" value="Log In" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-6 pr_0">
                                    <div className="sign_img">
                                        <img src="assets/images/sign.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;