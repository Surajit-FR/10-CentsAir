import { Link } from "react-router-dom";

const PoliciesReviewSection = (): JSX.Element => {
    return (
        <>
            <div className="found_box mb-5">
                <h6 className="skip_1">Skip</h6>
                <div className="f_light123">
                    <h5>Policies & Review</h5>
                </div>
                <ul className="confirm_c">
                    <li><i className="fa-solid fa-circle-info"></i></li>
                    <li>
                        <p>Please confirm that the date(s)and time(s)of flights and name(s)of travelers in your
                            booking are accurate. Each traveler's name and date of birth must be exactly as
                            shown on the passport (for international flights) or valid government-issued photo
                            ID (for domestic flights) to be used on this trip. Tickets are non-transferable and
                            name changes are not permitted after booking.</p>
                    </li>
                </ul>
                <ul className="tesep_11">
                    <li>Traveler 1 :</li>
                    <li>Kevin Vo Male</li>
                    <li>Sep 26, 1982</li>
                    <li><Link to="#">make changes</Link></li>
                </ul>
                <ul className="stops_t2 gg_1">
                    <li className="fd_1">
                        <div className="n_img">
                            <img src="assets/images/show/1.png" alt="" />
                        </div>
                    </li>
                    <li className="fd_2">
                        <div className="n_text1">
                            <h5>2 stops</h5>
                            <p>Vistara <span className="q_1">(with others)</span></p>
                        </div>
                    </li>
                    <li className="fd_3">
                        <div className="m_1">
                            <h6>40h 15m</h6>
                        </div>
                    </li>
                    <li className="fd_4">
                        <div className="time_b1">
                            <div className="dac_box12">
                                <h6>11:45 AM <span className="dac_1">DAC</span></h6>
                            </div>
                            <div className="bom">
                                <span className="bom_1">
                                    <em className="rhombues1"><i className="fa-solid fa-rhombus"></i></em>
                                    <em className="rhombues2"><i className="fa-solid fa-rhombus"></i></em>
                                </span>
                            </div>
                            <div className="dac_box12">
                                <p>next day</p>
                                <h6>3:00 PM<span className="dac_1">YYC</span></h6>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </li>
                    <li className="fd_5">
                        <div className="m_1">
                            <h6 className="h_3"><b>Thu, Dec 21</b></h6>
                        </div>
                    </li>
                </ul>
                <h4 className="by_fer_1">Operated by Discover Airlines</h4>
                <ul className="stops_t2 gg_1">
                    <li className="fd_1">
                        <div className="n_img">
                            <img src="assets/images/show/2.png" alt="" />
                        </div>
                    </li>
                    <li className="fd_2">
                        <div className="n_text1">
                            <h5>2 stops</h5>
                            <p>Vistara <span className="q_1">(with others)</span></p>
                        </div>
                    </li>
                    <li className="fd_3">
                        <div className="m_1">
                            <h6>40h 15m</h6>
                        </div>
                    </li>
                    <li className="fd_4">
                        <div className="time_b1">
                            <div className="dac_box12">
                                <h6>11:45 AM <span className="dac_1">DAC</span></h6>
                            </div>
                            <div className="bom">
                                <span className="bom_1">
                                    <em className="rhombues1"><i className="fa-solid fa-rhombus"></i></em>
                                    <em className="rhombues2"><i className="fa-solid fa-rhombus"></i></em>
                                </span>
                            </div>
                            <div className="dac_box12">
                                <p>next day</p>
                                <h6>3:00 PM<span className="dac_1">YYC</span></h6>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </li>
                    <li className="fd_5">
                        <div className="m_1">
                            <h6 className="h_3"><b>Thu, Dec 21</b></h6>
                        </div>
                    </li>
                </ul>
                <div className="tickets_are_12">
                    <p>Tickets are non-transferable and name changes are not permitted. Total price shown
                        includes all applicable taxes & fees and our service fees. Some airlines may charge
                        additional baggage fees or other fees. Fares are not guaranteed until ticketed. Tickets
                        and our fees are non-refundable (see Fare Rules). Some taxes and government agency fees
                        may be non-refundable.Date and routing changes will be subject to airline penalties and
                        our fees.</p>
                </div>

                <div className="text-center">
                    <p className="clicking_byq2">By clicking 'Confirm & Book', I agree that I have read and accepted
                        the above policies and 10 Cents Air.com's <br /> Terms and Conditions and Privacy Policy
                    </p>
                    <Link className="confirm_book_sw seats_123" to="#">Confirm & Book</Link>
                </div>
            </div>
        </>
    );
};

export default PoliciesReviewSection;