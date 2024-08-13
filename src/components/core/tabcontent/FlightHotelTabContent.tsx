import { useState } from "react";
import { Link } from "react-router-dom";

const FlightHotelTabContent = (): JSX.Element => {
    const [selectedTripType, setSelectedTripType] = useState<string>('One-way');
    const [selectedTripType2, setSelectedTripType2] = useState<string>('Flight + Hotel');

    const tripTypes: Array<string> = [
        'One-way',
        'Round-trip',
    ];

    const fareTypes: Array<string> = [
        'Flight + Hotel',
        'Hotel + Car',
    ];

    const handleTripTypeClick = (tripType: string) => {
        setSelectedTripType(tripType);
    };

    const handleTypeClick = (fareType: string) => {
        setSelectedTripType2(fareType);
    };

    return (
        <>
            <form>
                <div className="tabs_bg_color">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="one_way">
                                {fareTypes?.map((tripType) => (
                                    <li
                                        key={tripType}
                                        className={selectedTripType2 === tripType ? 'active' : ''}
                                        onClick={() => handleTypeClick(tripType)}
                                    >
                                        {tripType}
                                    </li>
                                ))}
                            </ul>
                            <ul className="one_way">
                                {tripTypes?.map((tripType) => (
                                    <li
                                        key={tripType}
                                        className={selectedTripType === tripType ? 'active' : ''}
                                        onClick={() => handleTripTypeClick(tripType)}
                                    >
                                        {tripType}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <ul className="form_and_to">
                        <li className="same_wdth_1">
                            <div className="from_text">
                                <h5>From</h5>
                                <h4>DAC</h4>
                                <p>Dhaka <span className="b1">Bangladesh</span></p>
                            </div>

                        </li>
                        <li className="same_wdth_1 second_1">
                            <div className="from_text">
                                <h5>To</h5>
                                <h4>YYC</h4>
                                <p>Alberta, Calgary <span className="b1">Canada</span></p>
                            </div>
                            <div className="exchanges">
                                <Link to="#">
                                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                </Link>

                            </div>
                        </li>
                        <li className="same_wdth_2">
                            <div className="from_text">
                                <h5 className="de1">Departure <i className="fa-regular fa-angle-down"></i></h5>
                                <h4 className="tr_1">21 <em>Dec'23</em></h4>
                                <p className="satu1">Saturday</p>
                            </div>
                        </li>
                        <li className="same_wdth_2">
                            <div className="from_text">
                                <h5 className="de1">Return <i className="fa-regular fa-angle-down"></i></h5>
                                <p className="tap1">Tap to add a <br />return date for bigger<br /> discounts</p>
                            </div>
                        </li>
                        <li className="same_wdth_3">
                            <div className="from_text">
                                <h5 className="de1">Travellers & Class <i className="fa-regular fa-angle-down"></i>
                                </h5>
                                <h4 className="tr_1">1 <em>Traveller</em></h4>
                                <p className="economy">Economy/Premium Economy</p>
                            </div>
                        </li>
                    </ul>

                    <ul className="search_return mt-3">
                        <li>
                            <input className="input-elevated" type="text" placeholder="Hotel Name" />
                        </li>
                        <li>
                            <div className="form-group">
                                <input type="radio" id="trip" name="hotel" />
                                <label className="ret1" htmlFor="trip">I only need this hotel for part of my
                                    trip</label>
                            </div>
                        </li>
                        <li>
                            <div className="form-group">
                                <input type="radio" id="apartments" name="hotel" />
                                <label className="ret1" htmlFor="apartments">Homes & Apartments</label>
                            </div>
                        </li>
                        <li>
                            <div className="form-group">
                                <select className="select_2">
                                    <option>Hotel Rating</option>
                                    <option>Hotel Rating</option>
                                </select>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="text-center mt_top">
                    <input className="search_bt" type="submit" value="Search" />
                </div>
            </form>
        </>
    );
};

export default FlightHotelTabContent;