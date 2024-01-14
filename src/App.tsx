import "./App.css";

import React, { useState } from "react";
import { Header } from "./components/header/header";
import { SearchForm } from "./components/search-form/search-form";
import { Box } from "./components/box/box";
import { SortableTable } from "./components/table/table";

import { getUrl, type Params, urlParams } from "./utils/get-url";
import { columns } from "./components/table/table-collums";
import { useFetch } from "./hook/use-fetch";
import { Person } from "./utils/person-type";
import { Typography } from "./components/typography/typography";
import { useDebounce } from "./hook/use-debounce";

const params = urlParams.users as Params;
interface Response {
  users: Person[]
}
function App() {
  const [url, setUrl] = useState<URL>( getUrl(params));
  const debouncedSearchUrl = useDebounce(url, 1000);
  const { data, isLoading, error } = useFetch<Response>(debouncedSearchUrl);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const paramSearch = urlParams.search as Params;
    const paramUsers = urlParams.users as Params;
    if(event.target.value.length === 0) {
      setUrl(getUrl(paramUsers));
      return;
    }
    const newUrl: URL = getUrl(paramSearch, event.target.value);
    setUrl(newUrl);
  };

  return (
    <div className="App">
      <Header />

      <Box marginTop={20} marginBottom={20}>
        <SearchForm handleChange={handleChange}/>
      </Box>

      <Box marginBottom={20}>
        {isLoading && <Typography>Loading...</Typography>}
        {error && <Typography>Error: {error.message}</Typography>}
        {data?.users.length === 0 && <Typography>No users found</Typography>}
        {(data && data.users.length !== 0) && <SortableTable data={data.users} columns={columns} />}
      </Box>
    </div>
  );
}

export default App;
