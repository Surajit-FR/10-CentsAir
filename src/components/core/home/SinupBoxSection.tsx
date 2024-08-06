import { Link } from "react-router-dom";

const SinupBoxSection = (): JSX.Element => {
    return (
        <>
            <section className="sinup_box_123">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7">
                            <div className="sinup_text_1">
                                <h4>
                                    <i className="fa-solid fa-envelope-open-dollar"></i>
                                    <span>Sign up today and never miss another <em>deal again!</em></span>
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="sinup_form">
                                <form>
                                    <ul>
                                        <li>
                                            <input className="r_email" type="text" name="name" placeholder="Email Address" />
                                        </li>
                                        <li>
                                            <input className="signup_1" type="submit" value="Sign Up" />
                                        </li>
                                    </ul>
                                    <p>By signing up, you agree to receive marketing emails from CheapOair (Fareportal).
                                        <Link to="#">Consent notice</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SinupBoxSection;