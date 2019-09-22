const EmailForm = () => {
    return (
        <form className="blog-form">
            <p className="blog__subtitle blog__subtitle--bottom">newsletter</p>
            <p className="blog-form__text blog-form__text--bottom">Receive updates about key news and special offers.</p>
            <label className="blog-form__label blog-form__label--bottom blog__text--semibold" htmlFor="">EMAIL ADDRESS</label>
            <input type="text"/>
            <button className="button blog-category__button text-sm button__solid--red-white button--red-white">subscribe</button>
        </form>
    )
}

export default EmailForm;