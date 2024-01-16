
import "./App.css";

import React, { useState } from "react";
import { useDebounce } from "./hook/use-debounce";
import { useFetch } from "./hook/use-fetch";
import { Header } from "./components/header/header";
import { SearchForm } from "./components/search-form/search-form";

import { Box } from "./components/box/box";
import { SortableTable } from "./components/table/table";
import { urlDirector } from "./utils/get-url";
import { columns } from "./components/table/table-collums";
import { Person } from "./utils/person-type";
import { Typography } from "./components/typography/typography";


interface Response {
  users: Person[]
}
function App() {
  const [url, setUrl] = useState<URL>( urlDirector.constructUrl("isUsers"));
  const debouncedSearchUrl = useDebounce(url, 300);
  const { data, isLoading, error } = useFetch<Response>(debouncedSearchUrl);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl: URL = urlDirector.constructUrl("isSearch", event.target.value);
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
        {(data && data.users.length !== 0) && <SortableTable users={data.users} columns={columns} />}
      </Box>
    </div>
  );
}

export default App;
