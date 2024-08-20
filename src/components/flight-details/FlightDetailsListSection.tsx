import { Link } from "react-router-dom";

const FlightDetailsListSection = (): JSX.Element => {
    return (
        <>
            <div className="found_box mb-5">
                <h6 className="skip_1">Skip</h6>
                <div className="green_box_123">
                    <h4>This flight is on an alternate date. Please verify the dates.</h4>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="f_light123">
                            <h5>Flight Details</h5>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text_usd text-end">
                            <h4>USD 1937<span>.99</span></h4>
                            <p>Price per person (incl. taxes & fees)</p>
                        </div>
                    </div>
                </div>
                <ul className="hand_ul">
                    <li>
                        <i className="fa-solid fa-thumbs-up me-1"></i>
                        Great Job! This flight comes with our Price Match Promise
                    </li>
                    <li>
                        <i className="fa-regular fa-clock de2 me-1"></i>
                        and 24 hours cancellation, for a fee
                        <i className="fa-regular fa-clock de2 mx-1"></i>
                    </li>
                </ul>
                <ul className="depart_1325">
                    <li>Depart Fri, Dec 22</li>
                    <li><Link to="#">This is an alternate date itinerary.</Link></li>
                </ul>
                <div className="mi_bov_142">
                    <ul className="stops_t2 stops_t3">
                        <li className="fd_1">
                            <div className="n_img">
                                <img src="assets/images/show/1.png" alt="" />
                            </div>
                        </li>
                        <li className="fd_2">
                            <div className="n_text1">
                                <h5>Vistara </h5>
                                <p>Flight 340 <span className="q_1">Aircraft 320</span></p>
                            </div>
                        </li>
                        <li className="fd_3">
                            <div className="m_1">
                                <h6 className="fri_dec12 h_3">Fri, Dec 21</h6>
                            </div>
                        </li>
                        <li className="fd_5">
                            <div className="dac_box12">
                                <h6>11:45 AM<span className="dac_1">Dhaka, DAC</span></h6>
                            </div>
                        </li>
                        <li className="fd_5">
                            <div className="dac_box12">
                                <h6>2:05 PM<span className="dac_1">Mumbai, BOM</span></h6>
                            </div>
                        </li>
                        <li className="fd_3">
                            <div className="m_1">
                                <h6 className="h_3">Fri, Dec 21</h6>
                            </div>
                        </li>
                        <li className="fd_6">
                            <div className="book_t1 text-start">
                                <p className="cabin_12">Cabin: Coach</p>
                                <p className="cabin_12">Brand Name: Flex</p>
                            </div>
                        </li>
                    </ul>
                    <div className="lay_box">
                        <div className="lay_1">
                            <h3 className="">Layover: 14h 20m</h3>
                        </div>
                    </div>
                </div>
                <div className="mi_bov_142">
                    <ul className="stops_t2 stops_t3">
                        <li className="fd_1">
                            <div className="n_img">
                                <img src="assets/images/show/2.png" alt="" />
                            </div>
                        </li>
                        <li className="fd_2">
                            <div className="n_text1">
                                <h5>Vistara </h5>
                                <p>Flight 340 <span className="q_1">Aircraft 320</span></p>
                            </div>
                        </li>
                        <li className="fd_3">
                            <div className="m_1">
                                <h6 className="fri_dec12 h_3">Fri, Dec 21</h6>
                            </div>
                        </li>
                        <li className="fd_5">
                            <div className="dac_box12">
                                <h6>11:45 AM<span className="dac_1">Dhaka, DAC</span></h6>
                            </div>
                        </li>
                        <li className="fd_5">
                            <div className="dac_box12">
                                <h6>2:05 PM<span className="dac_1">Mumbai, BOM</span></h6>
                            </div>
                        </li>
                        <li className="fd_3">
                            <div className="m_1">
                                <h6 className="h_3">Fri, Dec 21</h6>
                            </div>
                        </li>
                        <li className="fd_6">
                            <div className="book_t1 text-start">
                                <p className="cabin_12">Cabin: Coach</p>
                                <p className="cabin_12">Brand Name: Flex</p>
                            </div>
                        </li>
                    </ul>
                    <div className="lay_box">
                        <div className="lay_1">
                            <h3 className="">Layover: 3h 40m</h3>
                        </div>
                        <p>A <Link to="#"> Transit Visa</Link> may be required when connecting through Canada</p>
                    </div>
                </div>
                <div className="mi_bov_142">
                    <ul className="stops_t2 stops_t3">
                        <li className="fd_1">
                            <div className="n_img">
                                <img src="assets/images/show/2.png" alt="" />
                            </div>
                        </li>
                        <li className="fd_2">
                            <div className="n_text1">
                                <h5>Vistara </h5>
                                <p>Flight 340 <span className="q_1">Aircraft 320</span></p>
                            </div>
                        </li>
                        <li className="fd_3">
                            <div className="m_1">
                                <h6 className="fri_dec12 h_3">Fri, Dec 21</h6>
                            </div>
                        </li>
                        <li className="fd_5">
                            <div className="dac_box12">
                                <h6>11:45 AM<span className="dac_1">Dhaka, DAC</span></h6>
                            </div>
                        </li>
                        <li className="fd_5">
                            <div className="dac_box12">
                                <h6>2:05 PM<span className="dac_1">Mumbai, BOM</span></h6>
                            </div>
                        </li>
                        <li className="fd_3">
                            <div className="m_1">
                                <h6 className="h_3">Fri, Dec 21</h6>
                            </div>
                        </li>
                        <li className="fd_6">
                            <div className="book_t1 text-start">
                                <p className="cabin_12">Cabin: Coach</p>
                                <p className="cabin_12">Brand Name: Flex</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <h4 className="tatal_112">Total Trip Duration : 40h 15m</h4>
                    </div>
                    <div className="col-md-7">
                        <ul className="per_123">
                            <li>
                                <div className="bg">
                                    <span><i className="fa-regular fa-suitcase-rolling"></i></span>
                                    1 Personal Item
                                </div>
                            </li>
                            <li>
                                <div className="bg">
                                    <span><i className="fa-regular fa-suitcase-rolling"></i></span>
                                    1 Carry-on bag
                                </div>
                            </li>
                            <li>
                                <div className="bg">
                                    <span><i className="fa-regular fa-suitcase-rolling"></i></span>
                                    2 Checked Bags
                                </div>
                            </li>
                        </ul>
                        <ul className="non_reff">
                            <li>NON-REFUNDABLE</li>
                            <li>
                                <Link to="#">Air Canada</Link>
                            </li>
                            <li>
                                <Link to="#">Baggage Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlightDetailsListSection;