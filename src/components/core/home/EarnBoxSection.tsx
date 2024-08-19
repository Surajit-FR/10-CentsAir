import { Link } from "react-router-dom";

const EarnBoxSection = (): JSX.Element => {
    return (
        <>
            <section className="earn_box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-7">
                            <ul className="points_07">
                                <li>
                                    <div className="in_box">
                                        <img src="assets/images/found/g1.png" alt="" />
                                        <div className="x_points">
                                            <h5><span>7X</span> Points</h5>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="in_text">
                                        <h4>Earn 7X points on the<span> 10 Cents Air Credit Card</span></h4>
                                        <p>Earn 7x the points when you book using the<span> 10 Cents Air Credit card</span></p>
                                        <Link to="#">Know More</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5 col-lg-5">
                            <div className="in_text right_11">
                                <h4>Earn 2X points on 10 Cents Air <span>app</span></h4>
                                <p>Book on our apps (iOS & Android) to double your <span>points.</span></p>
                                <Link to="#">Get the App</Link>
                                <ul className="earn_link">
                                    <li className="me-1">
                                        <Link to="#">
                                            <img src="assets/images/app/1.png" alt="" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <img src="assets/images/app/2.png" alt="" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default EarnBoxSection;