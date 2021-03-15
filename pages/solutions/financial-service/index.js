import React from "react";
import Layout from "components/Layout";
import PromoSection from "components/pageSections/solutions-page/FinancialService/Promo";
import SectionDatabasePerformance from "components/pageSections/solutions-page/FinancialService/SectionDatabasePerformance";
import SectionFinancialEmpower from "components/pageSections/solutions-page/FinancialService/FinancialEmpower";
import SectionContact from "components/pageSections/solutions-page/FinancialService/Contact";

const FinancialServicePage = () => {
    return (
        <Layout theme="white">
            <PromoSection />
            <SectionDatabasePerformance />
            <SectionFinancialEmpower />
            <SectionContact />
        </Layout>
    );
};

export default FinancialServicePage;
