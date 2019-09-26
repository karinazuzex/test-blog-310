import { Link } from "components/ui";
import NextLink from "next/link";

const Category = ({ blogs } ) => {
    
    const filterCategory = Object.keys(blogs).reduce((result, key) => {
        const curr = blogs[key]
        if (!result.includes(curr.category)) result.push(curr.category)
    
        return result
    }, [])

    return (
        <div className="blog-categories blog__text">
            {filterCategory.map((cat, index) => 
                <NextLink href={'/blog' + '?'+ 'category=' + cat} passHref prefetch key={index}>
                    <Link className="link link--black">{cat}</Link>
                </NextLink>
            )}        
        </div>
    )
}

export default Category;

