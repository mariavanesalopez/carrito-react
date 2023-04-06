import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import ItemCount from "../../Common/ItemCount/ItemCount";

const ProductDetail = ({
  product,
  showForm,
  setShowForm,
  productSelected,
  setProductSelected,
  handleSubmit
}) => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "10px",
        }}
      >
        <Card sx={{ width: 300 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="190"
            image={product.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
              ${product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.descripcion}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => setShowForm(true)}>Editar Producto</Button>
            
            </CardActions>
        </Card>
      </div>
      <div>
        {showForm && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              defaultValue={product?.name}
              onChange={(e) =>
                setProductSelected({ ...productSelected, name: e.target.value })
              }
            />
            <button>Guardar cambios</button>
          </form>
        )}
      </div>
      <ItemCount product={product}/>
    </div>
  );
};

export default ProductDetail;
