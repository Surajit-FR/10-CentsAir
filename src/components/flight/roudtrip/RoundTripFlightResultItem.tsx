import { Link } from "react-router-dom";
import { FlightData } from "../../../types/common";

const RoundTripFlightResultItem = ({ flight }: { flight: FlightData }): JSX.Element => {

    return (
        <>
            <div className="bg_bcolor">
                <ul className="stops_t2">
                    <li className="fd_1">
                        {flight.images.map((src, imgIndex) => (
                            <div className={`n_img ${imgIndex > 0 ? 'mt-5' : ''}`} key={imgIndex}>
                                <img src={src} alt="" />
                            </div>
                        ))}
                    </li>
                    <li className="fd_2">
                        {flight.stops.map((stop, stopIndex) => (
                            <div className={`n_text1 ${stopIndex > 0 ? 'mt-5' : ''}`} key={stopIndex}>
                                <h5>2 stops</h5>
                                <p>{stop.airline} <span className="q_1">{stop.additional}</span></p>
                            </div>
                        ))}
                    </li>
                    <li className="fd_3">
                        {flight.durations.map((duration, durIndex) => (
                            <div className={`m_1 ${durIndex > 0 ? 'mt-5 pt-4' : ''}`} key={durIndex}>
                                <h6>{duration}</h6>
                            </div>
                        ))}
                    </li>
                    <li className="fd_4">
                        {flight.times.map((time, timeIndex) => (
                            <div className={`time_b1 ${timeIndex > 0 ? 'mt-5' : ''}`} key={timeIndex}>
                                <div className="dac_box12">
                                    <h6>{time.departure.time} <span className="dac_1">{time.departure.airport}</span></h6>
                                </div>
                                <div className="bom">
                                    <span className="bom_1">
                                        <em className="rhombues1"><i className="fa-solid fa-rhombus"></i></em>
                                        <em className="rhombues2"><i className="fa-solid fa-rhombus"></i></em>
                                    </span>
                                </div>
                                <div className="dac_box12">
                                    <p>{time.arrival.nextDay ? 'next day' : time.arrival.plusDays ? `+${time.arrival.plusDays} days` : ''}</p>
                                    <h6>{time.arrival.time}<span className="dac_1">{time.arrival.airport}</span></h6>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        ))}
                    </li>
                    <li className="fd_5">
                        <div className="fl_tr">
                            <Link className="sl_14" to="#">
                                <img src="assets/images/icon/f.png" alt="" />
                                <span className="fe1">Select this<br /> Departure</span>
                            </Link>
                        </div>
                        <div className="fl_tr mt-5">
                            <Link className="sl_14" to="#">
                                <img src="assets/images/icon/f.png" alt="" />
                                <span className="fe1">Select this <br /> Return</span>
                            </Link>
                        </div>
                    </li>
                    <li className="fd_6">
                        <div className="book_t1">
                            <h5>{flight.price}</h5>
                            <p className="pb-1">Price per person (incl. taxes & fees)</p>
                            <Link className="book_t2" to="#">BOOK</Link>
                        </div>
                        <div className="book_t1 text-start">
                            <p>As low as {flight.paymentPlan} with <img className="img_01" src="assets/images/show/a1.png" alt="" /></p>
                            <Link className="more_12" to="#">Learn more</Link>
                        </div>
                    </li>
                </ul>
                <div className="fl_bg_box">
                    <div className="fl_left">
                        <Link to="/flight-details">Flight Details <i className="fa-solid fa-angle-down"></i></Link>
                    </div>
                    <div className="rt_right">
                        <ul>
                            <li><Link className="fare_1" to="#"> Fare Rules</Link></li>
                            <li><Link className="fare_2" to="#">REFUNDABLE</Link></li>
                            <li><Link to="#">ECONOMY</Link></li>
                            {flight.additionalInfo.map((info, infoIndex) => (
                                <li key={infoIndex}>
                                    <div className="bg">
                                        <span><i className={`fa ${info.icon}`}></i></span>
                                        {info.text}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </>
    );
};

export default RoundTripFlightResultItem;