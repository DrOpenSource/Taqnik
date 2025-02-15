import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme, useMediaQuery } from '@mui/material';
import { Mail } from 'lucide-react';

const FooterContainer = styled.footer<{ isMobile: boolean }>`
  background-color: #4338ca;
  padding: ${props => props.isMobile ? '32px 16px' : '48px 0'};
  color: white;
  width: 100%;
`;

const ContentWrapper = styled.div<{ isMobile: boolean }>`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  align-items: ${props => props.isMobile ? 'center' : 'flex-start'};
  justify-content: space-between;
  gap: ${props => props.isMobile ? '24px' : '48px'};
`;

const NewsletterSection = styled.div<{ isMobile: boolean }>`
  flex: 1;
  max-width: ${props => props.isMobile ? '100%' : '600px'};
  text-align: ${props => props.isMobile ? 'center' : 'left'};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const Title = styled.h2<{ isMobile: boolean }>`
  font-size: ${props => props.isMobile ? '24px' : '32px'};
  margin-bottom: 8px;
  font-weight: 600;
`;

const Description = styled.p<{ isMobile: boolean }>`
  font-size: ${props => props.isMobile ? '14px' : '16px'};
  margin-bottom: 24px;
  opacity: 0.9;
`;

const Form = styled.form<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  gap: ${props => props.isMobile ? '12px' : '8px'};
  width: 100%;
`;

const Input = styled.input<{ isMobile: boolean }>`
  padding: ${props => props.isMobile ? '12px' : '14px 16px'};
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  width: ${props => props.isMobile ? '100%' : '70%'};
  font-size: ${props => props.isMobile ? '14px' : '16px'};

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const SubscribeButton = styled.button<{ isMobile: boolean }>`
  padding: ${props => props.isMobile ? '12px' : '14px 24px'};
  background-color: white;
  color: #4338ca;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  width: ${props => props.isMobile ? '100%' : 'auto'};
  font-size: ${props => props.isMobile ? '14px' : '16px'};

  &:hover {
    background-color: #f8fafc;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const LinksSection = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  gap: ${props => props.isMobile ? '24px' : '48px'};
  text-align: ${props => props.isMobile ? 'center' : 'left'};
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const LinkTitle = styled.h3<{ isMobile: boolean }>`
  font-size: ${props => props.isMobile ? '16px' : '18px'};
  font-weight: 600;
  margin-bottom: 8px;
`;

const Link = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

const Newsletter: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <FooterContainer isMobile={isMobile}>
      <ContentWrapper isMobile={isMobile}>
        <NewsletterSection isMobile={isMobile}>
          <IconWrapper>
            <Mail size={24} />
          </IconWrapper>
          <Title isMobile={isMobile}>Stay Updated</Title>
          <Description isMobile={isMobile}>
            Get the latest updates on products, blog posts, and AI tools.
          </Description>
          <Form isMobile={isMobile} onSubmit={handleSubmit}>
            <Input
              isMobile={isMobile}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <SubscribeButton isMobile={isMobile} type="submit">
              Subscribe
            </SubscribeButton>
          </Form>
        </NewsletterSection>

        <LinksSection isMobile={isMobile}>
          <LinkColumn>
            <LinkTitle isMobile={isMobile}>Company</LinkTitle>
            <Link href="/about">About</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle isMobile={isMobile}>Resources</LinkTitle>
            <Link href="/blog">Blog</Link>
            <Link href="/documentation">Documentation</Link>
            <Link href="/help">Help Center</Link>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle isMobile={isMobile}>Legal</LinkTitle>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </LinkColumn>
        </LinksSection>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Newsletter;