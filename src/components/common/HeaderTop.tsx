import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/Store";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogoutRequest, GetSingleUserRequest } from "../../store/reducers/AuthReducers";
import { useEffect } from "react";

const HeaderTop = (): JSX.Element => {
    const _id: string | null = window.localStorage.getItem("_id");

    const dispatch: AppDispatch = useDispatch();
    const {singleUserData} = useSelector((state: RootState)=> state.authSlice)
    const navigate: NavigateFunction = useNavigate();

    const userLogout = () => {
        dispatch(AuthLogoutRequest({ navigate }));
    };
    useEffect(()=>{
        if(_id){
            dispatch(GetSingleUserRequest({userId:_id}))
        }
    },[_id, dispatch])
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
                                    {/* <li>
                                        <select className="usd_123">
                                            <option value="US">USD $ / EN</option>
                                            <option value="US">USD $ / EN</option>
                                        </select>
                                    </li> */}
                                    {_id && (
                                    <li className="usd_123">
                                      Hello, {singleUserData?.firstName} {singleUserData?.lastName}
                                    </li>

                                    )}
                                    <li>
                                        <span className="d_span">
                                            {
                                                (_id) ?
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