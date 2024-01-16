import React, { useState } from "react";
import styles from "./table.module.scss";
import { useSortableTable } from "../../hook/use-sort-table";
import { useFetchPerson } from "../../hook/use-fetch-person";
import { type Person, TableColumn } from "../../utils/person-type";
import { Modal } from "../modal/modal";

interface SortableTableProps {
  users: Person[];
  columns: TableColumn[];
}



const SortableTable: React.FC<SortableTableProps> = ({ users, columns }) => {
  const { sortedData, sortConfig, handleSort } = useSortableTable<Person>(users);
  const { data  , isLoading, error, fetchData } = useFetchPerson<Person>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleRowClick = (person: Person) => {
    fetchData(person.id);
    setShowModal(true);
  };

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
          {sortedData.map((person) => (
            <tr key={person.id}
                className={styles.tableWidth}
                onClick={() => handleRowClick(person)}
            >
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
    <Modal showModal={showModal} setShowModal={setShowModal}  person={{ data, isLoading, error }}/>
    </div>

  );
};

export { SortableTable };
