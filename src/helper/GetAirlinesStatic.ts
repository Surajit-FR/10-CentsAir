import airlinesData from '../AirlinesStaticData/airlines.json'
import saleCountryData from '../AirlinesStaticData/pointOfSales.json'

export const getSingleAirline = (code: string)=>{
const singleAirLine = airlinesData.filter(air=>air.id ===code)
return singleAirLine[0]
}
export const getSaleCountryCode = (code: string)=>{
const saleCountry = saleCountryData.filter(country=>country.CountryName ===code)
return saleCountry[0]
}