const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
const days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]
const daysHort= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat",]
  export const ParseDate =(value: Date, identifier?: string)=>{
    const day= value.getDate()
    const month = value.getMonth()
    const year = value.getFullYear()
    const timeString = value.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    const fullday =value.getDay()
    if (!identifier){
        return `${day}-${months[month]}-${year}`
    }
    if(identifier === 'getMonth'){
        return months[month]
    }
    if(identifier === 'getDay'){
        return days[fullday]
    }
    if(identifier === 'dayDate'){
      return `${daysHort[fullday]}, ${months[month]} ${day}`
    }
    if(identifier === "timeOnly"){
      return timeString
    }
    console.log("parsed date", `${year}-${month<9?`0${month+1}`:month+1}-${day}`)
    return `${year}-${month<9?`0${month+1}`:month+1}-${day<10?`0${day}`:day}`
  }

  export const getTimeDifference = (startDate: Date, endDate: Date)=>{
    const diffsInMili= new Date(endDate).getTime() - new Date(startDate).getTime()
    const totalInMinutes = Math.floor(diffsInMili/(1000*60))
    const reminder= totalInMinutes%(60*24)
    const totalDays= Math.floor(totalInMinutes/(60*24))
    const hour = Math.floor(reminder/60)
    const minutes = reminder%(60)
    return `${totalDays ? `${totalDays} Days ` : ''}${hour ? `${hour} Hrs ` : ''}${minutes ? `${minutes} Min ` : ''}`.trim();
  }

  export const diffIntimeByElapsedTime = (elapsedTime: number)=>{
    const timeInHours =Math.floor(elapsedTime/60)
    const remainingMins = elapsedTime%60
    return `${timeInHours ? `${timeInHours} Hrs ` : ''}${remainingMins ? `${remainingMins} Mins ` : ''}`.trim()
  }