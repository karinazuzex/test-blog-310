import React, { Component, Fragment } from "react";
import Layout from "components/Layout";

import { Container } from "components/grid";
import DownloadForm from "components/Form/Download";
import { Link } from "components/ui";

class GetMemuraiPage extends Component {
    constructor(props) {
        super(props);

        this.getInitialState = () => ({
            done: false,
            email: null,
        });

        this.state = this.getInitialState();
    };

    clearResult = () => {
        this.setState(this.getInitialState());
    };

    handleFormCallback = (email) => {
        this.setState({
            done: true,
            email,
        })
    };

    renderDefaultContent = () => (
        <Fragment>
            <section className="section section__promo section__promo--get-memurai">
                <Container>
                    <div className="block text-center">
                        <h3 className="block__title block__elem text-bold">
                            Get Memurai
                        </h3>
                        <p className="block__description block__description--fixed">
                            Please fill in the information below so we can send you a download link.
                        </p>
                    </div>
                </Container>
            </section>
            <section className="section section__download bg-white-grey">
                <Container>
                    <div className="block">
                        <DownloadForm onCallback={this.handleFormCallback} />
                    </div>
                </Container>
            </section>
        </Fragment>
    );

    renderDoneContent = () => (
        <section className="section section__promo section__promo--result">
            <Container>
                <div className="block text-center">
                    <h5 className="block__title">
                        Thank you for your interest in Memurai.
                    </h5>
                    <p className="block__description block__description--fixed block__elem--xl text-sm">
                        We have sent an email to&nbsp;
                        <span className="text-red">
                            {this.state.email}
                        </span> containing a link to download the software.
                    </p>
                    <p className="block__description text-sm">
                        If you don&apos;t receive the email, please check your spam folder, or&nbsp;
                        <Link
                            theme="red"
                            onClick={this.clearResult}
                        >
                            try again
                        </Link>.
                    </p>
                </div>
            </Container>
        </section>
    );

    render() {
        return (
            <Layout theme="white">
                {this.state.done
                    ? this.renderDoneContent()
                    : this.renderDefaultContent()
                }
            </Layout>
        );
    }
}

export default GetMemuraiPage;
