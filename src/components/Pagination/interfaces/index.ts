export interface PaginationProps {
  total: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}
