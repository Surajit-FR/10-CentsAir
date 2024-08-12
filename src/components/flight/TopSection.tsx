import React, { useEffect, useState } from 'react';
import lodash from 'lodash';

const TopSection = (): JSX.Element => {
    const [selectedTravelType, setSelectedTravelType] = useState<string>('one-way');
    const [returnFromCity, setReturnFromCity] = useState<boolean>(false);
    const [directFlight, setDirectFlight] = useState<boolean>(false);
    const [fromLocation, setFromLocation] = useState<string>('');
    const [toLocation, setToLocation] = useState<string>('');
    const [departureDate, setDepartureDate] = useState<string>('');
    const [travellerInfo, setTravellerInfo] = useState<string>('');
    const [preferredAirline, setPreferredAirline] = useState<string>('');

    // Function to log data
    const logData = () => {
        const data = {
            selectedTravelType,
            returnFromCity,
            directFlight,
            fromLocation,
            toLocation,
            departureDate,
            travellerInfo,
            preferredAirline,
        };
        console.log(data);
    };

    // Debounce the logData function
    const debouncedLogData = lodash.debounce(logData, 500);

    useEffect(() => {
        debouncedLogData();
    }, [debouncedLogData,
        selectedTravelType,
        returnFromCity,
        directFlight,
        fromLocation,
        toLocation,
        departureDate,
        travellerInfo,
        preferredAirline,
    ]);

    const handleTravelTypeChange = (type: string) => {
        setSelectedTravelType(type);
    };

    // Update state and call debounced function
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;

        switch (name) {
            case 'fromLocation':
                setFromLocation(value);
                break;
            case 'toLocation':
                setToLocation(value);
                break;
            case 'departureDate':
                setDepartureDate(value);
                break;
            case 'travellerInfo':
                setTravellerInfo(value);
                break;
            case 'preferredAirline':
                setPreferredAirline(value);
                break;
            case 'returnOption':
                if (type === 'radio') {
                    if (value === 'city1') {
                        setReturnFromCity(checked);
                        setDirectFlight(false);
                    } else if (value === 'flights') {
                        setDirectFlight(checked);
                        setReturnFromCity(false);
                    }
                }
                break;
            default:
                break;
        }
        debouncedLogData();
    };

    return (
        <>
            <div className="one_way_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="one_way">
                                <li
                                    className={selectedTravelType === 'one-way' ? 'active' : ''}
                                    onClick={() => handleTravelTypeChange('one-way')}
                                >
                                    One-way
                                </li>
                                <li
                                    className={selectedTravelType === 'round-trip' ? 'active' : ''}
                                    onClick={() => handleTravelTypeChange('round-trip')}
                                >
                                    Round-trip
                                </li>
                                <li
                                    className={selectedTravelType === 'multi-city' ? 'active' : ''}
                                    onClick={() => handleTravelTypeChange('multi-city')}
                                >
                                    Multi-city
                                </li>
                            </ul>
                            <ul className="dhaka_box">
                                <li className="smae_width_1">
                                    <div className="dhaka_text">
                                        <input
                                            className="input_1"
                                            type="text"
                                            name="fromLocation"
                                            placeholder="DAC  Dhaka, Bangladesh"
                                            value={fromLocation}
                                            onChange={handleInputChange}
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
                                            value={toLocation}
                                            onChange={handleInputChange}
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
                                            value={departureDate}
                                            onChange={handleInputChange}
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
                                            value={travellerInfo}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </li>
                            </ul>
                            <ul className="search_return">
                                <li>
                                    <input
                                        className="input-elevated"
                                        type="text"
                                        name="preferredAirline"
                                        placeholder="Search Preferred Airline"
                                        value={preferredAirline}
                                        onChange={handleInputChange}
                                    />
                                </li>
                                <li>
                                    <div className="form-group">
                                        <input
                                            type="radio"
                                            id="city1"
                                            name="returnOption"
                                            value="city1"
                                            checked={returnFromCity}
                                            onChange={handleInputChange}
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
                                            checked={directFlight}
                                            onChange={handleInputChange}
                                        />
                                        <label className="ret1" htmlFor="flights">
                                            Direct Flights
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopSection;