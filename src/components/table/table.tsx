import React from "react";
import styles from "./table.module.scss";
import { useSortableTable } from "../../hook/use-sort-table";
import { Person, TableColumn } from "../../utils/person-type";

interface SortableTableProps {
  data: Person[];
  columns: TableColumn[];
}

const SortableTable: React.FC<SortableTableProps> = ({ data, columns }) => {
  const { sortedData, sortConfig, handleSort } = useSortableTable<Person>(data);

  return (
    <div className={styles.scrollTable}>

      <table>
        <thead>
        <tr>
          {columns.map(column => (
            <th
              key={column.key}
              onClick={() => handleSort(column.key)}
              style={{ width: column.key === "age" || column.key === "gender" ? "50px" : "auto" }}
            >
              {column.label}
              {sortConfig.key === column.key && (
                <span>{sortConfig.direction === "asc" ? " ▲" : " ▼"}</span>
              )}
            </th>
          ))}
        </tr>
        </thead>
      </table>

      <div className={styles.scrollTableBody}>
        <table>
          <tbody>
          {sortedData.map(person => (
            <tr key={person.id} className={styles.tableWidth}>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.maidenName}</td>
              <td style={{ width: 50 }}>{person.age}</td>
              <td style={{ width: 50 }}>{person.gender}</td>
              <td>{person.phone}</td>
              <td>{person.address.city}</td>
              <td>{person.address.address}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>

    </div>

  );
};

export { SortableTable };
