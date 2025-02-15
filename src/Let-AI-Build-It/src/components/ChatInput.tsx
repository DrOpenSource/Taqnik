import React, { KeyboardEvent } from "react";
import { ChatInputProps } from "../types";
import { StyledInput, StyledButton } from "../styles"; // Import styled components

/**
 * ChatInput Component
 * Renders an input field and a button to send messages.
 */
export const ChatInput: React.FC<ChatInputProps> = ({
  chatInput,
  setChatInput,
  sendMessage,
  styles,
}) => {
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div style={styles.inputContainer}>
      <StyledInput // Replace regular input with StyledInput
        placeholder="Type a message..."
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <StyledButton // Replace regular button with StyledButton
        onClick={sendMessage}
        aria-label="Send message"
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </StyledButton>
    </div>
  );
};
