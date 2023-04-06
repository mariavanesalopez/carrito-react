import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({e, deleteProductById}) => {
  return (
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
        image={e.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {e.name}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          ${e.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {e.descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteProductById(e.id)} size="small">
          Eliminar 
        </Button>
       
    
    <Link to={`/productDetail/${e.id}`}><Button>Ver Detalle</Button></Link>
        
        </CardActions>
    </Card>
  </div>
  )
}

export default ProductCard