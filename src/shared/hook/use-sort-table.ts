import { useMemo, useState } from "react";
/**
 * Пользовательский хук для создания сортируемой таблицы.
 * @param {T[]} initialData - Начальные данные для таблицы.
 * @param {SortConfig<T>} initialSortConfig - Начальная конфигурация сортировки.
 * @returns {UseSortableTable<T>} - Объект, содержащий отсортированные данные,
 * конфигурацию сортировки и функцию для обработки сортировки.
 */
const asc = "asc";
const desc = "desc";

type Direction = typeof asc | typeof desc | null;
interface SortConfig<T> {
  key: keyof T;
  direction: Direction;
}

interface UseSortableTable<T> {
  sortedData: T[];
  sortConfig: SortConfig<T>;
  handleSort: (key: keyof T | "city") => void;
}

function getSortValue<T extends Record<string, any>>(value: T, key: keyof T ) {
  if (key === "address") {
    return value.address.address;
  }
  if (key === "city") {
    return value.address.city;
  }
  return value[key];
}


const useSortableTable = <T extends Record<string, any>>(
  initialData: T[],
  initialSortConfig: SortConfig<T> = { key: "id", direction: null }
): UseSortableTable<T> => {
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>(initialSortConfig);

  const sortedData = useMemo(() => {
    if (sortConfig.direction === null) {
      return initialData;
    }

    if (initialData.length === 0) {
      return initialData;
    }

    const sorted = [...initialData].sort((a, b) => {
      const aValue = getSortValue(a, sortConfig.key);
      const bValue = getSortValue(b, sortConfig.key);


      if (aValue > bValue) {
        return sortConfig.direction === asc ? 1 : -1;
      }
      if (aValue < bValue) {
        return sortConfig.direction === asc ? -1 : 1;
      }
      return 0;
    });

    return sorted;
  }, [initialData, sortConfig]);

  const handleSort = (key: keyof T) => {
    if (sortConfig.key === key && sortConfig.direction === asc) {
      setSortConfig({ key, direction: desc });
    } else {
      setSortConfig({ key, direction: asc });
    }
  };

  return { sortedData, sortConfig, handleSort };
};

export { useSortableTable };
