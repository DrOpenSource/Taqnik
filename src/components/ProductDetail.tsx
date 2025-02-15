import React from 'react';
import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Divider,
  useTheme,
  useMediaQuery 
} from '@mui/material';
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
    <Container maxWidth="lg" sx={{ py: isMobile ? 2 : 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ mb: isMobile ? 2 : 3 }}
      >
        Back to Products
      </Button>

      <Grid container spacing={isMobile ? 2 : 4}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              borderRadius: '8px',
              overflow: 'hidden',
              mb: isMobile ? 2 : 0
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography 
            variant={isMobile ? "h5" : "h4"} 
            component="h1" 
            gutterBottom
            sx={{ fontSize: isMobile ? '1.5rem' : '2rem' }}
          >
            {product.name}
          </Typography>
          <Typography 
            variant="body1" 
            paragraph
            sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}
          >
            {product.description}
          </Typography>

          {(product.website || product.playStoreLink) && (
            <Box sx={{ 
              display: 'flex', 
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? 1 : 2,
              mb: 3 
            }}>
              {product.website && (
                <Button
                  fullWidth={isMobile}
                  variant="contained"
                  color="primary"
                  href={product.website}
                  target="_blank"
                  endIcon={<LaunchIcon />}
                >
                  Visit Website
                </Button>
              )}
              {product.playStoreLink && (
                <Button
                  fullWidth={isMobile}
                  variant="contained"
                  color="primary"
                  href={product.playStoreLink}
                  target="_blank"
                  endIcon={<LaunchIcon />}
                >
                  Download on Play Store
                </Button>
              )}
            </Box>
          )}
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ my: isMobile ? 2 : 4 }} />
          <Box sx={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row',
            gap: 2, 
            justifyContent: 'center' 
          }}>
            <Button
              fullWidth={isMobile}
              variant="outlined"
              component={RouterLink}
              to={`/product/${id}/${createSlug(product.name)}/privacy-policy`}
              startIcon={<ArticleIcon />}
            >
              View Privacy Policy
            </Button>
            <Button
              fullWidth={isMobile}
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