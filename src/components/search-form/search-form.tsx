import { IconArrowRight, IconSearch } from "@tabler/icons-react";
import React from "react";
import { TextInput } from "../text-input/text-input";


interface SearchFormProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchForm : React.FC<SearchFormProps> = ({handleChange}) => (
    <TextInput
      leftSection={
        <IconSearch width={20} stroke={1.5} />
      }
      customSize="md"
      radius="md"
      placeholder="Search"

      onChange={handleChange}
      // rightSection={
      //   <IconArrowRight width={20} stroke={1.5} />
      // }
    />

  );

export { SearchForm };
