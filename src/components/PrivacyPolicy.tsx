import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface PrivacyPolicyProps {
  products: {
    id: number;
    name: string;
    privacyPolicy: string;
  }[];
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ products }) => {
  const { id, name } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  // Function to create URL-friendly slug
  const createSlug = (name: string) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  // Redirect if the URL slug doesn't match the product name
  React.useEffect(() => {
    if (name !== createSlug(product.name)) {
      navigate(`/product/${id}/${createSlug(product.name)}/privacy-policy`, { replace: true });
    }
  }, [id, name, product.name]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(`/product/${id}`)}
        sx={{ mb: 3 }}
      >
        Back to Product
      </Button>

      <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Privacy Policy for {product.name}
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
          {product.privacyPolicy}
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy; 