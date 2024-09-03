import React, { useState } from "react";
import { PageSizeSelector, Pagination } from "./components/Pagination";

const App: React.FC = () => {
  const total = 100;
  const [pageSize, setPageSize] = useState<number>(20); // Estado para pageSize

  const handlePageChange = (page: number) => {
    console.log("Página atual:", page);
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
  };

  return (
    <div>
      <h1>Exemplo de Paginação</h1>
      {/* Usa o componente PageSizeSelector */}
      <PageSizeSelector
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
      />
      <Pagination
        total={total}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
