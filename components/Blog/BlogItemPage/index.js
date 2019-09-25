import { Container} from "components/grid";
import Meta from 'components/Meta';
import { Link } from "components/ui";
import NextLink from "next/link";
import  SubscribeForm from "components/Form/Subscribe";

const BlogItemPage = ({data}) => {
    const { id, 
            title, 
            category, 
            body, 
            autor, 
            description, //: { title: seoTitle, description: seoDescription, image: seoImage }, 
            footerImage, 
            headerImage, 
            _firstPublishedAt
        } = data.allArticles[0];
    let seoTitle = '', seoDescription = '', seoImage = { url: ''};
    if (description) {
        seoTitle = description.title
        seoDescription = description.description
        seoImage = description.image
    }
    const optionsCreate = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    let newText = body.split('\n').map((item, i) => { 
        if(item.match(/\!\[\]\((.*)\)/)){
            return (
                <div className="block__elem--40 blog__helper">
                    <img src={item.match(/\!\[\]\((.*)\)/)[1]} key = {i}/>
                </div>
            ); 
        }
        return <p className="blog__text block__elem--40" key = {i}> {item} </p>; 
    });

    const dateCreate = new Date(_firstPublishedAt).toLocaleString("en-US", optionsCreate);

    const time = Math.ceil(body.split(/\s/).length / 200);
    
    return (
        <section className="blog-item section section__promo section__promo--home pb-0 block__elem--xs">
        <Meta title={seoTitle} description={seoDescription} img={seoImage.url}/>
            <Container>
                <h3 className="block__title text-bold block__elem--xs">{title}</h3>
                <p className="blog__text blog__text--bottom block__elem--50">
                    <NextLink href={"/"} passHref prefetch>
                        <Link className="blog__text--underline link link--black">{autor}</Link>
                    </NextLink>
                    <span> on </span>
                    <NextLink href={"/"} passHref prefetch>
                        <Link className="blog__text--underline link link--black">{category} </Link>
                    </NextLink>
                    &bull; <span> {dateCreate} </span>&bull;
                    <span> {time} min read</span>
                </p>
                {headerImage &&
                    <div className="block__elem--50 blog__helper">
                        <img src={headerImage.url} alt="header-image"/>
                    </div>
                }
                <div>{newText}</div>

                {footerImage &&
                    <div className="block__elem--50 blog__helper">
                        <img src={footerImage.url} alt="footer-image"/>
                    </div>
                }
                <SubscribeForm footer/>
            </Container>
            
        </section>
    )
}

export default BlogItemPage;