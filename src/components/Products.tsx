import { map } from "lodash";
import Product from "./Product";

const Products = () => {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {map([1, 2, 3, 4, 5, 6], (p, index) => (
            <Product key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
