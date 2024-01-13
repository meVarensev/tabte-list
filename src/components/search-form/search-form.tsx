import { IconArrowRight, IconSearch } from "@tabler/icons-react";
import { TextInput } from "../text-input/text-input";


const SearchForm = () => {

  return (
    <form>
      <TextInput
        leftSection={
          <IconSearch  width={20} stroke={1.5} />
        }
        size="md"
        radius="md"
        placeholder="Search"
        rightSection={
          <IconArrowRight width={20} stroke={1.5}/>
        }
      />
    </form>
  );
};

export { SearchForm };
