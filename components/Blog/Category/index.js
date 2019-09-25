
const Category = ({blogs}) => {
    
    // console.log(blogs);
    

    const filterCategory = Object.keys(blogs).reduce((result, key) => {
        const curr = blogs[key]
        if (!result.includes(curr.category)) result.push(curr.category)
    
        return result
    }, [])

    return (
        <div className="blog-categories blog__text">
            {filterCategory.map((cat, index) => 
                <p className="link link--black" key={index}>{cat}</p>
            )}        
        </div>
    )
}

export default Category;

