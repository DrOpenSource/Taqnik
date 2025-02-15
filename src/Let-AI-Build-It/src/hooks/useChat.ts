import { useState, useEffect } from "react";
import { generateSessionId } from "../utils/generateSessionId";
import { Message, ChatResponse } from "../types";

/**
 * Custom hook to manage chat state and logic.
 * It handles generating a session ID, managing chat input,
 * sending messages, and storing chat messages.
 */
export const useChat = () => {
  const [sessionId, setSessionId] = useState<string>("");
  const [chatInput, setChatInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  // Generate a session ID when the component mounts.
  useEffect(() => {
    setSessionId(generateSessionId());
  }, []);

  /**
   * Sends the current chat input to the API and updates the messages.
   */
  const sendMessage = async (): Promise<void> => {
    if (!chatInput.trim()) return;

    const userMessage: Message = { sender: "user", text: chatInput };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch(
        "http://localhost:5678/webhook/f7cafdb6-80d9-4d1b-b71d-3318f84a959a",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YOUR_HARDCODED_BEARER_TOKEN",
          },
          body: JSON.stringify({
            sessionId: sessionId,
            chatinput: chatInput,
          }),
        }
      );
      const data: ChatResponse = await response.json();
      // Ensure we have a valid string for the message text
      const messageText = data?.output || "[No response received]";
      setMessages((prev) => [...prev, { sender: "llm", text: messageText }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "llm", text: `[Error receiving response] ${error}` },
      ]);
    }
    setChatInput("");
  };

  return {
    sessionId,
    chatInput,
    messages,
    sendMessage,
    setChatInput,
  };
};
