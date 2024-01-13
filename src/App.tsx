import "./App.css";
import { Header } from "./components/header/header";
import { SearchForm } from "./components/search-form/search-form";
import { Box } from "./components/box/box";

function App() {

  return (
    <div className="App">
      <Header />
      <Box marginTop={20}>
        <SearchForm/>
      </Box>

    </div>
  );
}

export default App;
