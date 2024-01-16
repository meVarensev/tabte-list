import { useEffect, useState } from "react";

/**
 * Пользовательский хук для выполнения асинхронных запросов.
 * @param {URL | null} url - URL для получения данных.
 * @returns {FetchResult<T>} - Объект с данными, состоянием загрузки и ошибкой.
 */

interface FetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}
export function useFetch<T>(url: URL | null): FetchResult<T> {
  const [data  , setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {

    const abortController = new AbortController();
    const { signal } = abortController;
    if (!url) {
      return  abortController.abort();
    }
    setIsLoading(true);
    setData(null);
    setError(null);


    fetch(url, { signal })
      .then((res) => res.json())
      .then((respData: T) => {
        if (!signal.aborted) {
          setData(respData);
        }
      })
      .catch((e) => {
        if (!signal.aborted) {
          setError(e);
        }
      })
      .finally(() => {
        if (!signal.aborted) {
          setIsLoading(false);
        }
      });

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, isLoading, error };
}
