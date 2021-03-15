import React from "react";
import Layout from "components/Layout";
import PromoSection from "components/pageSections/solutions-page/InMemoryCache/Promo";
import SectionMemoryCaching from "components/pageSections/solutions-page/InMemoryCache/SectionMemoryCaching";
import SectionEnterprise from "components/pageSections/solutions-page/InMemoryCache/SectionEnterpriseGrade";
import SectionCachingData from "components/pageSections/solutions-page/InMemoryCache/SectionCachingData";

const SolutionsInMemoryCachePage = () => {
    return (
        <Layout theme="white">
            <PromoSection />
            <SectionMemoryCaching />
            <SectionEnterprise />
            <SectionCachingData />
        </Layout>
    );
};

export default SolutionsInMemoryCachePage;
