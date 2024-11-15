import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { auth, facebook, google } from "../../config/firebase";
import { signupValidationSchema } from "../../helper/FormHelper";
import { AppDispatch } from "../../store/Store";
import { useDispatch } from "react-redux";
import { SignUpFormValues } from "../../types/authTypes";
import { AuthSignupRequest, AuthSocialRequest } from "../../store/reducers/AuthReducers";
import { signInWithPopup } from "firebase/auth";
import PhoneInput from "react-phone-input-2";


const SignUp = (): JSX.Element => {
    const [showNormalAuth, setShowNormalAuth] = useState<boolean>(false);
    const [countryCode, setCountryCode] = useState<string>('US');
    const dispatch: AppDispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const country = await getCountryFromLocation(latitude, longitude);
            if (country) {
                setCountryCode(country);
            }
        });
    }, []);

    const getCountryFromLocation = async (lat: number, lon: number) => {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyB1-EXAMPLEabcd1234EXAMPLEkey-5678EXAMPLE`);
        const data = await response.json();
        const country = data.results[0]?.address_components.find((component: { types: string | string[]; }) =>
            component.types.includes("country")
        );
        return country?.short_name;
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik<SignUpFormValues>({
        initialValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            userType: "Customer",
        },
        validationSchema: signupValidationSchema,
        onSubmit: (values) => {
            // console.log(values);
            dispatch(AuthSignupRequest({ data: values, navigate }));
        },
    });

    const socialLogin = async (provider: any) => {
        const result = await signInWithPopup(auth, provider);
        const data = {
            email: result?.user?.providerData[0]?.email,
            uid: result?.user?.providerData[0]?.uid,
            displayName: result?.user?.providerData[0]?.displayName,
            photoURL: result?.user?.providerData[0]?.photoURL,
            phoneNumber: result?.user?.providerData[0]?.phoneNumber,
            providerId: result?.user?.providerData[0]?.providerId,
            userType: "Customer",
        };
        dispatch(AuthSocialRequest({ data, navigate }));
    };

    return (
        <div className="header_sign_up">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-lg-3">
                        <div className="header_logo">
                            <Link to="/">
                                <img src="assets/images/logo.png" alt="" />
                            </Link>
                        </div>
                        <h5 className="copyright">© 2023 10 CentsAir</h5>
                    </div>
                    <div className="col-md-9 col-lg-9">
                        <div className="row box_showd">
                            <div className="col-md-6 pr_0">
                                {!showNormalAuth ? (
                                    <div className="signup_box">
                                        <div className="text_bt">
                                            <div className="text_sing">
                                                <h1>Explore the world to experience the beauty of nature</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus</p>
                                            </div>

                                            <div className="sign_social">
                                                <ul>
                                                    <li>
                                                        <Link to="#" onClick={() => socialLogin(google)}>
                                                            <img src="assets/images/social/g.png" alt="" />
                                                            <span>Continue with Google</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" onClick={() => socialLogin(facebook)}>
                                                            <img src="assets/images/social/f.png" alt="" />
                                                            <span>Continue with Facebook</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <img src="assets/images/social/a.png" alt="" />
                                                            <span>Continue with Apple</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="or_box">
                                                    <h5><span>OR</span></h5>
                                                    <Link to="#" className="sign_email" onClick={() => setShowNormalAuth(!showNormalAuth)} style={{ textDecoration: "none" }}>
                                                        Sign up with email
                                                    </Link>
                                                    <p>By signing up, you agree to the
                                                        <Link to="#">Terms of Service</Link> and
                                                        <Link to="#"> Privacy Policy,</Link> including
                                                        <Link to="#">cookie use.</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <form className="signup_box" style={{ textAlign: "left" }} onSubmit={handleSubmit}>
                                        <div className="text_bt">
                                            <div className="text_sing">
                                                <h1 className="l1">Sign Up</h1>
                                            </div>

                                            {/* Email Field */}
                                            <div className="email_tr">
                                                <input
                                                    className="email_1"
                                                    type="email"
                                                    name="email"
                                                    placeholder="  Email ID"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    style={{ border: touched.email && errors.email ? "2px solid red" : "" }}
                                                />
                                            </div>

                                            {/* Phone Number Field with Country Code */}
                                            <div className="email_tr">
                                                <PhoneInput
                                                    country={countryCode.toLowerCase()}
                                                    value={values.phone || ''}
                                                    onChange={(phone: string) => handleChange({ target: { name: 'phone', value: phone } })}
                                                    onBlur={handleBlur}
                                                    placeholder="Enter phone number"
                                                    containerClass={`phone-input-container ${touched.phone && errors.phone ? 'error-border' : ''}`}
                                                />
                                            </div>

                                            {/* First Name Field */}
                                            <div className="email_tr">
                                                <input
                                                    className="email_1"
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="  First Name"
                                                    value={values.firstName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    style={{ border: touched.firstName && errors.firstName ? "2px solid red" : "" }}
                                                />
                                            </div>

                                            {/* Last Name Field */}
                                            <div className="email_tr">
                                                <input
                                                    className="email_1"
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="  Last Name"
                                                    value={values.lastName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    style={{ border: touched.lastName && errors.lastName ? "2px solid red" : "" }}
                                                />
                                            </div>

                                            {/* Password Field */}
                                            <div className="email_tr">
                                                <input
                                                    className="email_1"
                                                    type="password"
                                                    name="password"
                                                    placeholder="  Password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    style={{ border: touched.password && errors.password ? "2px solid red" : "" }}
                                                />
                                            </div>

                                            <div className="or_box">
                                                <input className="sign_email log_ing" value="Sign Up" type="submit" />
                                            </div>

                                            <div className="mt-3">
                                                <p>By signing up, you agree to the
                                                    <Link to="#">Terms of Service</Link> and
                                                    <Link to="#"> Privacy Policy,</Link> including
                                                    <Link to="#">cookie use.</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </div>
                            <div className="col-md-6 pr_0">
                                <div className="sign_img">
                                    <img src="assets/images/sign.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;