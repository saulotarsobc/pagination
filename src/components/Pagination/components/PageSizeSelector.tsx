import { selectStyle } from "../styles";

interface PageSizeSelectorProps {
  pageSize: number;
  onPageSizeChange: (size: number) => void;
}

const PageSizeSelector: React.FC<PageSizeSelectorProps> = ({
  pageSize,
  onPageSizeChange,
}) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="pageSizeSelect" style={{ marginRight: "10px" }}>
        Itens por página:
      </label>
      <select
        id="pageSizeSelect"
        value={pageSize}
        onChange={(e) => onPageSizeChange(parseInt(e.target.value, 10))}
        style={selectStyle}
      >
        <option value={5}>5</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={20}>50</option>
        <option value={20}>100</option>
      </select>
    </div>
  );
};

export default PageSizeSelector;
