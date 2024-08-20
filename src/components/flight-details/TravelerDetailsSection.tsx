import { useState } from "react";
import { Link } from "react-router-dom";

const TravelerDetailsSection = (): JSX.Element => {
    const [showOptionalRequests, setShowOptionalRequests] = useState<boolean>(false);

    const toggleOptionalRequests = (): void => {
        setShowOptionalRequests(!showOptionalRequests);
    };

    return (
        <>
            <div className="found_box mb-5">
                <h6 className="skip_1">Skip</h6>
                <div className="f_light123">
                    <div className="row">
                        <div className="col-md-8">
                            <h5>Traveler Details</h5>
                        </div>
                        <div className="col-md-4 text-end">
                            <p className="n1_ht">Already a ClubMiles member?
                                <Link to="#">
                                    <span className="fa_it">
                                        <i className="fa-solid fa-user"></i>
                                    </span> Sign In
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="the_enter">
                        <p>Please enter the traveler's name and date of birth exactly as shown on the passport
                            (for international flights) or valid government-issued photo ID (for domestic
                            flights) to be used on this trip. Name changes are not permitted after booking.</p>
                    </div>

                    <div className="the_enter your_1">
                        <div className="be_fore">
                            <h5>Before booking your flight, please check the latest COVID-19 travel restrictions
                                to Canada</h5>
                            <p>Please continuously check all COVID-19 related restrictions directly with
                                airlines prior to travel as they may change</p>
                        </div>
                        <Link className="see" to="#">See Restrictions</Link>
                    </div>

                    <form>
                        <input className="h_12" type="email" name="email" placeholder="Email Address*" />
                        <ul className="ul_list_1">
                            <li className="f1">
                                <input className="h_12" type="text" name="text" placeholder="First Name*" />
                            </li>
                            <li className="f1">
                                <input className="h_12" type="text" name="text" placeholder="Middle Name" />
                            </li>
                            <li className="f1">
                                <input className="h_12" type="text" name="text" placeholder="Last Name*" />
                            </li>
                            <li className="f2">
                                <div className="date_it">
                                    <p>Date of birth*</p>
                                    <input className="h_12" type="date" name="date" placeholder="Date of birth*" />
                                </div>
                            </li>
                            <li className="f3">
                                <div className="date_it">
                                    <p>Gender*</p>
                                    <select className="h_12 rt1">
                                        <option>F</option>
                                        <option>M</option>
                                        <option>O</option>
                                    </select>
                                </div>
                            </li>
                        </ul>

                        <ul className="ul_list_1 n1">
                            <li>
                                <input className="h_12" type="text" name="text" placeholder="Passport Number*" />
                            </li>
                            <li>
                                <input className="h_12" type="text" name="text" placeholder="Country*" />
                            </li>
                            <li>
                                <div className="date_it">
                                    <p>Passport Expiry*</p>
                                    <input className="h_12" type="date" name="date" placeholder="Date of birth*" />
                                </div>
                            </li>
                            <li>
                                <div className="date_it">
                                    <p>Special Services*</p>
                                    <select className="h_12 rt1">
                                        <option>Select Special Services</option>
                                        <option>1</option>
                                    </select>
                                </div>
                            </li>
                        </ul>

                        <div className="vl_upload">
                            <ul>
                                <li>File Upload</li>
                                <li><input type="file" id="upload_statement" className="file-border" /></li>
                                <li><span className="upload-btn" id="upload-btn"></span></li>
                            </ul>
                        </div>

                        <Link className="pay_b pay_flyer1" to="#" onClick={toggleOptionalRequests}>
                            Frequent Flyer and Optional Requests (Optional)
                            <i className={`fa-solid fa-chevron-${showOptionalRequests ? 'up' : 'down'}`}></i>
                        </Link>

                        {showOptionalRequests &&
                            <>
                                <h5 className="mt-3">Traveller 1 - Adult</h5>
                                <ul className="ul_list_1 n1 mt-3 mn_11">
                                    <li>
                                        <div className="date_it">
                                            <p>Meal Preference*</p>
                                            <select className="h_12 rt1">
                                                <option>Meal</option>
                                                <option>Meal 1</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="date_it">
                                            <p>Special Services*</p>
                                            <select className="h_12 rt1">
                                                <option>Select Special Services</option>
                                                <option>Select Special Services 1</option>
                                            </select>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="ul_list_1 n1 mn_11">
                                    <li>
                                        <div className="date_it">
                                            <p>Redress*</p>
                                            <input className="h_12" type="text" name="text" value="Redress Number" />
                                        </div>
                                    </li>
                                </ul>
                                <ul className="ul_list_1 n1 mn_11">
                                    <li>
                                        <div className="date_it">
                                            <p>Known Traveller*</p>
                                            <input className="h_12" type="text" name="text" value="Known Traveller Number" />
                                        </div>
                                    </li>
                                </ul>
                                <h6 className="op_12">Frequent Flyer(Optional)</h6>
                                <ul className="number_123">
                                    <li>
                                        <span className="f_e">
                                            <img src="assets/images/show/1.png" alt="" />
                                        </span>
                                        <div className="text">
                                            <p>Frequent Flyer Number</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="f_e">
                                            <img src="assets/images/show/2.png" alt="" />
                                        </span>
                                        <div className="text">
                                            <p>Frequent Flyer Number</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="f_e">
                                            <img src="assets/images/show/3.png" alt="" />
                                        </span>
                                        <div className="text">
                                            <p>Frequent Flyer Number</p>
                                        </div>
                                    </li>
                                </ul>
                            </>
                        }
                        <div className="text-center">
                            <input className="seats_123" type="submit" value="Continue to Seats" />
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

export default TravelerDetailsSection;