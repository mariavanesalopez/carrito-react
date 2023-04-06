import { productInstance } from "./ProductInstance";

export const getProducts = () => {
  let productos = productInstance.get();
  return productos;
};

export const getProductById = (id) => {
  let producto = productInstance.get(`/${id}`);
  return producto;
};

export const deleteProduct = (id) => {
  return productInstance.delete(`/${id}`);
};

export const updateProduct = (id, data) => {
  return productInstance.patch(`/${id}`, data);
};

export const createProduct = (data) => {
  return productInstance.post("/", data);
};
