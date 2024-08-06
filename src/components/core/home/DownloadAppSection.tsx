import React from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';

const DownloadAppSection = (): JSX.Element => {
    const [value, setValue] = React.useState<string | undefined>(undefined);
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        console.log(value);
        e.preventDefault()
    }

    return (
        <>
            <section className="handpicked_section">
                <div className="container">
                    <div className="found_box">
                        <div className="row">
                            <div className="col-md-8">
                                <h2 className="low_text pb-1">Download App Now !</h2>
                                <p className="get_12">Use code <b>WELCOME10CA</b> and get <b>FLAT 12% OFF*</b> on your first
                                    domestic flight booking</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="form_group_box d-flex" style={{ width: "450px" }}>
                                        <PhoneInput
                                            id="mobile_code"
                                            international
                                            countryCallingCodeEditable={false}
                                            defaultCountry="IN"
                                            className="phone_123"
                                            placeholder="Phone Number"
                                            value={value}
                                            onChange={setValue}
                                        />
                                        <input className="get_app_link" type="submit" value="GET APP LINK" />
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-4">
                                <ul className="app_link">
                                    <li>
                                        <Link className="mb-4" to="#">
                                            <img src="assets/images/app/1.png" alt="" />
                                        </Link>
                                        <Link to="#">
                                            <img src="assets/images/app/2.png" alt="" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <img src="assets/images/app/3.png" alt="" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DownloadAppSection;