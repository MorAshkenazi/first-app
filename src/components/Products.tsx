// array loops
import { FunctionComponent } from "react";
import Product from "../interfaces/Product";

interface ProductsProps {}

const Products: FunctionComponent<ProductsProps> = () => {
  let products: Product[] = [
    { id: 1, name: "Laptop", price: 5600 },
    { id: 2, name: "Desktop", price: 4100 },
    { id: 3, name: "DOK", price: 50 },
  ];

  // let products: Product[] = [];
  return (
    <>
      <h2>Products</h2>
      {products.length ? (
        products.map((product: Product) => (
          <div key={product.id}>
            {product.name}, {product.price}
          </div>
        ))
      ) : (
        <p>There are no products</p>
      )}
    </>
  );
};

export default Products;
