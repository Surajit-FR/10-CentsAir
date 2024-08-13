const CommonSearchSection = (): JSX.Element => {

    return (
        <>
            <ul className="search_return">
                <li>
                    <input
                        className="input-elevated"
                        type="text"
                        name="preferredAirline"
                        placeholder="Search Preferred Airline"
                    />
                </li>
                <li>
                    <div className="form-group">
                        <input
                            type="radio"
                            id="city1"
                            name="returnOption"
                            value="city1"
                        />
                        <label className="ret1" htmlFor="city1">
                            Return to or from another city/airport?
                        </label>
                    </div>
                </li>
                <li>
                    <div className="form-group">
                        <input
                            type="radio"
                            id="flights"
                            name="returnOption"
                            value="flights"
                        />
                        <label className="ret1" htmlFor="flights">
                            Direct Flights
                        </label>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default CommonSearchSection;