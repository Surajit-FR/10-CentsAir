import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store/Store";
import { useDispatch } from "react-redux";
import { AuthLogoutRequest } from "../../store/reducers/AuthReducers";

const HeaderTop = (): JSX.Element => {
    const accessToken: string | null = window.localStorage.getItem("accessToken");
    const refreshToken: string | null = window.localStorage.getItem("refreshToken");

    const dispatch: AppDispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();

    const userLogout = () => {
        dispatch(AuthLogoutRequest({ navigate }));
    };

    return (
        <>
            <div className="header_top">
                <div className="container-fluid">
                    <nav>
                        <div className="navbar">
                            <i className='bx bx-menu'></i>
                            <div className="logo">
                                <Link to="#">
                                    <img src="assets/images/logo.png" alt="" />
                                </Link>
                            </div>
                            <div className="nav-links">
                                <div className="sidebar-logo">
                                    <span className="logo-name">
                                        <img src="assets/images/logo.png" alt="" />
                                    </span>
                                    <i className='bx bx-x'></i>
                                </div>
                                <ul className="links">
                                    <li className="active"><Link to="#">Home</Link></li>
                                    <li><Link to="#">Discover</Link></li>
                                    <li><Link to="#">Special Deals</Link></li>
                                </ul>
                            </div>
                            <div className="search-box">
                                <ul className="s_box">
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
                                        <select className="usd_123">
                                            <option value="US">USD $ / EN</option>
                                            <option value="US">USD $ / EN</option>
                                        </select>
                                    </li>
                                    <li>
                                        <select className="usd_123">
                                            <option value="Help">Help</option>
                                            <option value="Help">Help</option>
                                        </select>
                                    </li>
                                    <li>
                                        <span className="d_span">
                                            {
                                                (accessToken && refreshToken) ?
                                                    <Link to="#" onClick={userLogout}>Log Out</Link>
                                                    :
                                                    <>
                                                        <Link to="/login">LogIn</Link>
                                                        <span className="mx-1">/</span>
                                                        <Link to="/signup">SignUp</Link>
                                                    </>
                                            }

                                        </span>
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

export default HeaderTop;