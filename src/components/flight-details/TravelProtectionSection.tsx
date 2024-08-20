const TravelProtectionSection = (): JSX.Element => {
    return (
        <>
            <div className="found_box mb-5">
                <h6 className="skip_1">Skip</h6>
                <div className="f_light123">
                    <div className="row">
                        <div className="col-md-8">
                            <h5>Travel Protection</h5>
                        </div>
                        <div className="col-md-4 text-end">
                            <h4 className="em_23">USD 267<em>.95</em> <span>per person</span></h4>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="bg_it">
                                <h4><img src="assets/images/flag/g1.png" alt="" /> Reasons you might need travel protection</h4>
                                <ul className="in_bocdt dis_l1">
                                    <li><i className="fa-solid fa-check"></i> Trip cancellation</li>
                                    <li><i className="fa-solid fa-check"></i> Inclement weather</li>
                                    <li><i className="fa-solid fa-check"></i> Travel delay</li>
                                    <li><i className="fa-solid fa-check"></i> Airline bankruptcy</li>
                                </ul>
                                <div className="i_want">
                                    <div className="search_return">
                                        <div className="form-group">
                                            <input type="radio" id="yes" name="yes" />
                                            <label className="ret1" htmlFor="yes">Yes, I want travel protection for my
                                                trip</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ul className="in_bocdt dis_l1 pl-0 mt-5">
                                <li><i className="fa-solid fa-check"></i> Baggage delay</li>
                                <li><i className="fa-solid fa-check"></i> Mechanical issues</li>
                                <li><i className="fa-solid fa-check"></i> Trip Interruption</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TravelProtectionSection;