import React, { useState } from "react";
import styles from "./table.module.scss";
import { useSortableTable } from "../../shared/hook/use-sort-table";
import { useFetchPerson } from "../../shared/hook/use-fetch-person";
import { type Person } from "../../entities/person-type";
import { type TableColumn } from "../../entities/table-column";
import { Modal } from "../modal/modal";

interface SortableTableProps {
  users: Person[];
  columns: TableColumn[];
}

const SortableTable: React.FC<SortableTableProps> = ({ users, columns }) => {
  const { sortedData, sortConfig, handleSort } = useSortableTable<Person>(users);
  const { data, isLoading, error, fetchData } = useFetchPerson<Person>();
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
              {`${column.label} `}
              {sortConfig.key === column.key && (
                <>
                  <span className={styles.sortBtn}>{sortConfig.direction === "asc" && "▲"}</span>
                  <span className={styles.sortBtn}>{sortConfig.direction === "desc" &&  "▼"}</span>
                  <span className={styles.sortBtn}>{!sortConfig.direction  && ""}</span>
                </>
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
      <Modal showModal={showModal} setShowModal={setShowModal} person={{ data, isLoading, error }} />
    </div>

  );
};

export { SortableTable };
