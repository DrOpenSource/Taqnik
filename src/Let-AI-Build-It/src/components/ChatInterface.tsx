import React from 'react';
import styled from '@emotion/styled';
import { useTheme, useMediaQuery } from '@mui/material';
import { Send } from 'lucide-react';

const ChatContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  height: ${props => props.isMobile ? 'calc(100vh - 64px)' : '100vh'};
  max-width: 100%;
  margin: 0 auto;
  padding: ${props => props.isMobile ? '16px' : '32px'};
  background: #ffffff;
`;

const Title = styled.h1<{ isMobile: boolean }>`
  font-size: ${props => props.isMobile ? '24px' : '32px'};
  color: #333;
  margin-bottom: ${props => props.isMobile ? '8px' : '16px'};
  text-align: center;
`;

const Subtitle = styled.p<{ isMobile: boolean }>`
  font-size: ${props => props.isMobile ? '14px' : '16px'};
  color: #666;
  margin-bottom: ${props => props.isMobile ? '16px' : '24px'};
  text-align: center;
`;

const InputContainer = styled.div<{ isMobile: boolean }>`
  position: relative;
  margin-top: auto;
  padding: ${props => props.isMobile ? '8px' : '16px'};
  background: #fff;
`;

const Input = styled.input<{ isMobile: boolean }>`
  width: 100%;
  padding: ${props => props.isMobile ? '12px 40px 12px 12px' : '16px 50px 16px 16px'};
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: ${props => props.isMobile ? '14px' : '16px'};
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4299e1;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.2);
  }
`;

const SendButton = styled.button<{ isMobile: boolean }>`
  position: absolute;
  right: ${props => props.isMobile ? '16px' : '24px'};
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: ${props => props.isMobile ? '8px' : '12px'};
  color: #4299e1;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #2b6cb0;
  }

  svg {
    width: ${props => props.isMobile ? '18px' : '24px'};
    height: ${props => props.isMobile ? '18px' : '24px'};
  }
`;

interface ChatInterfaceProps {
  chatInput: string;
  setChatInput: (input: string) => void;
  sendMessage: () => Promise<void>;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  chatInput,
  setChatInput,
  sendMessage,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <ChatContainer isMobile={isMobile}>
      <Title isMobile={isMobile}>Let AI Build It ⚡</Title>
      <Subtitle isMobile={isMobile}>
        Tell us what you need. We'll tell you how AI can crush it.
      </Subtitle>
      
      <form onSubmit={handleSubmit}>
        <InputContainer isMobile={isMobile}>
          <Input
            isMobile={isMobile}
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Type a message..."
            aria-label="Chat input"
          />
          <SendButton 
            isMobile={isMobile}
            type="submit"
            aria-label="Send message"
          >
            <Send />
          </SendButton>
        </InputContainer>
      </form>
    </ChatContainer>
  );
};

export default ChatInterface; 