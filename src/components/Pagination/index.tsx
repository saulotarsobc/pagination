import React, { useState } from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  // Calcula o número total de páginas
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Estado para a página atual
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Função para mudar de página
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page); // Chama a função de callback quando a página muda
    }
  };

  // Função para renderizar os botões de paginação
  const renderPagination = () => {
    if (totalPages <= 1) return null; // Não renderiza nada se houver apenas uma página

    const pages = [];

    // Botão para a primeira página
    if (currentPage > 2) {
      pages.push(
        <button key="first" onClick={() => goToPage(1)} style={buttonStyle}>
          1
        </button>
      );
    }

    // Reticências antes da página atual
    if (currentPage > 3) {
      pages.push(
        <span key="start-dots" style={dotsStyle}>
          ...
        </span>
      );
    }

    // Página antes da página atual
    if (currentPage > 1) {
      pages.push(
        <button
          key="prev-page"
          onClick={() => goToPage(currentPage - 1)}
          style={buttonStyle}
        >
          {currentPage - 1}
        </button>
      );
    }

    // Botão para a página atual
    pages.push(
      <button
        key="current"
        onClick={() => goToPage(currentPage)}
        disabled
        style={activeButtonStyle}
      >
        {currentPage}
      </button>
    );

    // Página depois da página atual
    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next-page"
          onClick={() => goToPage(currentPage + 1)}
          style={buttonStyle}
        >
          {currentPage + 1}
        </button>
      );
    }

    // Reticências depois da página atual
    if (currentPage < totalPages - 2) {
      pages.push(
        <span key="end-dots" style={dotsStyle}>
          ...
        </span>
      );
    }

    // Botão para a última página
    if (currentPage < totalPages - 1) {
      pages.push(
        <button
          key="last"
          onClick={() => goToPage(totalPages)}
          style={buttonStyle}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  // Estilos CSS inline
  const buttonStyle: React.CSSProperties = {
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

  const activeButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: "#0056b3",
    cursor: "default",
  };

  const disabledButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: "#c0c0c0",
    cursor: "not-allowed",
  };

  const dotsStyle: React.CSSProperties = {
    margin: "0 4px",
    fontWeight: "bold",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        style={currentPage === 1 ? disabledButtonStyle : buttonStyle}
      >
        {/* Seta Esquerda (Anterior) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 3.646a.5.5 0 0 1 0 .708L6.707 9l4.647 4.646a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </button>

      {renderPagination()}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={currentPage === totalPages ? disabledButtonStyle : buttonStyle}
      >
        {/* Seta Direita (Próximo) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 3.646a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708L9.293 9 4.646 4.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
  );
};
