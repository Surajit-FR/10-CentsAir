import { Link } from 'react-router-dom';
import { FlightItemsType } from '../../../types/common';

const OneWayFlightItem = ({ flight }: { flight: FlightItemsType }) => {
    return (
        <>
            <div className="bg_bcolor">
                <ul className="stops_t2">
                    <li className="fd_1">
                        <div className="n_img">
                            <img src={flight?.imageSrc} alt="" />
                        </div>
                    </li>
                    <li className="fd_2">
                        <div className="n_text1">
                            <h5>{flight?.stops}</h5>
                            <p>{flight?.airline} <span className="q_1">(with others)</span></p>
                        </div>
                    </li>
                    <li className="fd_3">
                        <div className="m_1">
                            <h6>{flight?.duration}</h6>
                        </div>
                    </li>
                    <li className="fd_4">
                        <div className="time_b1">
                            <div className="dac_box12">
                                <h6>{flight?.departureTime} <span className="dac_1">{flight?.departureAirport}</span></h6>
                            </div>
                            <div className="bom">
                                <span className="bom_1">
                                    <em className="rhombues1"><i className="fa-solid fa-rhombus"></i></em>
                                    <em className="rhombues2"><i className="fa-solid fa-rhombus"></i></em>
                                </span>
                            </div>
                            <div className="dac_box12">
                                <p>next day</p>
                                <h6>{flight?.arrivalTime}<span className="dac_1">{flight?.arrivalAirport}</span></h6>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </li>
                    <li className="fd_5">
                        <div className="fl_tr">
                            <Link className="sl_14" to="#">
                                <img src="assets/images/icon/f.png" alt="" />
                                <span className="fe1">Select this<br /> Departure</span>
                            </Link>
                        </div>
                    </li>
                    <li className="fd_6">
                        <div className="book_t1">
                            <Link className="book_t2" to="/booked-flight-details">BOOK</Link>
                            <h5>{flight?.price}<em>.99</em></h5>
                            <p>Price per person (incl. taxes & fees)</p>
                        </div>
                    </li>
                </ul>
                <div className="fl_bg_box">
                    <div className="fl_left">
                        <Link to="#">Flight Details <i className="fa-solid fa-angle-down"></i></Link>
                    </div>
                    <div className="rt_right">
                        <ul>
                            <li><Link className="fare_1" to="#"> Fare Rules</Link></li>
                            <li><Link className="fare_2" to="#">REFUNDABLE</Link></li>
                            <li><Link to="#">ECONOMY</Link></li>
                            <li>
                                <div className="bg">
                                    <span><i className="fa-regular fa-suitcase-rolling"></i></span>
                                    2 Checked Bags
                                </div>
                            </li>
                            <li>
                                <div className="bg">
                                    <span><i className="fa-solid fa-person-seat"></i></span>
                                    8 Seats
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </>
    );
};

export default OneWayFlightItem;
