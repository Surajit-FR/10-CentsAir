import { useState } from "react";
import { Link } from "react-router-dom";

const GroupTravelTabContent = (): JSX.Element => {
    const [selectedTripType, setSelectedTripType] = useState<string>('One-way');

    const tripTypes: Array<string> = [
        'One-way',
        'Round-trip',
        'Multi-city'
    ];
    const handleTripTypeClick = (tripType: string) => {
        setSelectedTripType(tripType);
    };

    return (
        <>
            <form>
                <div className="tabs_bg_color">
                    <div className="row">
                        <div className="col-md-7">
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
                        <div className="col-md-5">
                            <h5 className="book_1">Book International and Domestic Flights</h5>
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
                                <h4>KOL</h4>
                                <p>Kolkata, West Bengal <span className="b1">India</span></p>
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
                                <input type="radio" id="direct_1" name="direct" />
                                <label className="ret1" htmlFor="direct_1">Return to or from another
                                    city/airport?</label>
                            </div>
                        </li>
                        <li>
                            <div className="form-group">
                                <input type="radio" id="direct_2" name="direct" />
                                <label className="ret1" htmlFor="direct_2">Direct Flights</label>
                            </div>
                        </li>
                    </ul>
                    <ul className="search_return mt-4">
                        <li>
                            <div className="form-group">
                                <select className="select_2">
                                    <option>Select Group Type</option>
                                    <option>Sports</option>
                                    <option>Wedding</option>
                                    <option>Outbound</option>
                                    <option>Pilgrimage</option>
                                    <option>Mice</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <div className="form-group">
                                <select className="select_2">
                                    <option>Select currency</option>
                                    <option>currency</option>
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

export default GroupTravelTabContent;