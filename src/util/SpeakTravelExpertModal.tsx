import { Link } from "react-router-dom";

const SpeakTravelExpertModal = (): JSX.Element => {
    return (
        <>
            <div className="body_model_123">
                <div className="modal fade" id="SpeakTravelExpertModal" tabIndex={-1} aria-labelledby="SpeakTravelExpertModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-body">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                <ul className="travel_expert_243">
                                    <li>
                                        <div className="model_img">
                                            <img src="assets/images/icon/w.jpg" alt="" />
                                            <Link to="#">Available Now</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="model_text_12">
                                            <h4>Speak to a travel expert now</h4>
                                            <p>Call us now to get up to USD 15 OFF our fees. <Link to="#">Learn more</Link></p>
                                            <p>Use Promo code <span> WELCOME10CA</span></p>
                                            <h5><Link to="tel:1-646-738-4820">1-646-738-4820</Link></h5>
                                            <h6>Available 24/7</h6>
                                        </div>
                                    </li>
                                </ul>
                                <div className="get_fare_b123">
                                    <h4>Get Fare Alerts!</h4>
                                    <p>Be the first to know when fares drop for the route <Link to="#">DAC - YYC (Dhaka toAlberta)</Link></p>
                                    <ul>
                                        <li>
                                            <div className="cents_input_12">
                                                <input className="ce_text" type="text" name="text" placeholder="Email Address" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="cents_input_12">
                                                <input className="ce_text submit_ui" type="submit" placeholder="Get Fare Alerts" />
                                            </div>
                                        </li>
                                    </ul>
                                    <p className="pb-0">By entering your email address you agree to 10 Cent Air’s <Link className="ter_n1"
                                        to="#"> Terms and Conditions, Privacy Policy </Link> and to receive email marketing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default SpeakTravelExpertModal;