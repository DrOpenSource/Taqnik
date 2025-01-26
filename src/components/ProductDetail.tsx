import React from 'react';
import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button, Container, Grid, Link, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import ArticleIcon from '@mui/icons-material/Article';

interface ProductDetailProps {
  products: {
    id: number;
    name: string;
    description: string;
    image: string;
    website?: string;
    playStoreLink?: string;
    privacyPolicy?: string;
    termsOfUse?: string;
  }[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  // Function to create URL-friendly slug
  const createSlug = (name: string) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ mb: 3 }}
      >
        Back to Products
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>

          {(product.website || product.playStoreLink) && (
            <Box sx={{ mb: 3 }}>
              {product.website && (
                <Button
                  variant="contained"
                  color="primary"
                  href={product.website}
                  target="_blank"
                  endIcon={<LaunchIcon />}
                  sx={{ mr: 2, mb: 1 }}
                >
                  Visit Website
                </Button>
              )}
              {product.playStoreLink && (
                <Button
                  variant="contained"
                  color="primary"
                  href={product.playStoreLink}
                  target="_blank"
                  endIcon={<LaunchIcon />}
                  sx={{ mb: 1 }}
                >
                  Download on Play Store
                </Button>
              )}
            </Box>
          )}
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ my: 4 }} />
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="outlined"
              component={RouterLink}
              to={`/product/${id}/${createSlug(product.name)}/privacy-policy`}
              startIcon={<ArticleIcon />}
            >
              View Privacy Policy
            </Button>
            <Button
              variant="outlined"
              component={RouterLink}
              to={`/product/${id}/${createSlug(product.name)}/terms-of-use`}
              startIcon={<ArticleIcon />}
            >
              View Terms of Use
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail; 