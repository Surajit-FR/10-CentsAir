import { Link } from "react-router-dom";

const PriceDetailsSection = (): JSX.Element => {
    return (
        <>
            <style>
                {`
                    .pro_1::placeholder {
                        color: #21B4E2;
                        opacity: 1;
                    }
                `}
            </style>
            <div className="col-md-4 col-lg-3">
                <div className="make_box123">
                    <p>Please make your payment within the next <b>20 minutes</b> <i
                        className="fa-regular fa-clock de2"></i> to keep this session active.</p>
                    <ul className="appy_t1">
                        <li>
                            <input
                                className="pro_1"
                                type="text"
                                name="text"
                                placeholder="Enter promo code or gift card number"
                            />
                        </li>
                        <li>
                            <input className="submit_10" type="submit" value="Apply" />
                        </li>
                    </ul>
                    <Link className="pay_b" to="#">Pay with credit from a previous booking <i
                        className="fa-solid fa-angle-up"></i></Link>
                    <p className="fares">To use any travel credit that you have with us from a previously canceled
                        booking, please call
                        <Link className="cll_1" to="#"> 845-848-0211</Link>
                    </p>
                    <div className="details_usd">
                        <h4>Price Details (USD)</h4>
                        <table className="usd_list">
                            <thead>
                                <tr>
                                    <th>Travelers</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Base Fare</td>
                                    <td>
                                        <p>USD 1920<em>.08</em></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tax & Charges</td>
                                    <td>
                                        <p>USD 1920<em>.08</em></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Service Charges</td>
                                    <td>
                                        <p>USD 1920<em>.08</em></p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="usd_list border_bt">
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Travel Protection <br />USD 267.99 per person</p>
                                    </td>
                                    <td>
                                        <Link className="add_pl" to="#">+ Add</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="usd_list">
                            <thead>
                                <tr>
                                    <th>Total Price (USD)</th>
                                    <th>USD 1937.99</th>
                                </tr>
                            </thead>
                        </table>
                        <p className="fares">All fares are quoted in USD. Some airlines may charge <Link className="bag_fees"
                            to="#"> baggage fees.</Link> Your credit/debit card may be billed in multiple charges
                            totaling the final total price. Promo Code is off our service fees.</p>
                        <ul className="join_12">
                            <li>
                                <img src="assets/images/flag/el1.png" alt="" />
                            </li>
                            <li>
                                <p>Join ClubMiles and earn 2225 points or more on this booking</p>
                            </li>
                            <li>
                                <Link to="#">Sign In</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceDetailsSection;