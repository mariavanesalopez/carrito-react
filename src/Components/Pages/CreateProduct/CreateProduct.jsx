import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const CreateProduct = ({handleChange, handleSubmit}) => {
  return (
    <div>
    <Typography  color="primary" variant="h4" align="center" margin="50px">
      Ingresa los datos del nuevo Producto
    </Typography>
    <form className="formulario" onSubmit={handleSubmit}>
      <Grid
        container
        alignItems={"center"}
        justifyContent="space-evenly"
        spacing={2}
        sx={{ width: "100%" }}
      >
        <Grid item xs={12} md={7}>
          <TextField
            type="text"
            label="ingresa nombre del producto"
            variant="outlined"
            name="name"
            //value={values.name}
            onChange={handleChange}
            // error={errors.name}
            // helperText={errors.name}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={7}>
          <TextField
            type="text"
            label="url del producto"
            variant="outlined"
            name="img"
            //value={values.name}
            onChange={handleChange}
            // error={errors.name}
            // helperText={errors.name}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={7}>
          <TextField
            type="number"
            label="ingresa el precio"
            variant="outlined"
            name="price"
            //value={values.price}
            onChange={handleChange}
            // error={errors.price}
            //helperText={errors.price}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={7}>
          <TextField
            type="text"
            label="descripcion del producto"
            variant="outlined"
            name="descripcion"
            //  value={values.descripcion}
            onChange={handleChange}
            //  error={errors.descripcion}
            // helperText={errors.descripcion}
            fullWidth
          />
        </Grid>
      </Grid>
      
      <Button type="submit" variant="outlined">
        Agregar Nuevo Producto
      </Button>
    </form>
  </div>
  )
}

export default CreateProduct