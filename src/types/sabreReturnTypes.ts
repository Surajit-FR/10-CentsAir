export interface AirItinerary {
    OriginDestinationOptions: {}
    DirectionInd: string
}
export interface TicketingInfo {
    ValidInterline: "Yes" | "No"
    TicketType: string
}
export interface TPA_Extensions {
    ValidatingCarrier: {
        Code: string
    }
    TagID: string
}
export interface FareBasisCode {
    BookingCode: string
    DepartureAirportCode: string
    ArrivalAirportCode: string
    content: string
}
export interface FareBasisCodes {
    FareBasisCode: FareBasisCode[]
}
export interface PassengerTypeQuantity {
    Quantity: number
    Code: string
}
export interface FareConstruction {
    CurrencyCode: string
    DecimalPlaces: number
    Amount: number
}
export interface Fare {
    CurrencyCode: string
    Amount: number
}

export interface Tax {
    CurrencyCode: string,
    DecimalPlaces: number,
    TaxCode: string,
    Amount: number
}
export interface Taxes {
    TotalTax: FareConstruction
    Tax: Tax[]
}

export interface PassengerFare {
    FareConstruction: FareConstruction
    TotalFare: Fare
    Taxes: Taxes
    BaseFare: Fare
    EquivFare: FareConstruction
    Endorsements: {
        NonRefundableIndicator: boolean
    }
}
export interface PTC_FareBreakdown {
    FareBasisCodes: FareBasisCodes
    PassengerTypeQuantity: PassengerTypeQuantity
    PassengerFare: PassengerFare
    Endorsements: {
        NonRefundableIndicator: boolean
    }
}
export interface PTC_FareBreakdowns {
    PTC_FareBreakdown: PTC_FareBreakdown

}
export interface FareInfo {
    TPA_Extensions: {
        Cabin: {
            Cabin: string
        },
        Meal: {
            Code: string
        },
        SeatsRemaining: {
            BelowMin: boolean
            Number: number
        }
    },
    FareReference: string
}
export interface AirItineraryPricingInfo {
    LastTicketDate: string
    PTC_FareBreakdowns: PTC_FareBreakdowns
    FareInfos: {
        FareInfo: FareInfo[]
    }
    TPA_Extensions: {
        DivideInParty: {
            Indicator: boolean
        }
    }
    ItinTotalFare: {
        FareConstruction:FareConstruction
        TotalFare:FareConstruction
        Taxes:{
            Tax:Tax[]
        }
        BaseFare:FareConstruction
        EquivFare:FareConstruction
    }
}
export interface InstaFlightResultObject {
    AirItinerary: AirItinerary
    TPA_Extensions: TPA_Extensions
    SequenceNumber: number
    AirItineraryPricingInfo: AirItineraryPricingInfo
    TicketingInfo: TicketingInfo
}
