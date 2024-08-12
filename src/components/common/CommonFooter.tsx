import FooterBottom from "./Footer/FooterBottom";

const CommonFooter = (): JSX.Element => {
    return (
        <>
            <footer className="footer_section mt-3">
                <div className="container">
                    <div className="pt_bocxw2">
                        <p>[+] ** Promo Code Offer</p>
                        <p>[+] Booking Bonus Instant Savings Discount</p>
                        <p>[+] General Disclaimer</p>
                    </div>

                    <FooterBottom />
                </div>
            </footer>
        </>
    );
};

export default CommonFooter;