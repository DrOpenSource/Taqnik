import React from "react";
import { useChat } from "./hooks/useChat";
import { ChatMessages } from "./components/ChatMessages";
import { ChatInput } from "./components/ChatInput";
import { Header } from "./components/Header";
import { styles } from './styles';

/**
 * Main App Component
 * Combines the custom hook and reusable components to form the chat interface.
 */
const LetAIBuildIt: React.FC = () => {
  const { chatInput, messages, sendMessage, setChatInput } = useChat();

  return (
    <div style={styles.container}>
      <Header />
      <ChatInput
        chatInput={chatInput}
        setChatInput={setChatInput}
        sendMessage={sendMessage}
        styles={styles}
      />
      <ChatMessages messages={messages} styles={styles} />
    </div>
  );
};

export default LetAIBuildIt;
