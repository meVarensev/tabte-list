import { useState } from "react";
import { useFetch } from "./use-fetch";
import { urlDirector } from "../utils/get-url";

interface PersonDataResult<T> extends ReturnType<typeof useFetch<T | null>> {
  fetchData: (personId: number) => void;
}


export function useFetchPerson<T>(): PersonDataResult<T> {
  const [url, setUrl] = useState<URL | null>(null);
  const { data, isLoading, error } = useFetch<T | null>(url);

  const fetchData = (personId: number) => {
    setUrl(urlDirector.constructUrl("isUser", personId));
  };

  return { data, isLoading, error, fetchData };
}
