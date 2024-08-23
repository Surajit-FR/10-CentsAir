import { Link } from 'react-router-dom';

const AircraftSeats = ({ handleSelectSeats }: { handleSelectSeats: React.MouseEventHandler }): JSX.Element => {
    return (
        <>
            <div className="air_craft mb-5">
                <div className="kevin_vo">
                    <Link to="#">
                        <span className="k_q1">
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <div className="vo_1">
                            <p>Kevin Vo</p>
                            <p>---</p>
                        </div>
                    </Link>
                </div>
                <div className="aircraft_box">
                    <div className="aircraft-body">

                        <div className="seats">
                            <div className="exit_1">
                                <Link className="exit_button" to="#">EXIT</Link>
                                <Link className="exit_button" to="#">EXIT</Link>
                            </div>

                            <div className="seats-triple first-line">
                                <div data-letter="F" className="active seat" onClick={handleSelectSeats}>
                                </div>
                                <div data-letter="E" className="active seat" onClick={handleSelectSeats}>
                                </div>
                                <div data-letter="D" className="active seat" onClick={handleSelectSeats}>
                                </div>
                            </div>
                            <div className="seats-triple first-line">
                                <div className="active seat" onClick={handleSelectSeats}>
                                </div>
                                <div className="active seat" onClick={handleSelectSeats}>
                                </div>
                                <div className="active seat" onClick={handleSelectSeats}>
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat" onClick={handleSelectSeats}>
                                </div>
                                <div className="seat empty" onClick={handleSelectSeats}>
                                </div>
                                <div className="seat" onClick={handleSelectSeats}>
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat">
                                </div>
                                <div className="seat">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat">
                                </div>
                                <div className="seat">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat empty">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat empty">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat empty">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat empty">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat empty">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat empty">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat empty">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat empty">
                                </div>
                            </div>
                            <div className="seats-triple">
                                <div className="seat empty">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>

                            <div className="ke_chaen">
                                <ul>
                                    <li>
                                        <img src="assets/images/flag/men.png" alt="" />
                                    </li>
                                    <li>
                                        <img src="assets/images/flag/k1.png" alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="seats">
                            <div className="seats-triple first-line" data-line="7">
                                <div data-letter="C" className="active seat">
                                </div>
                                <div data-letter="B" className="active seat">
                                </div>
                                <div data-letter="A" className="active seat">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="8">
                                <div className="active seat">
                                </div>
                                <div className="active seat">
                                </div>
                                <div className="active seat">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="9">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="10">
                                <div className="seat">
                                </div>
                                <div className="seat">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="11">
                                <div className="seat">
                                </div>
                                <div className="seat">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="12">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="13">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="14">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="15">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="16">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="17">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="18">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="19">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="20">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="21">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="22">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="23">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="24">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="25">
                                <div className="seat empty">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat empty">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="26">
                                <div className="seat empty">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat empty">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="27">
                                <div className="seat empty">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat empty">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="28">
                                <div className="seat">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat empty">
                                </div>
                            </div>
                            <div className="seats-triple first-line" data-line="29">
                                <div className="seat empty">
                                </div>
                                <div className="seat empty">
                                </div>
                                <div className="seat empty">
                                </div>
                            </div>
                            <div className="exit_bottom">
                                <Link className="exit_button" to="#">EXIT</Link>
                                <Link className="exit_button" to="#">EXIT</Link>
                            </div>
                            <div className="ke_chaen chaen_12">
                                <ul>
                                    <li>
                                        <img src="assets/images/flag/men.png" alt="" />
                                    </li>
                                    <li>
                                        <img src="assets/images/flag/k1.png" alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AircraftSeats;