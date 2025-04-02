import airlinesData from '../AirlinesStaticData/airlines.json'

export const getSingleAirline = (code: string)=>{
const singleAirLine = airlinesData.filter(air=>air.id ===code)
return singleAirLine[0]
}