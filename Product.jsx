import React from "react";
import { data } from "../data/data";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryparams = new URLSearchParams(location.search); // these
  console.log(queryparams);
  //extract the parameters
  const category = queryparams.get("category");
  const sort = queryparams.get("sort");

  //filtering the products
  const filteredProduct = data.filter((product) =>
    category ? product.category === category : true
  );
  console.log(filteredProduct);
  // sorting the product
  if (sort === "asc") {
    filteredProduct.sort((a, b) => a.price - b.price);
  } else if (sort === "des") {
    filteredProduct.sort((a, b) => b.price - a.price);
  }

  function HandleFilter(key, value) {
    if (value) {
      queryparams.set(key, value);
    } else {
      queryparams.delete(key);
    }
    navigate(`?${queryparams.toString()}`);
  }
  return (
    <div className="container">
      <h1 className="heading">Shop The Best summer deals</h1>
      {/* category filters section start */}
      <div className="caat">
      <div className="category">
        <h3 className="sub-heading">filter by category</h3>
        {/* button start */}
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            onClick={() => HandleFilter("category", "men's clothing")}
            className="btn btn-outline-primary"
          >
            men's clothing
          </button>
          <button
            type="button"
            onClick={() => HandleFilter("category", "women's clothing")}
            className="btn btn-outline-warning"
          >
            womens' clothing
          </button>
          <button
            type="button"
            onClick={() => HandleFilter("category", "electronics")}
            className="btn btn-outline-danger"
          >
            electronics
          </button>
          <button
            type="button"
            onClick={() => HandleFilter("category", "jewelery")}
            className="btn btn-outline-success"
          >
            jewelery
          </button>
          <button
            type="button"
            onClick={() => HandleFilter("category", "")}
            className="btn btn-outline-info"
          >
            all products
          </button>
        </div>
        {/* button end */}
      </div>
      {/* category filters section end */}

      {/* sorting buttons start */}
      <div className="sort-products">
      <h3 className="sub-heading-2">filter by price</h3>
        <div className="btn-group-2" role="group" aria-label="Basic example">
          <button
            type="button"
            onClick={() => HandleFilter("sort", "asc")}
            className="btn btn-outline-success"
          >
            Low
          </button>
          <button
            type="button"
            onClick={() => HandleFilter("sort", "des")}
            className="btn btn-outline-danger"
          >
            High
          </button>
        </div>
        </div>
      </div>
      {/* sorting buttons end */}
      {/* products start */}
      <div className="row my-3 gy-3">
        {filteredProduct.length > 0
          ? filteredProduct.map((ele) => (
              <div className=" col-sm-12 col-md-4 col-lg-4">
                <div className="card p-4">
                  <img className="card-img"src={ele.image} alt="" width={"100%"} height={"200px"} />
                  <h6 className="card-title">{ele.title}</h6>
                  <p className="card-text">{ele.price}</p>
                </div>
              </div>
            ))
          : "no-product found"}
      </div>
      {/* products end */}
    </div>
  );
};

export default Product;
