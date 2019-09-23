import { Container} from "components/grid";
import { Link } from "components/ui";
import { SubscribeForm } from "components/Blog";

const BlogItemPage = ({data}) => {
    const { id, title, category, body, autor, description, footerImage, headerImage, _firstPublishedAt } = data.allArticles[0];
    const optionsCreate = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    let newText = body.split('\n').map((item, i) => { 
        if(item.match(/\!\[\]\((.*)\)/)){
            return (
                <div className="blog__im">
                    <img src={item.match(/\!\[\]\((.*)\)/)[1]} className="block__elem--xs" key = {i}/>
                </div>
            ); 
        }
        return <p className="blog__text block__elem--xs" key = {i}> {item} </p>; 
    });

    let images = body.match(/\!\[\]\((.*)\)/);
    console.log(images);

    const dateCreate = new Date(_firstPublishedAt).toLocaleString("en-US", optionsCreate);

    const time = Math.ceil(body.split(/\s/).length / 200);
    
    return (
        <section className="blog-item section section__promo section__promo--home pb-0 block__elem--xs">
            <Container>
                <h3 className="block__title text-bold">{title}</h3>
                <p className="blog__text blog__text--bottom">
                    <Link className="blog__text--underline link link--black">{autor}</Link>
                    <span> on </span>
                    <Link className="blog__text--underline link link--black">{category} </Link>
                    &bull; <span> {dateCreate} </span>&bull;
                    <span> {time} min read</span>
                </p>
                {headerImage &&
                    <div className="block__elem--xs">
                        <img src={headerImage.url} alt="header-image"/>
                    </div>
                }
                <div>{newText}</div>

                {footerImage &&
                    <div lassName="block__elem--xs">
                        <img src={footerImage.url} alt="footer-image"/>
                    </div>
                }
            </Container>
            <SubscribeForm footer/>
        </section>
    )
}

export default BlogItemPage;