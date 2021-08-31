import { useContext, useEffect, useState } from "react";
import { fetchProducts } from "../../api";
import { ProductListContext } from "../../context/ProductListContext";
import "./Pagination.css";
const Pagination = () => {
  const [products, setProducts] = useContext(ProductListContext);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    (async function () {
      setProducts({ loading: true });
      const response = await fetchProducts("5", String(currentPage));
      setProducts({
        count: response.data.count,
        rows: response.data.rows,
        loading: false,
      });
    })();
  }, [currentPage, setProducts]);
  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="pagination-container">
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={() => previousPage()}>
              Previous
            </button>
          </li>
          <li className="page-item disabled">
            <button className="page-link">{currentPage}</button>
          </li>

          <li className="page-item">
            <button className="page-link" onClick={() => nextPage()}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
