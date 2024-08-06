import { Link } from "react-router-dom";

const Footer = (): JSX.Element => {
    return (
        <>
            <footer className="footer_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="with_us">
                                <li>Get in Touch with Us</li>
                                <li>
                                    <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 col-lg-5">
                            <div className="row">
                                <div className="col-md-6 col-lg-6">
                                    <div className="quick_links">
                                        <h4>Quick Links</h4>
                                        <ul>
                                            <li>
                                                <Link to="#">Popular Airlines</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Popular Flight Routes</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Top U.S. Destinations</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Top International Destinations</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Site Directories</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Stay Connected</Link>
                                            </li>
                                            <li>
                                                <Link to="#">International Sites</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Your Privacy Choices</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <div className="quick_links">
                                        <h4>BOOK</h4>
                                        <ul>
                                            <li>
                                                <Link to="#">Cheap Flights</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Cheap Hotels</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Car Rentals</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Vacation Packages</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Group Travel</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Save & Earn $</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-7">
                            <div className="row">
                                <div className="col-md-4 col-lg-4">
                                    <div className="quick_links">
                                        <h4>Traveler Tools</h4>
                                        <ul>
                                            <li>
                                                <Link to="#">Gift Cards</Link>
                                            </li>
                                            <li>
                                                <Link to="#">CheapOair Credit Card</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Check My Booking</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Customer Support</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Online Check-in</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Airline Baggage Fees</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Check Flight Status</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Travel Blog</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Local Guides</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4">
                                    <div className="quick_links">
                                        <h4>About 10 Cents air</h4>
                                        <ul>
                                            <li>
                                                <Link to="#">About Us</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Press Room</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Careers</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Social Responsibility</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Affiliate Program</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Client Testimonial</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Advertise with Us</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Newsletter</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4">
                                    <div className="quick_links">
                                        <h4>Legal</h4>
                                        <ul>
                                            <li>
                                                <Link to="#">Privacy Policy</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Cookie Policy</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Price Match Promise</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Terms & Conditions</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Taxes & Fees</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Our Service Fees</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Post-Ticketing Fees</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Compassion Exception Policy</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Connection Protection</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="p_footer">
                                <p>©2023 10 Cent Air. All rights reserved. All users of our services are subject to our Privacy
                                    Policy and agree to our Terms and Conditions. California: CST #2073455, Florida: ST37449,
                                    Iowa: SOT #967, Nevada : SOT #2007-1137, Washington: WASOT #602755832 </p>
                                <img src="assets/images/icon/icon1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;