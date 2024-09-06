import { Link } from "react-router-dom";
import SearchResultFilter from "./SearchResultFilter";
import { useState } from "react";

const HotelSearchLeftSection = (): JSX.Element => {
    const [counts, setCounts] = useState<{ bedroom: number; bathroom: number }>({ bedroom: 0, bathroom: 0 });

    const updateCount = (type: 'bedroom' | 'bathroom', action: 'increase' | 'decrease') => {
        setCounts(prevCounts => {
            const updatedCounts = { ...prevCounts };

            if (type === 'bedroom') {
                if (action === 'increase') {
                    updatedCounts.bedroom += 1;
                } else if (action === 'decrease' && updatedCounts.bedroom > 0) {
                    updatedCounts.bedroom -= 1;
                }
            } else if (type === 'bathroom') {
                if (action === 'increase') {
                    updatedCounts.bathroom += 1;
                } else if (action === 'decrease' && updatedCounts.bathroom > 0) {
                    updatedCounts.bathroom -= 1;
                }
            }

            return updatedCounts;
        });
    };

    return (
        <>
            <div className="col-lg-3 col-md-4">
                {/* SearchResultFilter */}
                <SearchResultFilter />

                <div className="popular_filters_w12">
                    <h4>Filter by:</h4>
                    <div className="cp_d">
                        <h5>Your Budget (per night)</h5>
                        <h6>$20 – $300+</h6>
                        <div className="text-center">
                            <img src="assets/images/icon/bar.png" alt="" />
                        </div>
                    </div>
                    <div className="cp_d">
                        <h4 className="pl_0">Popular Filters</h4>
                        <ul>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">Free cancellation</span>
                                <span className="che_p1">174</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">No prepayment</span>
                                <span className="che_p1">93</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Less than 1/2 mile
                                    <p>Distance from center of Calgary</p>
                                </span>
                                <span className="che_p1">17</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">Hotels</span>
                                <span className="che_p1">86</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">Breakfast Included</span>
                                <span className="che_p1">70</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">5 stars</span>
                                <span className="che_p1">3</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">Calgary Stampede</span>
                                <span className="che_p1">21</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">Downtown Calgary</span>

                                <span className="che_p1">45</span>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="cp_d">
                        <h4 className="pl_0">Sustainability</h4>
                        <ul>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Travel Sustainable properties
                                    <p>Properties taking steps to make your stay more sustainable</p>
                                </span>
                                <span className="che_p1">90</span>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="cp_d">
                        <h4 className="pl_0 pb-0">Property rating</h4>
                        <p className="rat_i1">Includes stars and other ratings</p>
                        <ul>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    2 stars
                                </span>
                                <span className="che_p1">10</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    3 stars
                                </span>
                                <span className="che_p1">62</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    4 stars
                                </span>
                                <span className="che_p1">80</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    5 stars
                                </span>
                                <span className="che_p1">3</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Unrated
                                </span>
                                <span className="che_p1">35</span>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="cp_d">
                        <h4 className="pl_0">Distance from center of Calgary</h4>
                        <ul>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Less than 1/2 mile
                                </span>
                                <span className="che_p1">17</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Less than 1 mile
                                </span>
                                <span className="che_p1">42</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Less than 2 miles
                                </span>
                                <span className="che_p1">54</span>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="cp_d">
                        <h4 className="pl_0">Fun Things To Do</h4>
                        <ul>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Fitness center
                                </span>
                                <span className="che_p1">85</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Indoor pool
                                </span>
                                <span className="che_p1">57</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Fitness
                                </span>
                                <span className="che_p1">57</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Hot tub/Jacuzzi
                                </span>
                                <span className="che_p1">48</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Golf course (within 2 miles)
                                </span>
                                <span className="che_p1">35</span>
                                <div className="clearfix"></div>
                            </li>

                        </ul>
                    </div>
                    <div className="cp_d">
                        <h4 className="pl_0">Reservation policy</h4>
                        <ul>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Free cancellation
                                </span>
                                <span className="che_p1">174</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    No prepayment
                                </span>
                                <span className="che_p1">93</span>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="cp_d">
                        <h4 className="pl_0">Meals</h4>
                        <ul>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Kitchen amenities
                                </span>
                                <span className="che_p1">116</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Breakfast Included
                                </span>
                                <span className="che_p1">70</span>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="cp_d">
                        <h4 className="pl_0">Property Type</h4>
                        <ul>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Entire homes & apartments
                                </span>
                                <span className="che_p1">138</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Hotels
                                </span>
                                <span className="che_p1">86</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Apartments
                                </span>
                                <span className="che_p1">56</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Vacation Homes
                                </span>
                                <span className="che_p1">23</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Guesthouses
                                </span>
                                <span className="che_p1">11</span>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                        <Link className="show_nine" to="#">Show all 9 <i className="fa-regular fa-angle-down"></i></Link>
                    </div>

                    <div className="cp_d">
                        <h4 className="pl_0">Number of bedrooms</h4>
                        <ul className="bedrooms_12">
                            <li>
                                <span className="less_2">Bedrooms</span>
                                <span className="che_p1">
                                    <div className="plus_minus_q1">
                                        <Link
                                            to="#"
                                            className="dec qty-button"
                                            onClick={() => updateCount('bedroom', 'decrease')}
                                        >-</Link>
                                        <input
                                            className="input-text qty text"
                                            type="number"
                                            min="0"
                                            value={counts.bedroom}
                                            readOnly
                                        />
                                        <Link
                                            to="#"
                                            className="inc qty-button"
                                            onClick={() => updateCount('bedroom', 'increase')}
                                        >+</Link>
                                    </div>
                                </span>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="cp_d">
                        <h4 className="pl_0">Private bathrooms</h4>
                        <ul className="bedrooms_12">
                            <li>
                                <span className="less_2">Bathrooms</span>
                                <span className="che_p1">
                                    <div className="plus_minus_q1">
                                        <Link
                                            to="#"
                                            className="dec qty-button"
                                            onClick={() => updateCount('bathroom', 'decrease')}
                                        >-</Link>
                                        <input
                                            className="input-text qty text"
                                            type="number"
                                            min="0"
                                            value={counts.bathroom}
                                            readOnly
                                        />
                                        <Link
                                            to="#"
                                            className="inc qty-button"
                                            onClick={() => updateCount('bathroom', 'increase')}
                                        >+</Link>
                                    </div>
                                </span>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                    </div>

                    <div className="cp_d">
                        <h4 className="pl_0">Landmarks</h4>
                        <ul>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Calgary Tower
                                </span>
                                <span className="che_p1">38</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Calgary Stampede
                                </span>
                                <span className="che_p1">21</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Heritage Park
                                </span>
                                <span className="che_p1">2</span>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="cp_d">
                        <h4 className="pl_0">Bed Preference</h4>
                        <ul>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Twin beds
                                </span>
                                <span className="che_p1">1</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Double bed
                                </span>
                                <span className="che_p1">187</span>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="cp_d">
                        <h4 className="pl_0">Review Score</h4>
                        <ul>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Wonderful: 9+
                                </span>
                                <span className="che_p1">46</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Very Good: 8+
                                </span>
                                <span className="che_p1">121</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Good: 7+
                                </span>
                                <span className="che_p1">154</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Pleasant: 6+
                                </span>
                                <span className="che_p1">166</span>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="cp_d">
                        <h4 className="pl_0">Amenities</h4>
                        <ul>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Free WiFi
                                </span>
                                <span className="che_p1">184</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Parking
                                </span>
                                <span className="che_p1">178</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Non-smoking rooms
                                </span>
                                <span className="che_p1">142</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Family rooms
                                </span>
                                <span className="che_p1">93</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    24-hour front desk
                                </span>
                                <span className="che_p1">90</span>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                        <Link className="show_nine" to="#">Show all 14 <i className="fa-regular fa-angle-down"></i></Link>
                    </div>
                    <div className="cp_d">
                        <h4 className="pl_0">Room amenities</h4>
                        <ul>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Executive lounge access
                                </span>
                                <span className="che_p1">6</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Washing machine
                                </span>
                                <span className="che_p1">86</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Private bathroom
                                </span>
                                <span className="che_p1">138</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Socket near the bed
                                </span>
                                <span className="che_p1">84</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Private pool
                                </span>
                                <span className="che_p1">2</span>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                        <Link className="show_nine" to="#">Show all 25 <i className="fa-regular fa-angle-down"></i></Link>
                    </div>
                    <div className="cp_d">
                        <h4 className="pl_0">Neighborhood</h4>
                        <ul>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Southwest Calgary
                                </span>
                                <span className="che_p1">19</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Downtown Calgary
                                </span>
                                <span className="che_p1">45</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Northeast Calgary
                                </span>
                                <span className="che_p1">47</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Beltline
                                </span>
                                <span className="che_p1">20</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    University of Calgary District
                                </span>
                                <span className="che_p1">6</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Seton
                                </span>
                                <span className="che_p1">3</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Kensington
                                </span>
                                <span className="che_p1">1</span>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="cp_d">
                        <h4 className="pl_0">Brands</h4>
                        <ul>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Holiday Inn Express
                                </span>
                                <span className="che_p1">5</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Comfort Inn
                                </span>
                                <span className="che_p1">4</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Sandman Hotel Group
                                </span>
                                <span className="che_p1">4</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Best Western Plus
                                </span>
                                <span className="che_p1">4</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Days Inn
                                </span>
                                <span className="che_p1">3</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Holiday Inn Hotels & Resorts
                                </span>
                                <span className="che_p1">3</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Courtyard by Marriott
                                </span>
                                <span className="che_p1">3</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Residence Inn
                                </span>
                                <span className="che_p1">3</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Super 8
                                </span>
                                <span className="che_p1">3</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Hampton Inn
                                </span>
                                <span className="che_p1">3</span>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                        <Link className="show_nine" to="#">Show all 20 <i className="fa-regular fa-angle-down"></i></Link>
                    </div>
                    <div className="cp_d">
                        <h4 className="pl_0">Property Accessibility</h4>
                        <ul>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Wheelchair accessible
                                </span>
                                <span className="che_p1">39</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Toilet with grab rails
                                </span>
                                <span className="che_p1">28</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Raised toilet
                                </span>
                                <span className="che_p1">23</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Lowered sink
                                </span>
                                <span className="che_p1">21</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Bathroom emergency cord
                                </span>
                                <span className="che_p1">6</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Visual aids (Braille)
                                </span>
                                <span className="che_p1">16</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Visual aids (tactile signs)
                                </span>
                                <span className="che_p1">9</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Auditory guidance
                                </span>
                                <span className="che_p1">9</span>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="cp_d">
                        <h4 className="pl_0">Room Accessibility</h4>
                        <ul>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Entire unit located on ground floor
                                </span>
                                <span className="che_p1">25</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Upper floors accessible by elevator
                                </span>
                                <span className="che_p1">54</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Entire unit wheelchair accessible
                                </span>
                                <span className="che_p1">24</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Toilet with grab rails
                                </span>
                                <span className="che_p1">18</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Adapted bath
                                </span>
                                <span className="che_p1">12</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Roll-in shower
                                </span>
                                <span className="che_p1">19</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Walk-in shower
                                </span>
                                <span className="che_p1">36</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Raised toilet
                                </span>
                                <span className="che_p1">19</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Lower sink
                                </span>
                                <span className="che_p1">11</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Emergency cord in bathroom
                                </span>
                                <span className="che_p1">21</span>
                                <div className="clearfix"></div>
                            </li>
                            <li>
                                <span className="che_w1"><i className="fa-solid fa-circle-check"></i></span>
                                <span className="less_2">
                                    Shower chair
                                </span>
                                <span className="che_p1">11</span>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                    </div>
                    <iframe
                        className="map_side_12"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777592.2427921807!2d-125.88369362375158!3d47.16779461802981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485e5ffe7c3b0f9%3A0x944278686c5ff3ba!2sWashington%2C%20USA!5e0!3m2!1sen!2sin!4v1725435372416!5m2!1sen!2sin"
                        style={{ border: "0" }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="map"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default HotelSearchLeftSection;