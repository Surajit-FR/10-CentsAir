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
  export const ParseDate =(value: Date)=>{
    const day= value.getDate()
    const month = value.getMonth()
    const year = value.getFullYear()
    const timeString = value.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    return `${day}-${months[month]}-${year} ${timeString}`
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