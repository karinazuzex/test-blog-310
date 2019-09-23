import { Container } from "components/grid";

const SubscribeForm = (props) => {
    const { right, footer} = props
    return (
        <div className="subscribe">
            { right &&
                <form className="subscribe-right">
                    <p className="blog__subtitle blog__subtitle--bottom">newsletter</p>
                    <p className="subscribe-right__text subscribe-right__text--bottom">Receive updates about key news and special offers.</p>
                    <label className="subscribe-right__label subscribe-right__label--bottom blog__text--semibold" htmlFor="">EMAIL ADDRESS</label>
                    <input type="text"/>
                    <button className="button blog-category__button text-sm button__solid--red-white button--red-white">subscribe</button>
                </form>
            }
            { footer &&
                <div className="subscribe-footer subscribe-footer--border">
                    <Container>
                        <div className="subscribe-footer-block">
                            <h3 className="block__title text-bold">Subscribe to our newsletter</h3>
                            <p className="blog-form__text blog-form__text--bottom block__elem--80">Receive updates about key news and special offers</p>
                            <form className="email">
                                <label className="email__label blog__text--semibold" htmlFor="">EMAIL ADDRESS</label>
                                <input type="text" className="email__input"/>
                                <div className="email-policy">
                                    <div>
                                        <input type="checkbox"/>
                                        <span>I agree to the <span>Terms of service</span> and <span>Privacy policy</span></span>
                                    </div>
                                    <button className="button blog-category__button text-sm button__solid--red-white button--red-white" type="submit">submit</button>
                                </div>
                            </form>
                        </div>
                    </Container>
                </div>
            }
        </div>
    )
}

export default SubscribeForm;