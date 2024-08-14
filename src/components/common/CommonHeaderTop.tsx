import { Link } from "react-router-dom";

const CommonHeaderTop = (): JSX.Element => {
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
                                        <span className="speak_img">
                                            <img src="assets/images/ellips.png" alt="" />
                                        </span>
                                        <span className="speak_1">
                                            <h5>1-646-738-4820</h5>
                                            <p>Speak to a travel expert</p>
                                        </span>
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

export default CommonHeaderTop;