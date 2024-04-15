// Pagination Component 

import React from 'react';

function PaginationComponent() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20px', paddingTop: '30px'}}>
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link">Previous</a>
          </li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item" aria-current="page">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PaginationComponent;
