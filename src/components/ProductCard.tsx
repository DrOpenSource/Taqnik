import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button, useTheme, useMediaQuery } from '@mui/material';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, image, price }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  return (
    <Card 
      onClick={() => navigate(`/product/${id}`)}
      sx={{ 
        height: '100%',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: isMobile ? 'none' : 'scale(1.02)',
          transition: 'transform 0.2s ease-in-out'
        },
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <CardMedia
        component="img"
        height={isMobile ? "140" : "200"}
        image={image}
        alt={name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, p: isMobile ? 2 : 3 }}>
        <Typography 
          gutterBottom 
          variant={isMobile ? "h6" : "h5"} 
          component="h2"
          sx={{ 
            fontSize: isMobile ? '1.1rem' : '1.5rem',
            mb: 1 
          }}
        >
          {name}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ 
            mb: 2,
            fontSize: isMobile ? '0.875rem' : '1rem'
          }}
        >
          {description}
        </Typography>
        <Typography 
          variant="h6" 
          color="primary"
          sx={{ 
            mt: 'auto',
            fontSize: isMobile ? '1rem' : '1.25rem'
          }}
        >
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;