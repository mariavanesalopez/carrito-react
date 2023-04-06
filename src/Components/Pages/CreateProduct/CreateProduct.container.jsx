import { Button, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CreateProduct from './CreateProduct';
import { createProduct } from '../../../Services/ProductService';


const CreateProductContainer = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        descripcion: "",
      });
const navigate= useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
       
    
        let data = {
          name: newProduct.name,
          img: newProduct.img,
          price: Number(newProduct.price),
          descripcion: newProduct.descripcion,
        };
       const create= createProduct(data);
       create.then(res=>console.log(res)).catch(err=>console.log(err)) 
       navigate("/shop")
       //console.log(newProduct);
      };

      const handleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
      };

  return (
<CreateProduct handleChange={handleChange} handleSubmit={handleSubmit}/>
  )
}

export default CreateProductContainer