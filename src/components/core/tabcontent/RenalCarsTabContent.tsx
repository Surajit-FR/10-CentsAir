import { useState } from "react";

const RenalCarsTabContent = (): JSX.Element => {
    const types: Array<string> = [
        'Rental Cars',
        'Airport Transportation',
    ];

    const [selectedType, setSelectedType] = useState<string>('Rental Cars');
    const handleTypeClick = (tripType: string) => {
        setSelectedType(tripType);
    };

    return (
        <>
            <form>
                <div className="tabs_bg_color">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="one_way">
                                {types?.map((tripType) => (
                                    <li
                                        key={tripType}
                                        className={selectedType === tripType ? 'active' : ''}
                                        onClick={() => handleTypeClick(tripType)}
                                    >
                                        {tripType}
                                    </li>
                                ))}
                            </ul>
                            <ul className="search_return mb-4">
                                <li>
                                    <div className="form-group">
                                        <select className="select_2">
                                            <option>All Car Rental Companies</option>
                                            <option>All Car Rental Companies</option>
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-group">
                                        <select className="select_2">
                                            <option>All Car Sizes</option>
                                            <option>All Car Sizes</option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="form_and_to">
                        <li className="same_wdth_1">
                            <div className="from_text">
                                <h4>YYC</h4>
                                <p>Alberta, Calgary <span className="b1">Canada</span></p>
                            </div>

                        </li>
                        <li className="same_wdth_1 second_1">
                            <div className="from_text">
                                <ul className="search_return">
                                    <li className="last_12">
                                        <div className="form-group">
                                            <input type="radio" id="location_1" name="location" />
                                            <label className="ret1" htmlFor="location_1">Need a different<br />
                                                dropoff location</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="same_wdth_2">
                            <div className="from_text">
                                <h4 className="tr_1">21 <em>Dec'23</em></h4>
                                <p className="satu1">Saturday</p>
                                <h5 className="de1 pb-0">10:00AM <i className="fa-regular fa-angle-down"></i></h5>
                            </div>
                        </li>
                        <li className="same_wdth_2">
                            <div className="from_text">
                                <h4 className="tr_1">21 <em>Jan'24</em></h4>
                                <p className="satu1">Saturday</p>
                                <h5 className="de1 pb-0">10:00AM <i className="fa-regular fa-angle-down"></i></h5>
                            </div>
                        </li>
                        <li className="same_wdth_3">
                            <div className="from_text">
                                <h5 className="de1">Traveller<i className="fa-regular fa-angle-down"></i></h5>
                                <h4 className="tr_1">1 <em>Traveller</em></h4>
                            </div>
                        </li>
                    </ul>
                    <ul className="search_return mt-2">
                        <li>
                            <input className="input-elevated" type="text" placeholder="Search Preferred Airline" />
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

export default RenalCarsTabContent;