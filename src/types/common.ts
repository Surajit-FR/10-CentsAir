import { CallEffect, PutEffect, SelectEffect, TakeEffect } from "redux-saga/effects";

export interface ReusableInputProps {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onBlur: React.FocusEventHandler<HTMLInputElement>;
    touched?: boolean;
    error?: string;
    className?: string;
}
export interface HereSectionData {
    title: string;
    description: string
}
export interface FoundDeal {
    destination: string;
    route: string;
    dates: string;
    price: string;
    imageUrl: string;
    similarTripText: string;
}
export interface CarouselItem {
    imageUrl: string;
    rank?: string;
    title?: string;
    destination?: string;
    price?: string;
}
export interface Deal {
    id: number;
    city: string;
    airportCode: string;
    dates: string;
    price: string;
    tripType: string;
    imageUrl: string;
}
export interface TabData {
    id: string;
    icon: string;
    altIcon: string;
    title: string;
    content: JSX.Element;
}
export interface Pagination {
    pageCount: number;
    pageNumber: number;
    changePage: (data: { selected: number }) => void;
}
export interface FlightItemsType {
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
export interface RecommendationsItemsType {
    icon: string;
    title: string;
    price: string;
    image: string;
};
export interface DepartureArrivalTime {
    time: string;
    location: string;
    note?: string;
}
export interface FlightOption {
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
export interface FlightData {
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
export interface FlightDataTwo {
    id: string;
    isActive: boolean;
    flightNumber: string;
    route: string;
    imgSrc: string;
};
export interface MealOne {
    id: string;
    imageSrc: string;
    description: string;
    price: string;
};
export interface BaggageOption {
    id: string;
    weight: string;
    description: string;
    price: string;
};

export interface DataState {
    data: Array<any>; // data type should be mentioned based on the API response
    loading: boolean;
    error: string | null;
    type: string;
};

export interface Hotel {
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
}

export type SagaGenerator<Y, R = void> = Generator<CallEffect<Y> | PutEffect | SelectEffect | TakeEffect, R, Y>;