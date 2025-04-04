import { CallEffect, PutEffect, SelectEffect, TakeEffect } from "redux-saga/effects";
import { UserData, User } from "./authTypes";

export type ReusableInputProps = {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onBlur: React.FocusEventHandler<HTMLInputElement>;
    touched?: boolean;
    error?: string;
    className?: string;
    component?: string;
}
export type HereSectionData = {
    title: string;
    description: string
}
export type FoundDeal = {
    destination: string;
    route: string;
    dates: string;
    price: string;
    imageUrl: string;
    similarTripText: string;
}
export type CarouselItem = {
    imageUrl: string;
    rank?: string;
    title?: string;
    destination?: string;
    price?: string;
}
export type Deal = {
    id: number;
    city: string;
    airportCode: string;
    dates: string;
    price: string;
    tripType: string;
    imageUrl: string;
}
export type TabData = {
    id: string;
    icon: string;
    altIcon: string;
    title: string;
    content: JSX.Element;
}
export type Pagination = {
    pageCount: number;
    pageNumber: number;
    changePage: (data: { selected: number }) => void;
}
export type FlightItemsType = {
    imageSrc: string;
    stops: string;
    airline: string;
    duration: string;
    departureTime: string;
    arrivalTime: string;
    departureAirport: string;
    arrivalAirport: string;
    price: string
};
export type RecommendationsItemsType = {
    icon: string;
    title: string;
    price: string;
    image: string;
};
export type DepartureArrivalTime = {
    time: string;
    location: string;
    note?: string;
}
export type FlightOption = {
    id: string;
    details: {
        images: Array<string>;
        stops: Array<{ airline: string; additional: string }>;
        durations: Array<string>;
        times: Array<{
            departure: { time: string; airport: string };
            arrival: { time: string; airport: string; nextDay?: boolean; plusDays?: number };
        }>;
        price: string;
        paymentPlan: string;
        additionalInfo: Array<{ icon: string; text: string }>;
    };
    links: {
        selectDeparture: string;
        selectReturn: string;
        book: string;
        learnMore: string;
        flightDetails: string;
        fareRules: string;
    };
}
export type FlightData = {
    images: Array<string>;
    stops: Array<{
        airline: string;
        additional: string;
    }>;
    durations: Array<string>;
    times: Array<{
        departure: {
            time: string;
            airport: string;
        };
        arrival: {
            time: string;
            airport: string;
            nextDay?: boolean;
            plusDays?: number;
        };
    }>;
    price: string;
    paymentPlan: string;
    additionalInfo: Array<{
        icon: string;
        text: string;
    }>;
};
export type FlightDataTwo = {
    id: string;
    isActive: boolean;
    flightNumber: string;
    route: string;
    imgSrc: string;
};
export type MealOne = {
    id: string;
    imageSrc: string;
    description: string;
    price: string;
};
export type BaggageOption = {
    id: string;
    weight: string;
    description: string;
    price: string;
};

export type Hotel = {
    image: string;
    name: string;
    location: string;
    distance: string;
    sustainableLevel: string;
    roomType: string;
    bedType: string;
    breakfastIncluded: boolean;
    freeCancellation: boolean;
    noPrepayment: boolean;
    rating: number;
    reviewCount: number;
    totalPrice: number;
    taxesAndCharges: number;
    availabilityMessage?: string;
};

export type DataState = {
    authData?: Partial<UserData>,
    error: string | null,
    type: string,
    singleUserData?: Partial<User>;
};

export type SagaGenerator<Y, R = void> = Generator<CallEffect<Y> | PutEffect | SelectEffect | TakeEffect, R, Y>;

export type CommonResponse = {
    statusCode: number,
    message: string,
    success: boolean,
    access_token?: string
};

export type ApiResponse<T> = CommonResponse & {
    data?: T;
};