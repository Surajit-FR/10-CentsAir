import * as Yup from 'yup';

// togglePasswordVisibility function
export const togglePasswordVisibility = (passwordVisible: boolean, setPasswordVisible: Function) => {
    setPasswordVisible(!passwordVisible);
};

// login validation
export const loginValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email ID is required'),
    password: Yup.string().required('Password is required'),
});

// signup validation
export const signupValidationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    phone: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email address').required('Email ID is required'),
    password: Yup.string().required('Password is required'),
});