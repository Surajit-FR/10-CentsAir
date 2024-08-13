const OneWayTab = (): JSX.Element => {
    return (
        <>
            <ul className="dhaka_box">
                <li className="smae_width_1">
                    <div className="dhaka_text">
                        <input
                            className="input_1"
                            type="text"
                            name="fromLocation"
                            placeholder="DAC  Dhaka, Bangladesh"
                        />
                    </div>
                </li>
                <li className="smae_width_1">
                    <div className="right_log">
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                    <div className="dhaka_text">
                        <input
                            className="input_1"
                            type="text"
                            name="toLocation"
                            placeholder="YYC  Alberta, Canada"
                        />
                    </div>
                </li>
                <li className="smae_width_2">
                    <div className="dhaka_text">
                        <input
                            className="input_1"
                            type="date"
                            name="departureDate"
                            placeholder="Dec 20, 2023"
                        />
                    </div>
                </li>
                <li className="smae_width_2">
                    <div className="dhaka_text">
                        <input
                            className="input_1"
                            type="text"
                            name="travellerInfo"
                            placeholder="1 Traveller, Economy"
                        />
                    </div>
                </li>
            </ul>
        </>
    );
};

export default OneWayTab;