import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface TermsOfUseProps {
  products: {
    id: number;
    name: string;
    termsOfUse: string;
  }[];
}

const TermsOfUse: React.FC<TermsOfUseProps> = ({ products }) => {
  const { id, name } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  const createSlug = (name: string) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  React.useEffect(() => {
    if (name !== createSlug(product.name)) {
      navigate(`/product/${id}/${createSlug(product.name)}/terms-of-use`, { replace: true });
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
          Terms of Use for {product.name}
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
          {product.termsOfUse}
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsOfUse; 