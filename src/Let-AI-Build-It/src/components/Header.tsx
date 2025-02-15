import React from "react";
import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  margin: 70px;
  padding: 0;
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const GreenText = styled.span`
  color: #92c353;
`;

const Subtitle = styled.p`
  margin: 8px 0 0 0;
  color: #666;
  font-size: 16px;
`;

const BoltIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    style={{ color: '#92c353' }}
  >
    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
  </svg>
);

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>
        <GreenText>Let AI Build It</GreenText> <BoltIcon />
      </Title>
      <Subtitle>Tell us what you need. We'll tell you how AI can crush it.</Subtitle>
    </HeaderContainer>
  );
};
