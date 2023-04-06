import { useFormik } from "formik";
import "./Login.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import * as Yup from "yup";


const Login = () => {
  {
    /*} const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
    });*/
  }

  const { handleChange, handleSubmit, values, setFieldValue, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },

      validationSchema: Yup.object({
        name: Yup.string().required("ingrese un nombre"),
        email: Yup.string().required("ingrese un email"),
        password: Yup.string().required("ingrese una contraseña"),
      }),
      onSubmit: (data) => {
        console.log(data);
      },
    });

  return (
    <div>
      <Typography color="primary" variant="h2" align="center">
        Formulario de Login
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
              name="name"
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
          Enviar
        </Button>
        <Typography color="primary" variant="h7" align="center">
          No estás registrado?
        </Typography>

        <Link to="/registro"
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
          📂 Registrarse
        </Link>
      </form>
    </div>
  );
};

export default Login;
