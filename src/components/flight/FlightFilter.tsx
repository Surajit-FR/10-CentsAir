import { useState } from "react";
import { Link } from "react-router-dom";

interface Filterprops {
    setOutboundWindow: React.Dispatch<React.SetStateAction<string>>
    setInBoundWindow: React.Dispatch<React.SetStateAction<string>>
    setOutboundflightstops: React.Dispatch<React.SetStateAction<number | string>>
    totalFlights: number
    outboundflightstops: string| number
}

const StopFilter = [
    {label:"2 stops", value: 2},
    {label:"1 stop", value: 1},
    {label:"Non- Stop", value: 0},
]
const timeFilters = [
    {
        label:"Morning 6 AM - 12",value:"06001200", id: '1'
    },
    {
        label:"Noon 12 PM - 6",value:"12001800", id: '2'
    },
    {
        label:"Evening 6 PM - 12",value:"18000000", id: '3'
    },
    {
        label:"Night 12 AM - 6",value:"00000600", id: '4'
    },
]
const FlightFilter = ({setOutboundWindow, setInBoundWindow, setOutboundflightstops,totalFlights, outboundflightstops}:Filterprops): JSX.Element => {
    const [activeAirlines, setActiveAirlines] = useState<boolean>(false);

    return (
        <>
            <div className="col-md-4 col-lg-3">
                <div className="filter_text_1">
                    {/* <Link className="fa_bell1" to="#"><i className="fa-solid fa-bell"></i> Get Fare Alerts</Link> */}
                    <div className="filter_2">
                        <h4>Filter Your Results</h4>
                        <p>{totalFlights} results found</p>
                    </div>
                    <div className="step_1 filter_2">
                        <h4 className="mb-2">Stops</h4>
                        {StopFilter.map(stop=>(
                            <ul key={stop.value}>
                            <li onClick={()=> setOutboundflightstops(stop.value)}>{stop.label}</li>
                        </ul>
                        ))}
                        
                    </div>
                    <div className="step_1 filter_2 pb-2">
                        <h4 className="mb-2">Departure Flight Slot Times</h4>
                        <ul className="morn_12">
                            {timeFilters.map(time=>(
                                <li key={time.id} onClick={()=>setOutboundWindow(time.value)}>{time.label}</li>

                            ))}
                        </ul>
                    </div>
                    <div className="step_1 filter_2 pb-2">
                        <h4 className="mb-2">Arrival Flight Slot Times</h4>
                        <ul className="morn_12">
                        {timeFilters.map(time=>(
                                <li key={time.id} onClick={()=>setInBoundWindow(time.value)}>{time.label}</li>

                            ))}
                        </ul>
                    </div>
                    {/* <div className="step_1 filter_2 pb-3">
                        <h4>Flight Times</h4>
                        <div className="going_1">
                            <h5>Going to Alberta (YYC)</h5>
                            <p>Depart: 1:00 am - 11:45 pm</p>
                            <span className="pr_slider1"></span>
                        </div>
                        <div className="going_1 mt-3 mb-2">
                            <h5>Returning to Dhaka (DAC)</h5>
                            <p>Return: 12:45 am - 9:00 pm</p>
                        </div>
                        <Link className="show_bt" to="#"><i className="fa-solid fa-angle-down"></i> Show Arrival
                            Times</Link>
                    </div>
                    <div className="step_1 filter_2">
                        <h4 className="mb-0">Duration</h4>
                        <div className="going_1">
                            <h5>Going to Alberta (YYC)</h5>
                            <p>Layover Duration :up to 27h 00m</p>
                            <span className="pr_slider1"></span>
                        </div>
                        <div className="going_1 mt-3 mb-2">
                            <h5>Returning to Dhaka (DAC)</h5>
                            <p>Layover Duration up to 29h 45m</p>
                        </div>
                        <Link className="show_bt" to="#"><img src="assets/images/show/pseudo.png" alt="" /> Show Total Durations</Link>
                    </div>
                    <div className="step_1">
                        <ul className="search_return de_get">
                            <li>
                                <div className="form-group">
                                    <input type="radio" id="depart1" name="depart1" />
                                    <label className="ret1 g_tr" htmlFor="depart1">
                                        Same Depart/Return Airport
                                        <span className="sd_top">USD 1,937<em className="b_rt">.99</em></span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="step_1 f1_w filter_2">
                        <h5 className="mb-2 mt-2">Departing from</h5>
                        <ul className="search_return mb-3 fr_12">
                            <li>
                                <div className="form-group">
                                    <input type="radio" id="depart_1" name="depart2" />
                                    <label className="ret1 de_1" htmlFor="depart_1">
                                        DAC - Dhaka
                                        <span className="rights_12">USD 1,937<em className="bw_rt">.99</em></span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                        <h5 className="mb-2">Arriving at</h5>
                        <ul className="search_return mb-0 fr_12">
                            <li>
                                <div className="form-group">
                                    <input type="radio" id="depart_2" name="depart2" />
                                    <label className="ret1 de_1" htmlFor="depart_2">
                                        YYC - Calgary
                                        <span className="rights_12">USD 1,937<em className="bw_rt">.99</em></span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="step_1 filter_2">
                        <h4 className="mb-2">Connecting in</h4>
                        <ul className="bomr_q1">
                            <li>BOM - Mumbai</li>
                            <li>LHR - London Heathrow</li>
                            <li>FRA - Frankfurt</li>
                        </ul>
                        <Link className="show_bt" to="#"><i className="fa-solid fa-angle-down"></i> Show all
                            connecting</Link>
                    </div> */}

                    <div className="step_1 filter_2">
                        <h4 className="mb-1">Airlines</h4>
                        {/* <ul className="by_airline"> */}
                            {/* <li className={`tab-link ${!activeAirlines ? "current" : ""}`} data-tab="tab-11" onClick={() => setActiveAirlines(false)}>By Airline</li> */}
                            {/* <li className={`tab-link ${activeAirlines ? "current" : ""}`} data-tab="tab-12" onClick={() => setActiveAirlines(true)}>By Alliances</li> */}
                            {/* <div className="clearfix"></div>
                        </ul> */}
                        <div id="tab-11" className={`tab-content v_mat_top ${!activeAirlines ? "current" : ""}`}>
                            <ul className="duis_1">
                                <li>
                                    <div className="air_1">
                                    <input type="checkbox" name="" id="" />
                                        <h5>Air Canada <span className="w_t5">(with others)</span></h5>
                                    </div>
                                    <div className="air_2">
                                        <h6>USD 1,937 <span className="er_1">.99</span></h6>
                                    </div>
                                    <div className="clearfix"></div>
                                </li>
                                <li>
                                    <div className="air_1">
                                    <input type="checkbox" name="" id="" />
                                        <h5>Air India <span className="w_t5">(with others)</span></h5>
                                    </div>
                                    <div className="air_2">
                                        <h6>USD 2,937 <span className="er_1">.99</span></h6>
                                    </div>
                                    <div className="clearfix"></div>
                                </li>
                                <li>
                                    <div className="air_1">
                                    <input type="checkbox" name="" id="" />
                                        <h5>Alaska Airlines <span className="w_t5">(with others)</span></h5>
                                    </div>
                                    <div className="air_2">
                                        <h6>USD 2,460 <span className="er_1">.99</span></h6>
                                    </div>
                                    <div className="clearfix"></div>
                                </li>
                                <li>
                                    <div className="air_1">
                                    <input type="checkbox" name="" id="" />
                                        <h5>American <span className="w_t5">Airlines</span></h5>
                                    </div>
                                    <div className="air_2">
                                        <h6>USD 2,450 <span className="er_1">.99</span></h6>
                                    </div>
                                    <div className="clearfix"></div>
                                </li>
                                <li>
                                    <div className="air_1">
                                    <input type="checkbox" name="" id="" />
                                        <h5>American Airlines <span className="w_t5">(with others)</span></h5>
                                    </div>
                                    <div className="air_2">
                                        <h6>USD 2,101 <span className="er_1">.99</span></h6>
                                    </div>
                                    <div className="clearfix"></div>
                                </li>
                            </ul>
                        </div>
                        <div id="tab-12" className={`tab-content v_mat_top ${activeAirlines ? "current" : ""}`}>
                            gour
                        </div>
                        {/* <Link className="show_bt" to="#"><i className="fa-solid fa-angle-down"></i> Show all airlines</Link> */}
                        <Link className="clear_all" to="#">Clear All Filters</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlightFilter;