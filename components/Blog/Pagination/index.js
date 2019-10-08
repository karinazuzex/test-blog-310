import { Component } from 'react';
import { Link } from "components/ui";
import NextLink from "next/link";
import ArrowPagination from 'svg/ArrowPagination';
import Router from 'next/router'
 
class Pagination extends Component {

    render() {
        
        const { postsCount, currentPage } = this.props;
        const pages = Math.ceil(postsCount / 5);
        const { router: { query, pathname } } = this.props;   

        let category = '';

        if (query && query.category) {
            category = `&category=${query.category}`;
        }

        const pagesLink = [];

        let startPage = currentPage - 8;

        if (startPage < 2) {
            startPage = 1;
        }
        let countDisplayPages = 0;        

        if (currentPage > pages) {
            Router.push({pathname: pathname, query: { ...query, page: pages }});
        }

        for (let i = startPage; currentPage === 1 ? i <= currentPage + 2 : i <= currentPage + 1; i++) {
            if (countDisplayPages >= 10 || i === pages) break;

            const active = i === currentPage;
            
            pagesLink.push(
                <NextLink href={"?page=" + i + category} passHref prefetch key={i}>
                    <Link className={'pagination__link link--red' + (active ? ' active' : '')}><span>{i}</span></Link>
                </NextLink>
            );
            countDisplayPages++;
        }
        
        return (
            <div className={`pagination ${pages <= 1 ? "pagination--none" : ""}`}>
                {pages > 1 &&
                    <div className="pagination-block">                
                    {currentPage !== 1 &&
                    <NextLink href={"?page=" + (currentPage - 1) + category} passHref prefetch>
                        <Link className="link--red pagination--left pagination-arrow">
                            Previous
                            <div className="pagination-arrow__icon pagination-arrow--prev">
                                <ArrowPagination/>
                            </div>
                        </Link>
                    </NextLink>
                    }
                    <div className="pagination-pages">
                        {pagesLink}
                        {pages - currentPage > 3 &&
                            <span className="pagination__dots">...</span>
                        }
                        <NextLink href={"?page=" + (pages) + category} passHref prefetch>
                            <Link className={'pagination__link link--red'  + (currentPage === pages ? ' active' : '')}>
                                <span>{pages}</span>
                            </Link>
                        </NextLink>
                    </div>
                    {currentPage !== pages &&
                    <NextLink href={"?page=" + (currentPage + 1) + category} passHref prefetch>
                        <Link className="link--red pagination--right pagination-arrow">
                            Next
                            <div className="pagination-arrow__icon pagination-arrow--next">
                                <ArrowPagination/>
                            </div>  
                        </Link>
                    </NextLink>
                    }</div>
                }
            </div>
        )
    }
}

export default Pagination;