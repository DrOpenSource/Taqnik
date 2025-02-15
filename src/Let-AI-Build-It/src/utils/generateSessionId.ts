// Utility function to generate a random session ID.
// This function converts a random number to a base-36 string and extracts a substring.
export const generateSessionId = (): string => {
  return "session_" + Math.random().toString(36).substr(2, 9);
};
