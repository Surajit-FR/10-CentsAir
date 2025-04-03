import { SetStateAction, useState } from 'react'

interface Passenger{
    Adult: number,
    Child: number,
    infant: number
}
interface Props {
    passenger: Passenger
    setPassenger: React.Dispatch<SetStateAction<Passenger>>
    showModal: React.Dispatch<SetStateAction<boolean>>
}


const adultButtonsItems = [1, '2', '3', '4', '5', '6', '7', '8', '9']
const childButtonsItems = ['0','1', '2', '3', '4', '5', '6']
const classButtonItems = ['Economy/Premium Economy', 'Premium Economy', 'Business', 'First Class']

const PassengerPicker = ({passenger, setPassenger,showModal}:Props) => {
    const [adult, setAdult] = useState(passenger.Adult)
    const [child, setchild] = useState(passenger.Child)
    const [infant, setInfant] = useState(passenger.infant)
    const [group, setGroup] = useState('Economy/Premium Economy')

    const onClickAdult = (e: React.MouseEvent<HTMLButtonElement>, value: string | number) => {
        e.preventDefault()
        setAdult(Number(value))
    }
    const onClickhild = (e: React.MouseEvent<HTMLButtonElement>, value: string | number) => {
        e.preventDefault()
        setchild(Number(value))
    }
    const onClickInfant = (e: React.MouseEvent<HTMLButtonElement>, value: string | number) => {
        e.preventDefault()
        setInfant(Number(value))
    }
    const onClickClass = (e: React.MouseEvent<HTMLButtonElement>, value: string) => {
        e.preventDefault()
        setGroup(value)
    }
    const onClickApply = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        setPassenger({
            Adult: adult ,
    Child: child,
    infant: infant
        })
        showModal(false)
    }

    return (
        <div className='economy_premium'>
            <div className='continer'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='adults_box'>
                            <h4>ADULTS (12y +)</h4>
                            <p>on the day of travel</p>
                            <ul className='adults_list'>
                                {adultButtonsItems.map((item) =>
                                (
                                    <li className={`${Number(adult) === Number(item) ? 'active' : ''}`} key={item}>
                                        <button onClick={(e) => onClickAdult(e, item)}><span>{item}</span></button>
                                    </li>
                                ))}

                                {/* <li>
                            <button><span><i className="fi fi-rr-angle-right"></i>9</span></button>
                        </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='adults_box'>
                            <h4>CHILDREN (2y - 12y )</h4>
                            <p>on the day of travel</p>
                            <ul className='adults_list'>
                                {childButtonsItems.map((item) =>
                                (
                                    <li className={`${Number(child) === Number(item) ? 'active' : ''}`} key={item}>
                                        <button onClick={(e) => onClickhild(e, item)}><span>{item}</span></button>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='adults_box'>
                            <h4>INFANTS (below 2y)</h4>
                            <p>on the day of travel</p>
                            <ul className='adults_list'>
                                {childButtonsItems.map((item) =>
                                (
                                    <li className={`${Number(infant) === Number(item) ? 'active' : ''}`} key={item}>
                                        <button onClick={(e) => onClickInfant(e, item)}><span>{item}</span></button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='adults_box'>
                            <h4>CHOOSE TRAVEL CLASS</h4>
                            <ul className='adults_list last_business'>
                                {classButtonItems.map((item) =>
                                (
                                    <li className={`${group === item ? 'active' : ''}`} key={item}>
                                        <button onClick={(e) => onClickClass(e, item)}><span>{item}</span></button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='adults_box text-end'>
                            <button type="button" className="pushRight" onClick={onClickApply}>APPLY</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PassengerPicker
