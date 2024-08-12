import FooterTop from "./Footer/FooterTop";
import FooterMid from "./Footer/FooterMid";
import FooterBottom from "./Footer/FooterBottom";

const LandingPageFooter = (): JSX.Element => {
    return (
        <>
            <footer className="footer_section">
                <div className="container">
                    <FooterTop />
                    <FooterMid />
                    <FooterBottom />
                </div>
            </footer >
        </>
    );
};

export default LandingPageFooter;