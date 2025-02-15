import React from "react";
import ReactMarkdown from 'react-markdown';
import { ChatMessagesProps } from "../types";
import styled from '@emotion/styled';

const MarkdownContainer = styled.div`
  color: #2d3748;
  font-size: 15px;
  line-height: 1.6;
  
  pre {
    background-color: #f7fafc;
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    border: 1px solid #edf2f7;
    margin: 12px 0;
  }

  code {
    font-family: 'SF Mono', 'Menlo', monospace;
    background-color: #f7fafc;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 14px;
    color: #4a5568;
  }

  h2 {
    color: #2d3748;
    margin: 24px 0 16px 0;
    font-size: 1.5em;
    font-weight: 600;
  }

  h3 {
    color: #4a5568;
    margin: 20px 0 12px 0;
    font-size: 1.25em;
    font-weight: 500;
  }

  ul, ol {
    margin: 12px 0;
    padding-left: 24px;
  }

  li {
    margin: 6px 0;
    color: #4a5568;
  }

  p {
    margin: 12px 0;
    line-height: 1.7;
    color: #4a5568;
  }

  a {
    color: #4299e1;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    color: #2d3748;
    font-weight: 600;
  }
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  /* Hide scrollbar by default */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  /* Show scrollbar on hover */
  &:hover {
    scrollbar-width: thin;
    -ms-overflow-style: auto;
    &::-webkit-scrollbar {
      display: block;
      width: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 3px;
      
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

const MessageContainer = styled.div`
  margin: 16px 0;
  padding: 16px 20px;
  border-radius: 8px;
  background: #f8fafc;
  border: 1px solid #edf2f7;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
`;

const SenderLabel = styled.div`
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 8px;
  font-size: 14px;
`;

export const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  styles,
}) => {
  const formatJSON = (text: string) => {
    try {
      const json = JSON.parse(text);
      return `
# ${Object.keys(json)[0]}

${Object.entries(json[Object.keys(json)[0]]).map(([key, value]: [string, any]) => `
## ${key}
${typeof value === 'object' && value !== null 
  ? Object.entries(value).map(([subKey, subValue]: [string, any]) => `
### ${subKey}
${typeof subValue === 'object' && subValue !== null 
  ? Object.entries(subValue).map(([k, v]) => `- **${k}**: ${v}`).join('\n')
  : subValue
}`).join('\n')
  : value
}`).join('\n')}
`;
    } catch (e) {
      return text;
    }
  };

  return (
    <ChatContainer>
      {messages.map((msg, index) => (
        <MessageContainer key={index}>
          <SenderLabel>
            {msg.sender === "user" ? "You" : "AI Assistant"}
          </SenderLabel>
          <MarkdownContainer>
           
            
            <ReactMarkdown>
              {msg.sender === "llm" ? formatJSON(msg.text) : msg.text}
            </ReactMarkdown>
            
          </MarkdownContainer>
        </MessageContainer>
      ))}
    </ChatContainer>
  );
};
