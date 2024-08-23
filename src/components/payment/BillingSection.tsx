const BillingSection = (): JSX.Element => {
    return (
        <>
            <div className="found_box mb-5">
                <h6 className="skip_1">Skip</h6>
                <div className="f_light123">
                    <h5>Billing and Contact Information</h5>
                </div>
                <div className="row mt-4">
                    <div className="col-md-5">
                        <div className="date_it">
                            <p>Country*</p>
                            <input className="h_12 hvw_12" type="text" name="text" value="United States" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="bil_e12">
                            <input className="h_12 hvw_12" type="text" name="text" value="Address*" />
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-4">
                        <div className="bil_e12">
                            <input className="h_12 hvw_12" type="text" name="text" value="Zip*" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bil_e12">
                            <input className="h_12 hvw_12" type="text" name="text" value="City*" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="date_it">
                            <p>State*</p>
                            <input className="h_12 hvw_12" type="text" name="text" value="State*" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="bil_e12">
                            <input className="h_12 hvw_12" type="text" name="text" value="Contact Phone*" />
                            <ul className="search_return sec_top_12">
                                <li>
                                    <div className="form-group">
                                        <input type="radio" id="agree" name="agree" />
                                        <label className="ret1 han_q2 agree12" htmlFor="agree">I agree to share this
                                            contact information with the airline(s) associated with this
                                            booking. <i className="fa-regular fa-clock de2"></i></label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bil_e12">
                            <input className="h_12 hvw_12" type="text" name="text" value="Confirm Email Address*" />
                            <p>Booking confirmation will be sent to this email address</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BillingSection;