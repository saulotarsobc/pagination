export const buttonStyle: React.CSSProperties = {
  padding: "6px 12px",
  margin: "0 4px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const activeButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  backgroundColor: "#0056b3",
  cursor: "default",
};

export const disabledButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  backgroundColor: "#c0c0c0",
  cursor: "not-allowed",
};

export const dotsStyle: React.CSSProperties = {
  margin: "0 4px",
  fontWeight: "bold",
};

// Estilo CSS inline para o seletor
export const selectStyle: React.CSSProperties = {
  padding: "6px 12px",
  margin: "0 10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
};
