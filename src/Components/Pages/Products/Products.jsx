import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Common/ProductCard/ProductCard";

const Products = ({ items, deleteProductById}) => {
  return (
    <div>
    <Link to="/create-product"> <button>Agregar Producto</button></Link>
   
      {items.map((e) => (
       <ProductCard key={e.id} e={e} deleteProductById={deleteProductById} />
      ))}

     
    </div>
  );
};

export default Products;
