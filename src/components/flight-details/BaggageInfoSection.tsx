import { Link } from "react-router-dom";

const BaggageInfoSection = (): JSX.Element => {
    return (
        <>
            <div className="found_box mb-5">
                <h6 className="skip_1">Skip</h6>
                <div className="f_light123">
                    <h5>Baggage Information (per person)</h5>
                    <h6>Departure Flight DAC <i className="fa-solid fa-arrow-right"></i> YYC</h6>
                    <ul className="cabin_123">
                        <li><b>Vistara</b></li>
                        <li><b>Cabin:</b> Coach</li>
                        <li><b>Brand Name :</b> Flex</li>
                    </ul>
                </div>

                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="carry_on_bag">
                            <span className="bagr4">
                                <img src="assets/images/flag/bag1.png" alt="" />
                            </span>
                            <div className="text1">
                                <h4>Personal Item</h4>
                                <p>Purse, small backpack, briefcase</p>
                                <ul className="in_bocdt">
                                    <li><i className="fa-solid fa-check"></i> Included</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="carry_on_bag">
                            <span className="bagr4">
                                <img src="assets/images/flag/bag2.png" alt="" />
                            </span>
                            <div className="text1">
                                <h4>Carry-on bag</h4>
                                <p>Purse, small backpack, briefcase</p>
                                <ul className="in_bocdt">
                                    <li><i className="fa-solid fa-check"></i> Included</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="carry_on_bag">
                            <span className="bagr4">
                                <img src="assets/images/flag/bag3.png" alt="" />
                            </span>
                            <div className="text1">
                                <h4>2 Checked Bags</h4>
                                <p>Purse, small backpack, briefcase</p>
                                <ul className="in_bocdt">
                                    <li><i className="fa-solid fa-check"></i> Included</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="air_it">
                    <li><Link to="#">Air Canada</Link></li>
                    <li><Link to="#">Baggage Policy</Link></li>
                </ul>
            </div>
        </>
    );
};

export default BaggageInfoSection;