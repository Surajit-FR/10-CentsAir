import React from 'react'

const PassengerPicker = () => {
  return (
    <div className='economy_premium'>
      <div className='continer'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='adults_box'>
                    <h4>ADULTS (12y +)</h4>
                    <p>on the day of travel</p>
                    <ul className='adults_list'>
                        <li className='active'>
                            <button><span>1</span></button>
                        </li>
                        <li>
                            <button><span>2</span></button>
                        </li>
                        <li>
                            <button><span>3</span></button>
                        </li>
                        <li>
                            <button><span>4</span></button>
                        </li>
                        <li>
                            <button><span>5</span></button>
                        </li>
                        <li>
                            <button><span>6</span></button>
                        </li>
                        <li>
                            <button><span>7</span></button>
                        </li>
                        <li>
                            <button><span>8</span></button>
                        </li>
                        <li>
                            <button><span>9</span></button>
                        </li>
                        <li>
                            <button><span><i className="fi fi-rr-angle-right"></i>9</span></button>
                        </li>
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
                        <li className='active'>
                            <button><span>1</span></button>
                        </li>
                        <li>
                            <button><span>2</span></button>
                        </li>
                        <li>
                            <button><span>3</span></button>
                        </li>
                        <li>
                            <button><span>4</span></button>
                        </li>
                        <li>
                            <button><span>5</span></button>
                        </li>
                        <li>
                            <button><span>6</span></button>
                        </li>
                        <li>
                            <button><span><i className="fi fi-rr-angle-right"></i>6</span></button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='adults_box'>
                    <h4>INFANTS (below 2y)</h4>
                    <p>on the day of travel</p>
                    <ul className='adults_list'>
                        <li className='active'>
                            <button><span>1</span></button>
                        </li>
                        <li>
                            <button><span>2</span></button>
                        </li>
                        <li>
                            <button><span>3</span></button>
                        </li>
                        <li>
                            <button><span>4</span></button>
                        </li>
                        <li>
                            <button><span>5</span></button>
                        </li>
                        <li>
                            <button><span>6</span></button>
                        </li>
                        <li>
                            <button><span><i className="fi fi-rr-angle-right"></i>6</span></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12'>
                <div className='adults_box'>
                    <h4>CHOOSE TRAVEL CLASS</h4>
                    <ul className='adults_list last_business'>
                        <li className='active'>
                            <button><span>Economy/Premium Economy</span></button>
                        </li>
                        <li>
                            <button><span>Premium Economy</span></button>
                        </li>
                        <li>
                            <button><span>Business</span></button>
                        </li>
                        <li>
                            <button><span>First Class</span></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12'>
                <div className='adults_box text-end'>
                    <button type="button" className="pushRight">APPLY</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PassengerPicker
