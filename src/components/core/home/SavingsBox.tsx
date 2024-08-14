import { useEffect } from "react";

const SavingsBox = (): JSX.Element => {
    useEffect(() => {
        (window as any).$ = (window as any).jQuery = require('jquery');
        require('owl.carousel');

        (window as any).$("#customized_1").owlCarousel({
            autoplay: false,
            rewind: false,
            margin: 30,
            loop: true,
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1366: {
                    items: 3
                }
            }
        });
    }, []);

    return (
        <>
            <section className="savings_box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="customized_1" className="owl-carousel">
                                <div className="item">
                                    <div className="a_color ">
                                        <h5>A customized fare quote to give you savings over the available fares.</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="a_color s_color">
                                        <h5>Flexibility to add names up to 7 days before the journey</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="a_color t_color">
                                        <h5>A convenient interface to book, make payment and add names of travelers</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="a_color ">
                                        <h5>A customized fare quote to give you savings over the available fares.</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="a_color s_color">
                                        <h5>Flexibility to add names up to 7 days before the journey</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="a_color t_color">
                                        <h5>A convenient interface to book, make payment and add names of travelers</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SavingsBox;