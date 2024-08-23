import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { BaggageOption, MealOne } from "../../types/common";

// Subcomponent for Meal Item
const MealItem = memo(({ meal }: { meal: MealOne }) => (
    <ul className="low_calorie">
        <li className="cal_1">
            <div className="low_img_123">
                <img src={meal.imageSrc} alt={meal.description} />
            </div>
        </li>
        <li className="cal_2">
            <div className="low_text_veg_123">
                <p>{meal.description}</p>
            </div>
        </li>
        <li className="cal_3">
            <div className="low_prices_123">
                <h6>{meal.price}</h6>
            </div>
        </li>
        <li className="cal_4">
            <div className="low_add_w2">
                <Link to="#">+ Add</Link>
            </div>
        </li>
    </ul>
));

// Subcomponent for Baggage Option Item
const BaggageOptionItem = memo(({ option }: { option: BaggageOption }) => (
    <ul className="low_calorie">
        <li className="cal_2">
            <div className="low_text_veg_123">
                <p>{option.weight}</p>
                <h5>{option.description}</h5>
            </div>
        </li>
        <li className="cal_3">
            <div className="low_prices_123">
                <h6>{option.price}</h6>
            </div>
        </li>
        <li className="cal_4">
            <div className="low_add_w2">
                <Link to="#">+ Add</Link>
            </div>
        </li>
    </ul>
));

const MealsBaggageSection = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState<string>("Meals");
    const [activeAddons, setActiveAddons] = useState<boolean>(false);

    const mealsData: Array<MealOne> = [
        {
            id: "1",
            imageSrc: "assets/images/found/low1.png",
            description: "Low calorie veg meal + beverage",
            price: "$100",
        },
        {
            id: "2",
            imageSrc: "assets/images/found/low1.png",
            description: "Vegan meal + beverage",
            price: "$100",
        },
        {
            id: "3",
            imageSrc: "assets/images/found/low1.png",
            description: "Diabetic veg meal + beverage",
            price: "$100",
        },
        {
            id: "4",
            imageSrc: "assets/images/found/low1.png",
            description: "Muslim meal + beverage",
            price: "$100",
        },
        {
            id: "5",
            imageSrc: "assets/images/found/low1.png",
            description: "Hindu(Non-veg) meal + beverage",
            price: "$100",
        },
        {
            id: "6",
            imageSrc: "assets/images/found/low1.png",
            description: "Seafood meal + beverage",
            price: "$100",
        },
        {
            id: "7",
            imageSrc: "assets/images/found/low1.png",
            description: "Muslim meal + beverage",
            price: "$100",
        },
        {
            id: "8",
            imageSrc: "assets/images/found/low1.png",
            description: "Hindu(Non-veg) meal + beverage",
            price: "$100",
        },
        {
            id: "9",
            imageSrc: "assets/images/found/low1.png",
            description: "Seafood meal + beverage",
            price: "$100",
        },
    ];

    const baggageOptions: Array<BaggageOption> = [
        { id: "1", weight: "5 KG", description: "Extra baggage 5 KG", price: "$ 100" },
        { id: "2", weight: "10 KG", description: "Extra baggage 10 KG", price: "$ 100" },
        { id: "3", weight: "15 KG", description: "Extra baggage 15 KG", price: "$ 100" },
        { id: "4", weight: "20 KG", description: "Extra baggage 20 KG", price: "$ 100" },
        { id: "5", weight: "25 KG", description: "Extra baggage 25 KG", price: "$ 100" },
        { id: "6", weight: "30 KG", description: "Extra baggage 30 KG", price: "$ 100" },
        { id: "7", weight: "35 KG", description: "Extra baggage 35 KG", price: "$ 100" },
        { id: "8", weight: "40 KG", description: "Extra baggage 40 KG", price: "$ 100" },
        { id: "9", weight: "45 KG", description: "Extra baggage 45 KG", price: "$ 100" },
        { id: "10", weight: "50 KG", description: "Extra baggage 50 KG", price: "$ 100" },
        { id: "11", weight: "55 KG", description: "Extra baggage 55 KG", price: "$ 100" },
    ];

    const handleActiveTab = (activated: string) => {
        setActiveTab(activated);
    };
    const handleActiveAddons = () => {
        setActiveAddons(!activeAddons);
    };

    return (
        <>
            <div className="found_box mb-5 mt-4">
                <h6 className="skip_1">Skip</h6>
                <div className="f_light123">
                    <h5
                        style={{ cursor: "pointer" }}
                        onClick={handleActiveAddons}
                    >
                        Addons(Meals & Baggage)
                        <i className={`fa-solid mx-1 ${activeAddons ? "fa-angle-up" : "fa-angle-down"}`}></i>
                    </h5>
                </div>
                {activeAddons && (
                    <>
                        <ul className="meals_list_12">
                            <li
                                className={`tab-link ${activeTab === "Meals" ? "current" : ""}`}
                                onClick={() => handleActiveTab("Meals")}
                            >
                                <span className="meals_fonts">
                                    <img className="fn_1" src="assets/images/flag/meal_1.png" alt="Meal 1" />
                                    <img className="fn_2" src="assets/images/flag/meal1.png" alt="Meal 1" />
                                </span>
                                Meals
                            </li>
                            <li
                                className={`tab-link ${activeTab === "Extras" ? "current" : ""}`}
                                onClick={() => handleActiveTab("Extras")}
                            >
                                <span className="meals_fonts">
                                    <img className="fn_1" src="assets/images/flag/meal2.png" alt="Meal 2" />
                                    <img className="fn_2" src="assets/images/flag/meal_2.png" alt="Meal 2" />
                                </span>
                                Extras
                            </li>
                        </ul>
                        <ul className="dhaka_list_12">
                            <li>Dhaka</li>
                            <li><i className="fa-solid fa-arrow-right"></i></li>
                            <li>Calgary</li>
                        </ul>
                        <ul className="dac_bom_list">
                            {["DAC - BOM", "BOM - LHR", "LHR - YYC"].map((route, index) => (
                                <li key={index} className={index === 0 ? "active" : ""}>
                                    <div className="dacbom_1">
                                        <div className="dacbom_img">
                                            <img src={`assets/images/show/${index + 1}.png`} alt={`Route ${route}`} />
                                        </div>
                                        <div className="dacbom_text">
                                            <h4>{route}</h4>
                                            <p><span className="red_color">0</span> of 1 meals selected</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div id="meals-1" className={`tab-content low_border ${activeTab === "Meals" ? "current" : ""}`}>
                            <div className="over_hide_bet">
                                {mealsData.map(meal => (
                                    <MealItem key={meal.id} meal={meal} />
                                ))}
                            </div>
                        </div>

                        <div id="meals-2" className={`tab-content low_border ${activeTab === "Extras" ? "current" : ""}`}>
                            <div className="over_hide_bet">
                                {baggageOptions.map(option => (
                                    <BaggageOptionItem key={option.id} option={option} />
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default MealsBaggageSection;