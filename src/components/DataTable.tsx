import styles from "./DataTable.module.css";
import * as React from "react";
import { useEffect, useMemo, useState } from "react";

interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
  sortable?: boolean;
  width?: string;
}

interface SortConfig<T> {
  key: keyof T;
  direction: "asc" | "desc";
}

interface DataTableProps<T extends { id: string | number }> {
  data: T[];
  columns: Column<T>[];
  sortConfig?: SortConfig<T>;
  onSort?: (key: keyof T) => void;
  pageSize?: number;
  isLoading?: boolean;
  emptyState?: React.ReactNode;
}

function DataTable<T extends { id: string | number }>({
  data,
  columns,
  pageSize,
}: DataTableProps<T>) {
  console.log("[DataTable]", { pageSize });
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [data]);

  const pageData = useMemo(
    () =>
      pageSize ? data.slice(page * pageSize, (page + 1) * pageSize) : data,
    [data, page, pageSize],
  );

  const totalPages = pageSize ? Math.ceil(data.length / pageSize) : 1;

  return (
    <div className={styles.dataTableWrapper}>
      <table role="grid" className={styles.dataTableBase}>
        <thead className={styles.dataTableHeader}>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length}>
                <p>no data</p>
              </td>
            </tr>
          ) : (
            pageData.map((row) => (
              <tr key={row.id} className={styles.dataTableRow}>
                {columns.map((col) => (
                  <td key={String(col.key)}>{String(row[col.key] ?? "")}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      {totalPages > 1 && (
        <nav className={styles.dataTablePagination}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-current={page === i ? "page" : undefined}
            >
              {i + 1}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

export default DataTable;
