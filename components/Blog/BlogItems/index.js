
import Arrow from 'svg/Arrow';
import { Link } from "components/ui";
import NextLink from "next/link";
        
const BlockItem = ({data, router: { pathname, query}}) => data.allArticles.map((item) => {

    const { _firstPublishedAt, title, category, autor, id, body } = item;    

    const optionsCreate = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }    

    const text = body.slice(0, 160).split(' ').slice(1,-1).join(' ').trim() + '...';

    const dateCreate = new Date(_firstPublishedAt).toLocaleString("en-US", optionsCreate);

    const time = Math.ceil(body.split(/\s/).length / 200);
                

    return (
        <div className="block__blog block__elem--40" key={id}>
            <h4 className="blog__title blog__text--bottom">{title}</h4>
            <p className="blog__text blog__text--bottom">
                <NextLink href={{pathname: pathname, query: { ...query, autor: autor }}} passHref prefetch >
                    <Link className="blog__text--underline link link--black">{autor}</Link>
                </NextLink>
                <span> on </span>
                <NextLink href={{pathname: pathname, query: { ...query, category: category }}} passHref prefetch>
                    <Link className="blog__text--underline link link--black">{item.category} </Link>
                </NextLink>
                &bull; <span> {dateCreate} </span>&bull;
                <span> {time} min read</span>
            </p>
            <p className="blog__text blog__text--bottom">{text}</p>
            <NextLink href={{ pathname: 'blog/[id]', query: { item }}} as={`/blog/${id}`} passHref prefetch>
                <Link className="button__arrow link link--red">
                    <span className="blog__text">Continue reading</span>
                    <Arrow />
                </Link>
            </NextLink>
        </div>
    )
});

export default BlockItem;