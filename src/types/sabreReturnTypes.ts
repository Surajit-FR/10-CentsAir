export interface FlightSegmentData {
    ArrivalAirport: {
        LocationCode: string
    }
    ArrivalDateTime: Date
    DepartureAirport: {
        LocationCode: string
    }
    DepartureDateTime: Date
    DepartureTimeZone: {
        GMTOffset: number
    }
    DisclosureAirline: { Code: string }
    ElapsedTime: number
    Equipment: { AirEquipType: number }
    FlightNumber: number
    MarketingAirline: { Code: string }
    MarriageGrp:
    string
    OperatingAirline: { FlightNumber: number, Code: string, CompanyShortName: string }
    ResBookDesigCode: string
    StopQuantity: number
}
export interface Option{
    ElapsedTime: number
    FlightSegment: FlightSegmentData[]
}
export interface OriginDestinationOptionsData {
    OriginDestinationOption:Option[]
    
}

export interface AirItinerary {
    OriginDestinationOptions: OriginDestinationOptionsData
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
        FareConstruction: FareConstruction
        TotalFare: FareConstruction
        Taxes: {
            Tax: Tax[]
        }
        BaseFare: FareConstruction
        EquivFare: FareConstruction
    }
}
export interface InstaFlightResultObject {
    AirItinerary: AirItinerary
    TPA_Extensions: TPA_Extensions
    SequenceNumber: number
    AirItineraryPricingInfo: AirItineraryPricingInfo
    TicketingInfo: TicketingInfo
}


export interface InstaFlightSearchParamstypes {
    origin: string,
    destination: string,
    departuredate: Date,
    returnDate?: Date,
    sortby?: 'totalfare',
    order?: 'asc' | 'desc',
    passengercount: number,
    enabletagging: boolean
}
export interface InstaSearchResult {
    PricedItineraries: InstaFlightResultObject[]
    DepartureDateTime: Date
    DestinationLocation: string
    OriginLocation: string
}
export interface InstaSearchState {
    data: InstaSearchResult
    singleSearchData: InstaFlightResultObject
    type: string
    error: string | null
}