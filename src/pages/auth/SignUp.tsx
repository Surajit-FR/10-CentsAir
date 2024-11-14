import { useState } from "react";
import { AuthProvider, signInWithPopup } from "firebase/auth";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { auth, google } from "../../config/firebase";
import { signupValidationSchema } from "../../helper/FormHelper";
import { useFormik } from "formik";
import { AppDispatch } from "../../store/Store";
import { useDispatch } from "react-redux";
import { LoginFormValues, SignUpFormValues } from "../../types/authTypes";
import ReusableInput from "../../components/core/input/ReusableInput";

type InputFields = {
    name: string;
    type: string;
    placeholder: string;
    label: string;
};

const SignUp = (): JSX.Element => {
    const [showNormalAuth, setShowNormalAuth] = useState<boolean>(false);
    const dispatch: AppDispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();

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
            console.log(values);
            // dispatch(authRequest({ data: values, navigate }));
        },
    });

    const inputFields: Array<InputFields> = [
        {
            name: "email",
            type: "email",
            placeholder: "  Email ID",
            label: "",
        },
        {
            name: "phone",
            type: "text",
            placeholder: "  Phone Number",
            label: "",
        },
        {
            name: "firstName",
            type: "text",
            placeholder: "  First Name",
            label: "",
        },
        {
            name: "lastName",
            type: "text",
            placeholder: "  Last Name",
            label: "",
        },
        {
            name: "password",
            type: "password",
            placeholder: "  Password",
            label: "",
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

        console.log(data);
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
                                    {
                                        !showNormalAuth ?
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
                                                                <Link to="#">
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
                                                            <Link
                                                                to="#"
                                                                className="sign_email"
                                                                onClick={() => setShowNormalAuth(!showNormalAuth)}
                                                                style={{ textDecoration: "none" }}
                                                            >
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
                                            :
                                            <form className="signup_box" style={{ textAlign: "left" }} onSubmit={handleSubmit}>
                                                <div className="text_bt">
                                                    <div className="text_sing">
                                                        <h1 className="l1">Sign Up</h1>
                                                    </div>
                                                    {inputFields.map((field, index) => (
                                                        <div key={index} className="email_tr">
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
                                                                component="signup"
                                                            />
                                                        </div>
                                                    ))}
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
                                    }

                                </div>
                                <div className="col-md-6 pr_0">
                                    <div className="sign_img">
                                        <img src="assets/images/sign.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
};

export default SignUp;