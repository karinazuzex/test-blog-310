import React from "react";

import { Container, Row, Col } from "components/grid/index";
import { Button } from "components/ui";
import DetailsGroup from "components/ui/Details/Group";

const FAQs = [
    {
        summary: "What are the minimum system requirements to run Memurai for Windows?",
        info: "Memurai runs on Windows 7 / Windows Server 2008 R2, or higher. Windows 10 / Windows Server 2016, or higher, are recommended for optimal performance. At the moment, only 64-bit version of Windows are supported.",
    },
    {
        summary: "What version of Redis is Memurai compatible with?",
        info: "Memurai is compatible with Redis 5.",
    },
    {
        summary: "What client libraries are compatible with Memurai?",
        info: "Memurai is fully compatible with the Redis network protocol, so all client libraries compatible with Redis 5 also work with Memurai.",
    },
    {
        summary: "How much will Memurai cost?",
        info: "We are working on a tiered pricing scheme that will fit different users needs, and for that we will rely on feedback gathered from the technical preview. While the details are not available yet, we intend to have a free edition aimed at development use.",
    },
    {
        summary: "Does Memurai for Windows have any limitations compared to Redis on Linux?",
        info: "Unix domain sockets are not supported. Besides that, there are a few configuration flags that are not supported because they don't make sense on Windows. See https://docs.com/config-file#difference-with-redis-configuration-flags for more information.",
    },
    {
        summary: "Can I run Memurai as a Windows service?",
        info: "Yes, Memurai can be installed as a Windows service during the initial setup or later on using the command line options. See https://docs.memurai.com/windows-service for more information.",
    },
    {
        summary: "How fast is Memurai for Windows?",
        info: "Perfomance is on par with Redis on Linux.",
    },
    {
        summary: "Can I use Memurai as a cache? Or as a primary database?",
        info: "Yes, Memurai can be used both as a cache and a primary database.",
    },
];

const FAQSection = () => (
    <section className="section section__faq bg-white-grey separator-bt">
        <Container>
            <Row>
                <Col attributes="xs-12 lg-6">
                    <div className="block">
                        <div className="block__pretitle block__elem--xs text-no-transform">FAQ</div>
                        <h3 className="block__title block__elem">
                            Common questions about Memurai
                        </h3>
                        <Button className="block__elem" type="hollow" theme="red chevron">
                            Ask a question
                        </Button>
                    </div>
                </Col>
                <Col attributes="xs-12 lg-6">
                    <DetailsGroup data={FAQs} />
                </Col>
            </Row>
        </Container>
    </section>
);

export default FAQSection;
