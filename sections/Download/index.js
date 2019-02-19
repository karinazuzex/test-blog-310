import React from "react";

import { Container } from "components/grid/index";
import DownloadForm from "components/Form/Download";

const DownloadSection = () => (
    <section className="section section__download bg-white-grey">
        <Container>
            <div className="block">
                <DownloadForm />
            </div>
        </Container>
    </section>
);

export default DownloadSection;
