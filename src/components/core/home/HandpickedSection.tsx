import { useEffect } from "react";
import { CarouselItem } from "../../../types/common";
import OwlCarousel from 'react-owl-carousel';

interface CarouselSectionProps {
    data: Array<CarouselItem>;
    carouselOptions?: object;
    dataType: string;
};

const CarouselSection = ({ data, carouselOptions, dataType }: CarouselSectionProps): JSX.Element => {
    useEffect(() => {
        (window as any).$ = (window as any).jQuery = require('jquery');
        require('owl.carousel');

        (window as any).$('.owl-carousel').owlCarousel({
            autoplay: false,
            rewind: false,
            margin: 20,
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
                    items: 3
                },
                1024: {
                    items: 5
                },
                1366: {
                    items: 5
                }
            },
            ...carouselOptions,
        });
    }, [carouselOptions, dataType]);

    return (
        <>
            <section className="handpicked_section">
                <div className="container">
                    <div className="found_box">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="low_text">Handpicked Collections for You</h2>
                                {dataType === "International" && <p className="get_12">Get Flat 45% Off! Use code: 10CAHOLIDAY</p>}
                            </div>
                            <div className="col-md-12">
                                <OwlCarousel className='owl-theme' loop margin={10} nav>
                                    {data?.map((item, index) => (
                                        <div key={index} className="item">
                                            <div className="hand_1">
                                                <div className="hand_2">
                                                    <div className="hand_img">
                                                        <img src={item?.imageUrl} alt={item?.title} />
                                                        <div className="hand_text">
                                                            <h6>
                                                                {dataType === "Handpicked" ? item?.rank : item?.destination}
                                                            </h6>
                                                            <h3>
                                                                {dataType === "Handpicked" ? item?.title : item?.price}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CarouselSection;