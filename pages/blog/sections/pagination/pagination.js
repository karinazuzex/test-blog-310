import React, { PureComponent } from 'react';
import { Link } from "components/ui";
import NextLink from "next/link";
import ArrowPagination from 'svg/ArrowPagination';
 
class Pagination extends PureComponent {
    
    render() {
        
        const { postsCount, currentPage, routePage } = this.props;

        const pages = Math.ceil(postsCount / 5);

        console.log(routePage);
        console.log(currentPage);
        
        

        const pagesLink = [];

        let startPage = currentPage - 8;

        if (startPage < 2) {
            startPage = 1;
        }
        let countDisplayPages = 0
        for (let i = startPage; i <= pages -1; i++) {
            if (countDisplayPages >= 10) break;
            const active = i === currentPage;
            
            pagesLink.push(
                <NextLink href={"?page=" + i} passHref prefetch key={i}>
                    <Link className={'pagination__link link--red' + (active ? ' active' : '')}><span>{i}</span></Link>
                </NextLink>
            );
            countDisplayPages++;
        }

        // const finishArray = pagesLink.slice(startPage -1 , currentPage+1)

        // console.log(finishArray);
        

        // if (pages < 3 || (pages - currentPage) >= 2) {
        //     console.log(1);
            
        //     pagesLink.splice((pages - 1), 0, <span>...</span>)
        // }

        return (
            <div className="pagination">
                {currentPage !== 1 &&
                <NextLink href={"?page=" + (currentPage - 1)} passHref prefetch>
                    <Link className="link--red pagination--left pagination-arrow">
                        Previus
                        <div className="pagination-arrow__icon pagination-arrow--prev">
                            <ArrowPagination/>
                        </div>
                    </Link>
                </NextLink>
                }
                <div className="pagination-pages">
                    {pagesLink}
                    {pages - currentPage >= 2 &&
                        <span className="pagination__dots">...</span>
                    }
                    <NextLink href={"?page=" + (pages)} passHref prefetch>
                        <Link className="link--red pagination__link">
                            <span>{pages}</span>
                        </Link>
                    </NextLink>
                </div>
                {currentPage !== pages &&
                <NextLink href={"?page=" + (currentPage + 1)} passHref prefetch>
                    <Link className="link--red pagination--right pagination-arrow">
                        Next
                        <div className="pagination-arrow__icon pagination-arrow--next">
                            <ArrowPagination/>
                        </div>
                    </Link>
                </NextLink>
                }
            </div>
        )
    }
}

export default Pagination;