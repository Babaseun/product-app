import React, { useContext } from "react";
import { ProductListContext } from "../../context/ProductListContext";
import "./Pagination.css";
const Pagination = () => {
  const [products,setProducts] = useContext(ProductListContext)
  return (
    <div className="pagination-container">
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href="ww">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="ww">
              1
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="ww">
              2 <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="ww">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="ww">
              {products.count}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="ww">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
