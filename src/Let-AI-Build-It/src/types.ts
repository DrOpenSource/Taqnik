// Define the Message interface for chat messages.
export interface Message {
  sender: "user" | "llm"; // 'user' for user messages, 'llm' for API responses.
  text: string; // The text content of the message.
}

// Define the ChatResponse interface for API responses.
export interface ChatResponse {
  output?: string;
}

// Interface for the props of the ChatMessages component.
export interface ChatMessagesProps {
  messages: Message[];
  styles: { [key: string]: React.CSSProperties };
}

// Interface for the props of the ChatInput component.
export interface ChatInputProps {
  chatInput: string;
  setChatInput: (value: string) => void;
  sendMessage: () => void;
  styles: { [key: string]: React.CSSProperties };
}
