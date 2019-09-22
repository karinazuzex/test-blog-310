import { Component } from 'react';
import { Link } from "components/ui";
import NextLink from "next/link";
import ArrowPagination from 'svg/ArrowPagination';
 
class Pagination extends Component {
    
    render() {
        
        const { postsCount, currentPage } = this.props;
        const pages = Math.ceil(postsCount / 5);

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
                        <Link className={'pagination__link link--red'  + (currentPage === pages ? ' active' : '')}>
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