import { Pagination } from "./components/Pagination";

const App: React.FC = () => {
  const totalItems = 100;
  const itemsPerPage = 9;

  const handlePageChange = (page: number) => {
    console.log("Página atual:", page);
  };

  return (
    <div>
      <h1>Exemplo de Paginação</h1>
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
