import { useState, useEffect } from 'react';
import Axios from 'axios';

import Navbar from './Navbar';
import Pagination from './Pagination';

export default function App() {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    Axios.get("https://dummyjson.com/products")
      .then(response => {
        const { products, total, limit } = response.data;
        setTotalPages((total / limit).toFixed());
        setProducts(products);
      })
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {
            products.map(product => {
              return (
                <div key={product.id} className="col-4">
                  <div className="card my-4">
                    <img
                      src={product.thumbnail}
                      className="card-img-top"
                      style={{
                        width: "auto",
                        height: "200px",
                        objectFit: "cover"
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title fs-6">{product.title}</h5>
                      <p className="card-text">{product.description.substring(0, 30)}...</p>
                      <a href="#" className="btn btn-primary">View details</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <Pagination pages={totalPages} />
      </div>
    </>
  )
}
