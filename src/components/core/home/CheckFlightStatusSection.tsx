const CheckFlightStatusSection = (): JSX.Element => {
    return (
        <>
            <section className="found_section welcome_kevin">
                <img src="assets/images/flag/v1.png" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bgt_box">
                                <h2 className="low_text">Welcome Kevin, Check Flight Status</h2>
                                <ul className="by_flight">
                                    <li className="active">By Flight</li>
                                    <li>By Airport</li>
                                    <li>By Route</li>
                                </ul>
                                <form>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="inup_text">
                                                <input className="nr3" type="text" name="text" placeholder="Airline Name or code" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="inup_text">
                                                <input className="nr3" type="text" name="text" placeholder="Flight Number" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="inup_text">
                                                <input className="nr3" type="text" name="text" placeholder="Select a date" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="text-center">
                                                <input className="check_status" type="submit" value="Check Status" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CheckFlightStatusSection;