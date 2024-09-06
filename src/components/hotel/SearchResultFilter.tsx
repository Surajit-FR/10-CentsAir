import { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from "react-router-dom";

const SearchResultFilter = (): JSX.Element => {
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [checkInDate, setCheckInDate] = useState<Date | null>(null);
    const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
    const [error, setError] = useState<string | null>(null);

    const checkOutRef = useRef<any>(null);

    const handleIncrement = (type: string) => {
        switch (type) {
            case 'adults':
                setAdults(adults + 1);
                break;
            case 'children':
                setChildren(children + 1);
                break;
            case 'infants':
                setInfants(infants + 1);
                break;
            default:
                break;
        }
    };

    const handleDecrement = (type: string) => {
        switch (type) {
            case 'adults':
                setAdults(Math.max(adults - 1, 0));
                break;
            case 'children':
                setChildren(Math.max(children - 1, 0));
                break;
            case 'infants':
                setInfants(Math.max(infants - 1, 0));
                break;
            default:
                break;
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCheckInSelect = (date: Date | null) => {
        if (date) {
            setCheckInDate(date);
            // Focus on the checkout date picker after check-in date is selected
            checkOutRef.current?.setFocus();
        }
    };

    const handleCheckOutSelect = (date: Date | null) => {
        if (date) {
            // Check if check-in and check-out are the same
            if (checkInDate && date.getTime() === checkInDate.getTime()) {
                setError('Check-in and check-out dates cannot be the same.'); // Set error message
            } else {
                setError(null); // Clear error message if dates are valid
                setCheckOutDate(date);
            }
        }
    };

    return (
        <>
            <div className="search_ge_1">
                <h4>Search</h4>
                <div className="preb_ft">
                    <p>Destination/Property name:</p>
                    <input className="se_1 cal_scr" type="search" name="search" defaultValue="Calgary" />
                </div>


                <div className="preb_ft">
                    <p>Check-in date</p>
                    <DatePicker
                        selected={checkInDate}
                        onSelect={handleCheckInSelect}
                        onChange={(date) => setCheckInDate(date)}
                        selectsStart
                        startDate={checkInDate as Date}
                        endDate={checkOutDate as Date}
                        monthsShown={2}
                        placeholderText="Start date"
                        className="se_1 check_f"
                    />
                </div>
                <div className="preb_ft">
                    <p>Check-out date</p>
                    <DatePicker
                        ref={checkOutRef}
                        selected={checkOutDate}
                        onSelect={handleCheckOutSelect}
                        onChange={(date) => setCheckOutDate(date)}
                        selectsEnd
                        startDate={checkInDate as Date}
                        endDate={checkOutDate as Date}
                        minDate={checkInDate as Date}
                        monthsShown={2}
                        placeholderText="End date"
                        className="se_1 check_f"
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}

                {/* Rooms/Guests Dropdown */}
                <div className="preb_ft">
                    <p>Rooms/Guests</p>
                    <div className="trav_engine">
                        <input
                            type="text"
                            id="txtTotalTravelers"
                            className="txt_Traveler se_1"
                            value={`${adults} Adult(s) • ${children} Children(s) • ${infants} Infant(s)`}
                            readOnly={true}
                            style={{ fontSize: "12px" }}
                        />
                        <div className={`trav_toggle ${isDropdownOpen ? "close" : "open"}`} onClick={toggleDropdown}>
                            <Link to="#">{isDropdownOpen ? 'Close' : 'Open'}</Link>
                        </div>
                        {isDropdownOpen && (
                            <div className="trav_form">
                                <div className="trav_item">
                                    <div className="trav_inner1">
                                        Adults
                                        <span>12+ yrs</span>
                                    </div>
                                    <div className="trav_inner2">
                                        <Link to="#" className='minus' onClick={() => handleDecrement('adults')}>-</Link>
                                        <input type="text" value={adults} id="ddlAdult" className="txt_trav" readOnly={true} />
                                        <Link to="#" className='plus' onClick={() => handleIncrement('adults')}>+</Link>
                                    </div>
                                </div>
                                <div className="trav_item">
                                    <div className="trav_inner1">
                                        Children
                                        <span>2 - 11 yrs</span>
                                    </div>
                                    <div className="trav_inner2">
                                        <Link to="#" className='minus' onClick={() => handleDecrement('children')}>-</Link>
                                        <input type="text" value={children} id="ddlChild" className="txt_trav" readOnly={true} />
                                        <Link to="#" className='plus' onClick={() => handleIncrement('children')}>+</Link>
                                    </div>
                                </div>
                                <div className="trav_item">
                                    <div className="trav_inner1">
                                        Infants
                                        <span>under 2 yrs</span>
                                    </div>
                                    <div className="trav_inner2">
                                        <Link to="#" className='minus' onClick={() => handleDecrement('infants')}>-</Link>
                                        <input type="text" value={infants} id="ddlInfant" className="txt_trav" readOnly={true} />
                                        <Link to="#" className='plus' onClick={() => handleIncrement('infants')}>+</Link>
                                    </div>
                                </div>
                                <div className="trav_item">
                                    <button className="trav_done" onClick={toggleDropdown}>Done</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="preb_ft">
                    <ul className="search_return traveling_net">
                        <li>
                            <div className="form-group">
                                <input type="radio" id="work1" name="work" />
                                <label className="ret1 for_it" htmlFor="work1">I'm traveling for work</label>
                            </div>
                        </li>
                        <li>
                            <span><i className="fa-solid fa-question"></i></span>
                        </li>
                    </ul>
                </div>

                <div className="preb_ft pb-0">
                    <input className="search_ht" type="submit" value="Search" />
                </div>
            </div>
        </>
    );
};

export default SearchResultFilter;