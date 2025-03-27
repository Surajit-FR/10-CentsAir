import React, { SetStateAction } from 'react'
import CloseOnClickOutside from '../../shared/CloseOnClickOutside'
import DestinationPicker from '../../shared/DestinationPicker'
interface Props {
    isVisible: boolean
    setIsVisible:React.Dispatch<SetStateAction<boolean>>
    locationCode: string
    locationName: string
    handleLocationPick:(name: string, code: string, state: string, city: string)=>void
    inputPlaceHolder: string
}



const DestinationPickerWrapper = ({isVisible,setIsVisible,locationCode,locationName,handleLocationPick, inputPlaceHolder}:Props) => {
  return (
    <div className="from_text">
    <h5>To</h5>
    {!isVisible && (
        <div onClick={() => {
            setIsVisible(true)
        }}>
            <h1>{locationCode}</h1>
            <h5 >{locationName}</h5>
        </div>

    )}
    <CloseOnClickOutside 
    show={isVisible} 
    setShow={setIsVisible}>
        <DestinationPicker
        destinationCode={locationCode} 
        inputPlaceHolder={inputPlaceHolder}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        handleDestinationPicking={handleLocationPick}
        />
    </CloseOnClickOutside>
</div>
  )
}

export default DestinationPickerWrapper