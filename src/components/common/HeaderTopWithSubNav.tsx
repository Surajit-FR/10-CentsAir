import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderTopWithSubNav = (): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <>
            <div className="header_top">
                <div className="container-fluid">
                    <nav>
                        <div className="navbar">
                            <i className="fa-solid bx bx-menu fa-bars"></i>
                            <div className="logo">
                                <Link to="/">
                                    <img src="assets/images/logo.png" alt="" />
                                </Link>
                            </div>

                            <div className="search-box">
                                <i className='bx bx-search'></i>
                                <ul className="s_box">
                                    <li>
                                        <Link className="wishlist_12" to="/">
                                            <i className="fa-regular fa-heart"></i>
                                            Wishlist
                                        </Link>
                                    </li>
                                    <li>
                                        <button className="bu_tton_12" data-bs-toggle="modal" data-bs-target="#SpeakTravelExpertModal">
                                            <span className="speak_img">
                                                <img src="assets/images/ellips.png" alt="" />
                                            </span>
                                            <span className="speak_1">
                                                <h5>1-646-738-4820</h5>
                                                <p>Speak to a travel expert</p>
                                            </span>
                                        </button>
                                    </li>

                                    <li>
                                        <span className="d_span">
                                            <Link to="/login">LogIn</Link>
                                            <span className="mx-1">/</span>
                                            <Link to="/signup">SignUp</Link>
                                        </span>
                                    </li>
                                </ul>
                                <ul className="buttom_menu">
                                    <li>
                                        <Link
                                            className={activeIndex === 0 ? "active" : ""}
                                            to="#"
                                            onClick={() => handleClick(0)}
                                        >Accomodations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={activeIndex === 1 ? "active" : ""}
                                            to="#"
                                            onClick={() => handleClick(1)}
                                        >Deals
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={activeIndex === 2 ? "active" : ""}
                                            to="#"
                                            onClick={() => handleClick(2)}
                                        >Manage Bookings
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default HeaderTopWithSubNav;