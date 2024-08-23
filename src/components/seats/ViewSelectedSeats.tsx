import { Link } from "react-router-dom";

interface ViewSelectedSeatsProps {
    handleNextSeatSelection: React.MouseEventHandler;
}


const ViewSelectedSeats = ({ handleNextSeatSelection }: ViewSelectedSeatsProps): JSX.Element => {
    return (
        <>
            <div className="found_box mb-5">
                <h6 className="skip_1">View Selected Seats</h6>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="ew_list">
                            <li>
                                <span className="le_12">
                                    <p>Subtotal Seats Price</p>
                                </span>
                                <span className="le_usd">
                                    <p>USD 0.0</p>
                                </span>
                            </li>
                            <li>
                                <span className="le_12">
                                    <p>Non-refundable Enhanced Seat <br /> Assignment (ESA) Fee :</p>
                                </span>
                                <span className="le_usd">
                                    <p>USD 0.0</p>
                                </span>
                            </li>
                            <li>
                                <span className="le_12">
                                    <p>Grand Total Seat Selection Price :</p>
                                </span>
                                <span className="le_usd">
                                    <p>USD 0.0</p>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center sq_1">
                            <Link className="check_status ner_1" to="#" onClick={handleNextSeatSelection}>
                                Next Flight
                            </Link>
                            <p>Clear All Selections | Save Selection and Close</p>
                        </div>
                    </div>
                </div>
                <p className="note_w">Note : Your seat request(s) will be transmitted to the airline(s). Please
                    contact your airline(s) directly to confirm these request(s) prior to your departure date.
                </p>
            </div>
        </>
    );
};

export default ViewSelectedSeats;