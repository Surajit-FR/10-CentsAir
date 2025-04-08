import { SetStateAction, useEffect, useRef, useState } from 'react'
import { SabreSerchGeoLocation } from '../../store/reducers/SabreSearchReducers'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/Store'
import GlowLoader from './GlowLoader'
interface Props {
    isVisible: boolean
    destinationCode: string
    inputPlaceHolder: string
    setIsVisible: React.Dispatch<SetStateAction<boolean>>
    handleDestinationPicking?: (name: string, code: string, state: string, city: string, country: string) => void
    customTrigger?: boolean
}
const DestinationPicker = ({ isVisible, destinationCode, inputPlaceHolder, handleDestinationPicking, customTrigger }: Props) => {
    const dispatch = useDispatch<AppDispatch>()
    const [query, setQuery] = useState(destinationCode)
    const { data, type } = useSelector((state: RootState) => state.sabreGeolocationSlice)
    const inputRef = useRef<any>()


    useEffect(() => {
        if (query.length > 2) {
            dispatch(SabreSerchGeoLocation({ query, }));
            // debounce(searchQuery)    
        }
    }, [query, dispatch])


    useEffect(() => {
        if (isVisible && !customTrigger) {
            inputRef && inputRef.current && inputRef.current.focus()
            setQuery('')
        }
    }, [isVisible, inputRef, customTrigger])
    return (
        <>
            {isVisible && (
                <div className="set_secarh_box">
                    <input className="s_text1" type="text" value={query} onChange={(e) => setQuery(e.target.value)} ref={inputRef} placeholder={inputPlaceHolder} />

                    <div className='date_box clearfix'>
                        {type === 'sabreSlice/SabreSerchGeoLocation' ? (
                           <GlowLoader />
                        ) : (
                            <>
                                {data && data.doclist && data.doclist.docs && data.doclist.docs.length > 0 && data.doclist.docs.map((airPorts: any) => (
                                    <div className='air_text' key={airPorts.id} onClick={() => {
                                        handleDestinationPicking && handleDestinationPicking(airPorts.name, airPorts.iataCityCode, airPorts.stateName, airPorts.city, airPorts.country)
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
                            </>
                        )}


                    </div>
                </div>
            )}

        </>
    )
}

export default DestinationPicker