import { Link } from "react-router-dom";

const FooterTop = (): JSX.Element => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <ul className="with_us">
                        <li>Get in Touch with Us</li>
                        <li>
                            <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                        </li>
                        <li>
                            <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                        </li>
                        <li>
                            <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FooterTop;