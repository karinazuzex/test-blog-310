import React from "react";
import Layout from "components/Layout";
import PromoSection from "components/pageSections/solutions-page/IOT/Promo";
import ExplainSection from "components/pageSections/solutions-page/IOT/ExplainSection";

const IOTPage = () => {
    return (
        <Layout theme="white">
            <PromoSection />
            <ExplainSection />
        </Layout>
    );
};

export default IOTPage;
