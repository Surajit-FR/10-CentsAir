import { Link } from "react-router-dom";

const PaymentOptionsSection = (): JSX.Element => {
    return (
        <>
            <div className="found_box mb-5">
                <h6 className="skip_1">Skip</h6>
                <div className="row">
                    <div className="col-md-12">
                        <div className="f_light123">
                            <h5 className="pp_12">Payment Options
                                <span className="secure_1">
                                    <i className="fa-duotone fa-solid fa-lock-keyhole"></i> Secure SSL Encrypted
                                    Transaction
                                </span>
                            </h5>
                            <p className="credite_12">Apply for 10 Cents Air Credit Card
                                <span className="dd_1">USD 50<em>.00</em> statement credit offer</span>
                            </p>

                            <h4 className="orpp_1">Credit or Debit Card</h4>
                            <ul className="visa_plat_form">
                                <li>
                                    <Link to="#">
                                        <img src="assets/images/flag/visa1.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <img src="assets/images/flag/visa2.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <img src="assets/images/flag/visa3.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <img src="assets/images/flag/visa4.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <img src="assets/images/flag/visa5.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <img src="assets/images/flag/visa6.png" alt="" />
                                    </Link>
                                </li>
                            </ul>

                            <ul className="ul_list_1 cvv_list_12">
                                <li className="f1">
                                    <input className="h_12 hvw_12" type="text" name="text" placeholder="Card Number *" />
                                </li>
                                <li className="f1">
                                    <input className="h_12 hvw_12" type="text" name="text" placeholder="Name on Card*" />
                                </li>
                                <li className="f2">
                                    <div className="date_it">
                                        <p>Expiry Date *</p>
                                        <input className="h_12 hvw_12" type="date" name="date" placeholder="Date of birth*" />
                                    </div>
                                </li>
                                <li className="f2">
                                    <div className="cvv_img">
                                        <input className="h_12 hvw_12" type="text" name="text" placeholder="CVV*" />
                                    </div>
                                </li>
                            </ul>
                            <h4 className="orpp_1 pt-0">Easy monthly payments</h4>
                            <ul className="make_easy_pp">
                                <li>
                                    <img src="assets/images/flag/aff1.png" alt="" />
                                </li>
                                <li>
                                    <h5>Make easy monthly payments over 6, 12, or 18 months.</h5>
                                    <h5>As low as $150 /month with Affirm. No late fees. Ever.</h5>
                                    <p>Available only to US residents.</p>
                                </li>
                                <li>
                                    <Link to="#">Learn more</Link>
                                </li>
                            </ul>
                            <ul className="pri_vacy_123">
                                <li><img src="assets/images/flag/mc1.png" alt="" /></li>
                                <li><Link to="#">Payment Acceptance Policy</Link></li>
                                <li><Link to="#"><i className="fa-duotone fa-solid fa-lock-keyhole"></i> Privacy
                                    Policy</Link></li>
                                <li><Link to="#">Safe Shopping Guarantee</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default PaymentOptionsSection;