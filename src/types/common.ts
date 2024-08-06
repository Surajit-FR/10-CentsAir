export interface ReusableInputProps {
    name: string;
    type: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
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
    title: string;
    content: JSX.Element;
}