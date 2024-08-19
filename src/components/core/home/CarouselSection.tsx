import { useEffect } from "react";
import { CarouselItem } from "../../../types/common";

interface CarouselSectionProps {
    data: Array<CarouselItem>;
    dataType: string;
};

const CarouselSection = ({ data, dataType }: CarouselSectionProps): JSX.Element => {
    useEffect(() => {
        const carouselId = dataType === "International" ? "holiday_1" : "carousel";

        // Inject CSS specific to the current carousel
        const style = document.createElement('style');
        style.innerHTML = `
            #${carouselId} .owl-dots,
            #${carouselId} .owl-nav {
                display: block !important;
            }
        `;
        document.head.appendChild(style);

        // Initialize the OwlCarousel for the specific ID
        (window as any).$ = (window as any).jQuery = require('jquery');
        require('owl.carousel');

        const $carousel = (window as any).$(`#${carouselId}`);
        $carousel.owlCarousel({
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
            }
        });

        // Cleanup function to remove injected styles and destroy OwlCarousel instance
        return () => {
            style.remove();
            $carousel.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            $carousel.find('.owl-stage-outer').children().unwrap();
        };
    }, [dataType]);

    return (
        <>
            <section className="handpicked_section">
                <div className="container">
                    <div className="found_box">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="low_text">{dataType === "International" ? "International Holiday Packages On Sale" : "Handpicked Collections for You"}</h2>
                                {dataType === "International" && <p className="get_12">Get Flat 45% Off! Use code: 10CAHOLIDAY</p>}
                            </div>
                            <div className="col-md-12">
                                <div id={`${dataType === "International" ? "holiday_1" : "carousel"}`} className="owl-carousel">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CarouselSection;