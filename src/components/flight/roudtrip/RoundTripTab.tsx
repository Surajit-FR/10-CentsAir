const RoundTripTab = (): JSX.Element => {
    return (
        <>
            <ul className="dhaka_box">
                <li className="smae_width_1">
                    <div className="dhaka_text">
                        <input className="input_1" type="text" name="text" placeholder="DAC  Dhaka, Bangladesh" />
                    </div>
                </li>
                <li className="smae_width_1">
                    <div className="right_log">
                        <i className="fa-solid fa-arrow-right-arrow-left"></i>
                    </div>
                    <div className="dhaka_text">

                        <input className="input_1" type="text" name="text" placeholder="YYC  Alberta, Canada" />
                    </div>
                </li>
                <li className="smae_width_2">
                    <div className="dhaka_text">
                        <input className="input_1" type="date" name="text" placeholder="Dec 21, 2023" />
                    </div>
                </li>
                <li className="smae_width_2">
                    <div className="dhaka_text">
                        <input className="input_1" type="date" name="text" placeholder="Jan 04, 2024" />
                    </div>
                </li>
                <li className="smae_width_2">
                    <div className="dhaka_text">
                        <input className="input_1" type="text" name="text" placeholder="1 Traveller, Economy" />
                    </div>
                </li>
            </ul>
        </>
    );
};

export default RoundTripTab;