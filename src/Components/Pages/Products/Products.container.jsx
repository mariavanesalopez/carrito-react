import React, { useEffect, useState } from "react";


import Prod from "./Products";
import Products from "./Products";
import { deleteProduct, getProducts, updateProduct } from "../../../Services/ProductService";

const ProductsContainer = () => {
  const [items, setItems] = useState([]);

  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    setIsChanged(false);
    const productos = getProducts();
    productos
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [isChanged]);


  const deleteProductById = (id) => {
    deleteProduct(id);
    setIsChanged(true);
  };

  return (
    <div>
      <Products
        items={items}
        deleteProductById={deleteProductById}
        
      />
    </div>
  );
};

export default ProductsContainer;
