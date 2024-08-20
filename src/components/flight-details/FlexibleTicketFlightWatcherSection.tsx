import { Link } from "react-router-dom";

const FlexibleTicketFlightWatcherSection = (): JSX.Element => {
    return (
        <>
            <div className="found_box mb-5">
                <h6 className="skip_1">Skip</h6>
                <div className="f_light123">
                    <div className="row">
                        <div className="col-md-8">
                            <h5>Flexible Ticket and Flight Watcher</h5>
                        </div>
                        <div className="col-md-4 text-end">
                            <h4 className="em_23">USD 267<em>.95</em> <span>per person</span></h4>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="bg_it">
                                <h4><img src="assets/images/flag/g2.png" alt="" /> Change travel plans with no additional agency
                                    fees within 24 hours of your booking. <i className="fa-thin fa-circle-info"></i>
                                </h4>
                                <ul className="in_bocdt dis_l1">
                                    <li><i className="fa-solid fa-check"></i> Rebooking included (subject to fare
                                        increase)</li>
                                    <li><i className="fa-solid fa-check"></i> Name changes included</li>
                                    <li><i className="fa-solid fa-check"></i> Cancellation within 24 hours</li>
                                </ul>
                            </div>
                            <div className="d_flas1">
                                <p>Plus, Information about your flight including delays, cancellations, and gate
                                    or terminal changes are sent directly to you.</p>
                                <Link to="#">Add Flexible Ticket</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlexibleTicketFlightWatcherSection;