import { Link } from "react-router-dom";

const FlightsBottomBox = (): JSX.Element => {
    return (
        <>
            <div className="qualified_boxs">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-lg-3">
                            <div className="qua_img">
                                <img src="assets/images/show/r1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 d-flex">
                            <ul className="help_boxs">
                                <li>
                                    <div className="grt_boc1">
                                        <h4>Get qualified help from experts</h4>
                                        <p>Available <br /> 24/7</p>
                                        <Link to="#">000-800-050-3540</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="grt_boc1">
                                        <div className="mx-auto">
                                            <span className="one_1"><em>1</em></span>
                                        </div>
                                        <h4>Find great deals and destinations for your dream vacation!</h4>

                                    </div>
                                </li>
                                <li>
                                    <div className="grt_boc1">
                                        <div className="mx-auto">
                                            <span className="one_1"><em>2</em></span>
                                        </div>
                                        <h4>24-hour window cancellation policy.</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="grt_boc1">
                                        <div className="mx-auto">
                                            <span className="one_1"><em>3</em></span>
                                        </div>
                                        <h4>Instant booking confirmation.</h4>
                                    </div>
                                </li>



                            </ul>
                        </div>
                        <div className="col-md-3 col-lg-3">
                            <div className="qua_text">
                                <h5>Looking for great deals?</h5>
                                <p>Let us help you find cheap airfares for your roundtrip flight from DAC to YYC</p>
                                <p>We are available <Link to="#"> 24/7 for chat</Link></p>
                                <Link className="chat_now" to="#">Chat Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlightsBottomBox;