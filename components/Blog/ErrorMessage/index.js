import Layout from "components/Layout"
import { Container } from "components/grid";

const ErrorMessage = ( { category, author } )  => {

    let message = <h5>Please reload the page...</h5>

    if (category && author) {
        message = <h5>Author "{author}" not found in the "{category}" category.</h5>
    }
    else if (category) {
        message = <h5>Category "{category}" not found.</h5>
    }
    else if (author) {
        message = <h5>Author "{author}" not found.</h5>
    }

    return (
        <Layout theme="white">
            <Container>
                <section className="blog-item section section__promo section__promo--home pb-0 text-center">
                    {message}
                </section>
            </Container>
        </Layout>
    )
}

export default ErrorMessage;