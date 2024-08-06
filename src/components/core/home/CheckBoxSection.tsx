import { Link } from "react-router-dom";

const CheckBoxSection = (): JSX.Element => {
    return (
        <>
            <section className="check_boxt">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-12 col-md-12">
                            <ul className="div_cheek">
                                <li><Link to="#">Check Flight Status</Link></li>
                                <li>
                                    <p>Check if your flight is on time! View airport maps, weather condition and more!</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CheckBoxSection;