import { FC, useState } from "react";
import { PaginationProps } from "../interfaces";
import {
  activeButtonStyle,
  buttonStyle,
  disabledButtonStyle,
  dotsStyle,
} from "../styles";
import { LeftArrowIcon, RightArrowIcon } from "./icons";

const Pagination: FC<PaginationProps> = ({ total, pageSize, onPageChange }) => {
  // Calcula o número total de páginas
  const totalPages = Math.ceil(total / pageSize);

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
        <LeftArrowIcon />
      </button>

      {renderPagination()}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={currentPage === totalPages ? disabledButtonStyle : buttonStyle}
      >
        <RightArrowIcon />
      </button>
    </div>
  );
};

export default Pagination;
