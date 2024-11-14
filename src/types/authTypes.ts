export type TSocialLoginValues = {
    email: string | null;
    uid: string;
    displayName: string | null;
    photoURL: string | null;
    phoneNumber: string | null;
    providerId: string;
    userType: string;
    navigate?: any;
};

export type LoginFormValues = {
    email: string;
    password: string;
    navigate?: any;
};

export type SignUpFormValues = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
    userType: string;
    navigate?: any;
};

export type User = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatar: string;
    isVerified: boolean;
    userType: string;
    createdAt: string;
    updatedAt: string;
};

export type UserData = {
    user: User,
    accessToken?: string,
    refreshToken?: string,
};