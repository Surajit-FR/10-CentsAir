import { HereSectionData } from "../../../types/common";

const data: Array<HereSectionData> =
    [
        {
            title: "Get Great Deals!",
            description: "Choose from 500+ airlines for low airfares!"
        },
        {
            title: "Price Match Promise",
            description: "Find low prices to destinations worldwide."
        },
        {
            title: "Easy Cancellations with CheapOair",
            description: "Convenient self-service options available online."
        },
        {
            title: "Expert Guidance",
            description: "Get personalized assistance from our travel experts."
        }
    ];

const HereSection = (): JSX.Element => {
    return (
        <>
            <section className="here_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="here_text">
                                <h3>Here's why travellers choose 10 Cents Air</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {data?.map((item, index) => (
                            <div key={index} className="col-md-6 col-lg-3">
                                <div className="here_text_1">
                                    <h4>
                                        <i className="fa-solid fa-check"></i> {item?.title}
                                    </h4>
                                    <p>{item?.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HereSection;
