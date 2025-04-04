import axios from "axios";
import { REACT_APP_SABRE_API_BASE_URL } from "../../config/Api.config";
import { setupInterceptors } from "./sabreInterceptor";

export const SABREAPI = axios.create({ baseURL: REACT_APP_SABRE_API_BASE_URL, withCredentials: true });

export const GETACCESSTOKEN = ()=>  axios({
  url:'https://api.platform.sabre.com/v2/auth/token',
  method: 'post',
  headers:{Authorization:'Basic VmpFNk56WXdOamsxT2pKWlJFdzZRVUU9OlRXOXVhWEkwTlRnPQ==',"Content-Type":'application/x-www-form-urlencoded'},
  data:{grant_type: 'client_credentials'}
})

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

export const INSTAFLIGHTSEARCHRESULTS = (data: any) => {
  // console.log("insta params", data)
  return  SABREAPI({
    method: 'get',
    url: `v1/shop/flights`,
    params:{
      origin: data?.origin,
      destination:data?.destination,
      departuredate: data?.departuredate,
      returndate: data?.returndate,
      sortby:'totalfare',
      order:'asc',
      passengercount:data?.passengercount,
      enabletagging: true,
      limit:50
    },
  });
}
export const INSTAFLIGHTSEARCHRESULTSBYTAG = (tagId: string) => {return  SABREAPI({
    method: 'get',
    url: `v1/shop/flights/tags/${tagId}`,
  });
}

// needs v3 auth token
export const GETSEATMAPDETAILS = (data: any) =>{
  return SABREAPI({
    method:'post',
    url: '/v3/offers/getseats/byReservationPayload',
    data:{
      returnSeatMapsOnlyForSegmentRefs: data?.refs,
      segments: data?.flightSegments,
      passengers: data?.passengers
    }
  })
}
    // SABREAPI.get("/v2/geo/autocomplete", data);