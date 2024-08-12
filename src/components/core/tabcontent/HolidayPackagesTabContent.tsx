const HolidayPackagesTabContent = (): JSX.Element => {
    return (
        <>
            <form>
                <div className="tabs_bg_color">
                    <ul className="form_and_to">
                        <li className="same_wdth_1">
                            <div className="from_text">
                                <h5>Destination</h5>
                                <h4>YYC</h4>
                                <p>Alberta, Calgary<span className="b1">Canada</span></p>
                            </div>
                        </li>
                        <li className="same_wdth_1 second_1">
                            <div className="from_text pl_123">
                                <h4 className="tr_1">21 <em>Dec'23</em></h4>
                                <p className="satu1">Saturday</p>
                            </div>
                            <div className="from_text pl_123 right_123">
                                <h4 className="tr_1">4 <em>Jan'24</em></h4>
                                <p className="satu1">Saturday</p>
                            </div>
                        </li>

                        <li className="same_wdth_2 same_wdth_4">
                            <div className="from_text">
                                <h5 className="de1">Travellers <i className="fa-regular fa-angle-down"></i></h5>
                                <h6>1 <em>Traveller</em></h6>
                            </div>
                        </li>
                        <li className="same_wdth_2 same_wdth_4">
                            <div className="from_text">
                                <h5 className="de1">Rooms <i className="fa-regular fa-angle-down"></i></h5>
                                <h6>1 <em>Rooms</em></h6>
                            </div>
                        </li>

                    </ul>

                    <ul className="search_return mt-3">
                        <li>
                            <input className="input-elevated" type="text" placeholder="Hotel Name" />
                        </li>
                        <li>
                            <div className="form-group">
                                <select className="select_2">
                                    <option>Hotel rating</option>
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

export default HolidayPackagesTabContent;