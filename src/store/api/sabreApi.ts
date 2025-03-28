import axios from "axios";
import { REACT_APP_SABRE_API_BASE_URL } from "../../config/Api.config";
import { setupInterceptors } from "./sabreInterceptor";

export const SABREAPI = axios.create({ baseURL: REACT_APP_SABRE_API_BASE_URL, withCredentials: true });
setupInterceptors()

export const SEARCHLOCATIONS = (data: any) => {return  SABREAPI({
    method: 'get',
    url: `/v2/geo/autocomplete`,
    params:{
      limit:30,
      clientId:"VjE6NzYwNjk1OjJZREw6QUE=",
      query:data
    },
  });
}

export const INSTAFLIGHTSEARCHRESULTS = (data: any) => {return  SABREAPI({
    method: 'get',
    url: `v1/shop/flights`,
    params:{
      origin: data?.origin,
      destination:data?.destination,
      departuredate: data?.departuredate,
      returnDate: data?.returnDate,
      sortby:'totalfare',
      order:'asc',
      passengercount:data?.passengers,
      enabletagging: true,
      limit:5
    },
  });
}

    // SABREAPI.get("/v2/geo/autocomplete", data);