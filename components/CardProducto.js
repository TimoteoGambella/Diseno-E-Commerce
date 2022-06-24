import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import foto from '../public/img/babuchas.jpeg';


export default function CardProducto({product}) {

    return (
    <Card sx={{ maxWidth: 345 }}>
      <div className='card-image'>
        {product && <CardMedia
          component="img"
          alt="producto"
          height={140}
          width={140}
          image={foto}
        />}
      </div>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product && product.Nombre}
        </Typography>
        <Typography variant="body1" color="text.secondary" className='desc-card-tienda'>
          {product && product.Descripcion}
        </Typography>
        <Typography variant="p" color="text.secondary" className='precio-card-tienda'>
          {product && `Precio: $${product.Precio}`}
        </Typography>
        <Typography variant="p" color="text.secondary" className='precio-card-tienda'>
          {product && `Precio: $${product.talle}`}
        </Typography>
      </CardContent>
     
    </Card>
  );
}