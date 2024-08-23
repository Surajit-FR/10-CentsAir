import PaymentOptionsSection from "./PaymentOptionsSection";
import BillingSection from "./BillingSection";
import PoliciesReviewSection from "./PoliciesReviewSection";
import { useEffect } from "react";

const PaymentSection = (): JSX.Element => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            {/* PaymentOptionsSection */}
            <PaymentOptionsSection />

            {/* BillingSection */}
            <BillingSection />

            {/* PoliciesReviewSection */}
            <PoliciesReviewSection />
        </>
    );
};

export default PaymentSection;