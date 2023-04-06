import React, { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  getProductById,
  updateProduct,
} from "../../../Services/ProductService";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

const ProductDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [showForm, setShowForm] = useState(false);

  //Anchor---->CONTEXTO//no
  
  const [productSelected, setProductSelected] = useState({
    name: product?.name,
  });
  const [isUpdate, setIsUpdate] = useState(false);
  const { id } = useParams();

  console.log(id); //desestructuro ese objeto parametro
  useEffect(() => {
    setIsUpdate(false);
    let producto = getProductById(id);
    producto
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [isUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, productSelected);
    setIsUpdate(true);
  };
  return (
    <div>
      <ProductDetail
        product={product}
        showForm={showForm}
        setShowForm={setShowForm}
        handleSubmit={handleSubmit}
        setProductSelected={setProductSelected}
        productSelected={productSelected}
        
      />
    </div>
  );
};

export default ProductDetailContainer;
