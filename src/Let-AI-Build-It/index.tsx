import React from 'react';
import styled from '@emotion/styled';
import { useTheme, useMediaQuery } from '@mui/material';
import { useChat } from './src/hooks/useChat';
import { ChatMessages } from './src/components/ChatMessages';
import ChatInterface from './src/components/ChatInterface';

const AppContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: ${props => props.isMobile ? '100%' : '1200px'};
  margin: 0 auto;
  background: #ffffff;
  overflow: hidden;
`;

const MessagesWrapper = styled.div<{ isMobile: boolean }>`
  flex: 1;
  overflow-y: auto;
  padding: ${props => props.isMobile ? '8px' : '16px'};
  margin-bottom: ${props => props.isMobile ? '60px' : '80px'};
`;

const LetAIBuildIt: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { chatInput, setChatInput, messages, sendMessage } = useChat();

  return (
    <AppContainer isMobile={isMobile}>
      <MessagesWrapper isMobile={isMobile}>
        <ChatMessages messages={messages} />
      </MessagesWrapper>
      <ChatInterface
        chatInput={chatInput}
        setChatInput={setChatInput}
        sendMessage={sendMessage}
      />
    </AppContainer>
  );
};

export default LetAIBuildIt; 