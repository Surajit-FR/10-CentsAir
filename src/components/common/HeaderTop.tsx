import { Link } from "react-router-dom";

const HeaderTop = (): JSX.Element => {
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
                                        <span className="speak_img">
                                            <img src="assets/images/ellips.png" alt="" />
                                        </span>
                                        <span className="speak_1">
                                            <h5>1-646-738-4820</h5>
                                            <p>Speak to a travel expert</p>
                                        </span>
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
                                            <Link to="/login">LogIn</Link>
                                            <span className="mx-1">/</span>
                                            <Link to="/signup">SignUp</Link>
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