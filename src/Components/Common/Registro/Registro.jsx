import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";

import { useFormik } from "formik";
import * as Yup from "yup";
import "./Registro.css";
import { Link } from "react-router-dom";

const Registro = () => {
  const { handleChange, handleSubmit, values, setFieldValue, errors } =
    useFormik({
      initialValues: {
        name: "",
        edad: "",
        domicilio: "",
        telefono: "",
        email: "",
        password: "",
      },

      validationSchema: Yup.object({
        name: Yup.string().required("ingrese un nombre"),
        edad: Yup.number().required("ingrese su edad"),
        domicilio: Yup.string().required("ingrese su domicilio"),
        telefono: Yup.number().required("ingrese número telefono"),
        email: Yup.string().required("ingrese un email"),
        password: Yup.string().required("ingrese una contraseña"),
      }),
      onSubmit: (data) => {
        console.log(data);
      },
    });

  return (
    <div>
      <Typography color="primary" variant="h2" align="center" margin="50px">
        Formulario de Registro
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
              label="ingresa tu nombre"
              variant="outlined"
              value={values.name}
              onChange={(e) => {
                setFieldValue("name", e.target.value);
              }}
              error={errors.name}
              helperText={errors.name}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="number"
              label="ingresa edad"
              variant="outlined"
              value={values.edad}
              onChange={(e) => {
                setFieldValue("edad", e.target.value);
              }}
              error={errors.edad}
              helperText={errors.edad}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="text"
              name="domicilio"
              label="Ingrese su domicilio"
              variant="outlined"
              value={values.domicilio}
              onChange={handleChange}
              error={errors.domicilio}
              helperText={errors.domicilio}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="number"
              name="telefono"
              label="Ingrese su telefono"
              variant="outlined"
              value={values.telefono}
              onChange={handleChange}
              error={errors.telefono}
              helperText={errors.telefono}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="email"
              name="email"
              label="Ingrese su mail..."
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              helperText={errors.email}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <TextField
              type="password"
              name="password"
              label="Ingrese su password"
              variant="outlined"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              helperText={errors.password}
              fullWidth
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="outlined">
          Enviar Formulario
        </Button>

        <Link
          to="/"
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
          <Button>Volver a la pagina principal ...</Button>
        </Link>
      </form>
    </div>
  );
};

export default Registro;
