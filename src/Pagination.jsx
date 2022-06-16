import React from 'react';

export default function Pagination({ pages }) {
   console.log(pages)
   return (
      <nav aria-label="Page navigation example">
         <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            {
               Array.from({ length: pages }, (_, i) => {
                  return <li className="page-item"><a className="page-link" href="#">{i + 1}</a></li>
               })
            }
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
         </ul>
      </nav>
   );
}