import React from 'react';
import './Pagination.css';

const Pagination = ({ totalPages, nextPage, startPage }) => {
    const pageLinks = [];
    for (let i = startPage; (i <= startPage + 4) && (i <= totalPages); i++) {
        pageLinks.push(
            <li className={startPage === i ? 'page-item active' : 'page-item'} key={i} onClick={() => nextPage(i)} >
                <a className="page-link" href="#">{i}</a>
            </li>)
    }


    return (
        <div id="pagination">
            <nav aria-label="Page navigation">
                <ul className="pagination pagination-sm">
                    {startPage > 1 ? <li className='page-item' onClick={() => nextPage(totalPages - (totalPages - 1))} >
                        <a className="page-link" href="#">
                            <i className="fas fa-angle-double-left" />
                        </a>
                    </li> : ''}
                    {startPage > 1 ? <li className='page-item' onClick={() => nextPage(startPage - 1)} >
                        <a className="page-link" href="#">
                            <i className="fas fa-chevron-left" />
                        </a>
                    </li> : ''}
                    {pageLinks}
                    {totalPages > startPage ? <li className='page-item' onClick={() => nextPage(startPage + 1)} >
                        <a className="page-link" href="#">
                            <i className="fas fa-chevron-right" />
                        </a>
                    </li> : ''}
                    {totalPages > startPage ? <li className='page-item' onClick={() => nextPage(totalPages)} >
                        <a className="page-link" href="#">
                            <i className="fas fa-angle-double-right" />
                        </a>
                    </li> : ''}
                </ul>
            </nav>


        </div>
    )
}

export default Pagination;
