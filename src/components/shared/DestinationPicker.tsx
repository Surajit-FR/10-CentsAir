import { SetStateAction, useEffect, useRef, useState } from 'react'
import { SabreSerchGeoLocation } from '../../store/reducers/SabreSearchReducers'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/Store'
interface Props {
    headerText: string
    isVisible: boolean
    destinationCode: string
    destinationName: string
    inputPlaceHolder: string
    setIsVisible: React.Dispatch<SetStateAction<boolean>>
    handleDestinationPicking: (name: string, code: string, state: string, city: string)=> void
}
const DestinationPicker = ({isVisible, headerText, destinationCode, destinationName, inputPlaceHolder, setIsVisible, handleDestinationPicking}: Props) => {
    const dispatch = useDispatch<AppDispatch>()
    const [query, setQuery] = useState(destinationCode)
    const {data}= useSelector((state: RootState)=> state.sabreGeolocationSlice)
    const inputRef = useRef<any>()
    const wrapperRef = useRef<any>()

        useEffect(() => {
            if (query.length > 2) {
                dispatch(SabreSerchGeoLocation({ query, }));
                // debounce(searchQuery)    
            }
        }, [query, dispatch])


    useEffect(() => {
        function handleClickOutside(event:any) {
          if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setIsVisible(false)
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [wrapperRef, setIsVisible]);
    useEffect(()=>{
        if(isVisible){
            inputRef && inputRef.current && inputRef.current.focus()
            setQuery('')
        }
    },[isVisible, inputRef])
  return (
    <div className="from_text" ref={wrapperRef}>
    <h5>{headerText}</h5>
    {!isVisible && (
        <div onClick={() => {
            setIsVisible(true)
        }}>
            <h1>{destinationCode}</h1>
            <h5 >{destinationName}</h5>
        </div>

    )}


    {isVisible && (
        <div className="set_secarh_box">
            <input className="s_text1" type="text" value={query} onChange={(e) => setQuery(e.target.value)} ref={inputRef} placeholder={inputPlaceHolder} />
            <div className='date_box clearfix'>
                {data && data.doclist && data.doclist.docs && data.doclist.docs.length > 0 && data.doclist.docs.map((airPorts: any) => (
                    <div className='air_text' key={airPorts.id} onClick={() => {
                        handleDestinationPicking(airPorts.name, airPorts.iataCityCode, airPorts.stateName, airPorts.city)
                    }
                    }>
                        <i className="fi fi-rr-plane"></i>
                        <h5 className='m_left'>
                            <span className='f_text com_text'>{airPorts.city},</span>
                            <span className='s_text com_text'>{airPorts.stateName}</span>
                            <span className='l_text'>{airPorts.name}</span>
                        </h5>
                        <span className='ind_text'>{airPorts.iataCityCode}</span>
                    </div>
                )
                )}
            </div>
        </div>
    )}

</div>
  )
}

export default DestinationPicker