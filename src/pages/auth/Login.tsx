import { useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { loginValidationSchema, togglePasswordVisibility } from "../../helper/FormHelper";
import { useFormik } from "formik";
import ReusableInput from "../../components/core/input/ReusableInput";
import { LoginFormValues } from "../../types/authTypes";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/Store";
import { AuthProvider, signInWithPopup } from "firebase/auth";
import { auth, google } from "../../config/firebase";
import { AuthLoginRequest, AuthSocialRequest } from "../../store/reducers/AuthReducers";

type InputFields = {
    name: string;
    type: string;
    placeholder: string;
    label: string;
};

const Login = (): JSX.Element => {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const dispatch: AppDispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik<LoginFormValues>({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values) => {
            dispatch(AuthLoginRequest({ data: values, navigate }));
        },
    });

    const inputFields: Array<InputFields> = [
        {
            name: "email",
            type: "email",
            placeholder: "Enter Your Email ID",
            label: "Email",
        },
        {
            name: "password",
            type: passwordVisible ? "text" : "password",
            placeholder: "Enter Your Password",
            label: "Password",
        },
    ];

    const socialLogin = async (provider: AuthProvider) => {
        const result = await signInWithPopup(auth, provider);
        const data = {
            email: result?.user?.providerData[0]?.email,
            uid: result?.user?.providerData[0]?.uid,
            displayName: result?.user?.providerData[0]?.displayName,
            photoURL: result?.user?.providerData[0]?.photoURL,
            phoneNumber: result?.user?.providerData[0]?.phoneNumber,
            providerId: result?.user?.providerData[0]?.providerId,
            userType: "Customer"
        };
        // console.log(data);
        dispatch(AuthSocialRequest({ data, navigate }));
    };

    return (
        <>
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
                                    <form className="signup_box" onSubmit={handleSubmit}>
                                        <div className="text_bt">
                                            <div className="text_sing">
                                                <h1 className="l1">Log In</h1>
                                            </div>
                                            {inputFields.map((field, index) => (
                                                <div key={index} className="email_tr">
                                                    <p>{field.label}</p>
                                                    <ReusableInput
                                                        className="email_1"
                                                        type={field.type}
                                                        name={field.name}
                                                        placeholder={field.placeholder}
                                                        value={values[field.name as keyof LoginFormValues] || ""}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        touched={touched[field.name as keyof LoginFormValues] as boolean}
                                                        error={errors[field.name as keyof LoginFormValues] as string}
                                                    />
                                                    {field.name === "password" && (
                                                        <span
                                                            className={`fa ${passwordVisible ? "fa-eye-slash" : "fa-eye"} fet_eye`}
                                                            onClick={() => togglePasswordVisibility(passwordVisible, setPasswordVisible)}
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            <em>{passwordVisible ? "Hide" : "Show"}</em>
                                                        </span>
                                                    )}
                                                </div>
                                            ))}
                                            <div className="email_tr">
                                                <div className="d-flex justify-content-between">
                                                    <Link to="/signup" className="forgot">Don't Have Account? Please Sign Up</Link>
                                                    <Link to="#" className="forgot">Forgot password?</Link>
                                                </div>
                                            </div>
                                            <div className="or_box">
                                                <input className="sign_email log_ing" type="submit" value="Log In" />
                                            </div>
                                            <div className="or_text">
                                                <h4>Or</h4>
                                            </div>

                                            <ul className="social_midea">
                                                <li>
                                                    <Link to="#"
                                                        onClick={() => socialLogin(google)}
                                                    >
                                                        <i className="fa-brands fa-google" style={{ color: "#FFC000" }}></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-brands fa-facebook-f" style={{ color: "#005eff" }}></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-brands fa-apple" style={{ color: "#000000" }}></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </form>
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
        </>
    );
};

export default Login;