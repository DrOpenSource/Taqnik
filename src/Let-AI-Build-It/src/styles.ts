import styled from '@emotion/styled';

// Regular styles without pseudo-selectors
export const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "800px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    padding: "16px",
    boxSizing: "border-box",
    backgroundColor: "#fff",
  },
  chatContainer: {
    flex: 1,
    overflowY: "auto",
    marginTop: "12px",
    padding: "16px",
    backgroundColor: "#2a2a2a",
    borderRadius: "4px",
    width: "100%",
    boxSizing: "border-box",
  },
  userText: {
    color: "#fff",
    margin: "8px 0",
    padding: "8px",
  },
  llmText: {
    color: "#ccc",
    margin: "8px 0",
    padding: "8px",
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
    padding: "8px",
    backgroundColor: "#2a2a2a",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
};

// Styled components for elements that need pseudo-selectors
export const StyledInput = styled.input`
  flex: 1;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 8px 12px;
  height: 36px;
  font-size: 14px;
  outline: none;
  color: "#1a1a1a";
  background-color: #fff;
  box-sizing: border-box;

  &::placeholder {
    color: #a0aec0;
  }

  &:focus {
    border-color: #92c353;
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  color: #92c353;
  border: none;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #a8d967;
  }

  &:active {
    color: #7ba842;
  }
`;