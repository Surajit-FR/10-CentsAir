import { Link } from "react-router-dom";

const SignUp = (): JSX.Element => {
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
                                                <h1>Explore the world to experience the beauty of nature</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus</p>
                                            </div>
                                            <div className="sign_social">
                                                <ul>
                                                    <li>
                                                        <Link to="#">
                                                            <img src="assets/images/social/g.png" alt="" />
                                                            <span>
                                                                Continue with Google
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <img src="assets/images/social/f.png" alt="" />
                                                            <span>
                                                                Continue with Facebook
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <img src="assets/images/social/a.png" alt="" />
                                                            <span>
                                                                Continue with Apple
                                                            </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="or_box">
                                                    <h5><span>OR</span></h5>
                                                    <input className="sign_email" type="submit" value="Sign up with email" />
                                                    <p>By signing up, you agree to the

                                                        <Link to="#">Terms of Service</Link> and
                                                        <Link to="#"> Privacy Policy,</Link> including
                                                        <Link to="#">cookie use.</Link>
                                                    </p>
                                                </div>
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

export default SignUp;