import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, image, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <Card 
      onClick={handleClick}
      sx={{ 
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.2s ease-in-out'
        }
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;