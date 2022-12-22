import React from "react";

const ProductView = () => {
  return (
    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading">title</h2>
        <p className="lead">description</p>
        <div>
          <button type="button" className="btn btn-primary">
            BUY NOW
          </button>
        </div>
      </div>
      <div className="col-md-5 order-md-1">
        <img
          width="400"
          height="400"
          src="https://softech.kg/image/cache/952e36750902894b2ec8c26ca36ee63d.jpg"
          alt="Product images"
        />
      </div>
    </div>
  );
};

export default ProductView;
