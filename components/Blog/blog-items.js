
import Arrow from 'svg/Arrow';
import { Link } from "components/ui";
        
const BlockItem = ({data}) => data.allArticles.map((item) => {

    const { _firstPublishedAt, title, autor, id, body } = item;

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
                <Link className="blog__text--underline link link--black">{autor}</Link>
                <span> on </span>
                <Link className="blog__text--underline link link--black">{item.category} </Link>
                &bull; <span> {dateCreate} </span>&bull;
                <span> {time} min read</span>
            </p>
            <p className="blog__text blog__text--bottom">{text}</p>
            <Link className="button__arrow link link--red">
                <span className="blog__text">Continue reading</span>
                <Arrow />
            </Link>
            
        </div>
    )
});

export default BlockItem;