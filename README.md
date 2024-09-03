![image](https://github.com/user-attachments/assets/2a435c2c-dc10-4d48-9185-9b094b34d186)

# Componente de Paginação em React

Este é um componente genérico de paginação em React com TypeScript, criado para exibir botões de navegação paginada, incluindo ícones de seta SVG para navegar para a próxima ou anterior página. O componente adapta-se automaticamente ao número total de páginas, mostrando as caixas necessárias de forma dinâmica.

## Características

- Navegação por botões com setas SVG (próxima e anterior).
- Exibe dinamicamente os botões da primeira e última página, com reticências entre páginas distantes.
- Mostra as páginas imediatamente antes e depois da página atual.
- Configurável com o total de itens e itens por página.

## Uso

### Instalação

Certifique-se de que você tem o React e o TypeScript instalados em seu projeto.

### Código de Exemplo

Aqui está um exemplo de como usar o componente de paginação:

```tsx
import React from "react";
import Pagination from "./Pagination"; // Importa o componente de paginação

const App: React.FC = () => {
  const total = 100;
  const pageSize = 10;

  const handlePageChange = (page: number) => {
    console.log("Página atual:", page);
  };

  return (
    <div>
      <h1>Exemplo de Paginação</h1>
      <Pagination
        total={total}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
```
