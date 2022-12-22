const Product = () => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          width="100%"
          height="400"
          src="https://softech.kg/image/cache/952e36750902894b2ec8c26ca36ee63d.jpg"
          alt="Product images"
        />

        <div className="card-body">
          <p className="card-text">Title</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a
                href={`/products/`}
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </a>
            </div>
            <b>$ 20.00</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
