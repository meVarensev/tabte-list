import {useState, useEffect} from 'react';

/**
 * Пользовательский хук для задержки значения.
 * @param {T} value - Значение, которое нужно задержать.
 * @param {number} delay - Задержка (в миллисекундах) перед обновлением задержанного значения.
 * @returns {T} - Задержанное значение.
 */

const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export {useDebounce}
