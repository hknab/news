import { Input, Label } from "@repo/ui";
import { ChangeEventHandler, FC } from "react";

interface SearchInputProps {
  value: string;
  onSearchInputChange: ChangeEventHandler<HTMLInputElement>;
}
const SearchInput: FC<SearchInputProps> = ({ onSearchInputChange, value }) => {
  return (
    <>
      <Label htmlFor="q">Search Query</Label>
      <Input
        id="q"
        name="q"
        placeholder="Enter search query..."
        value={value}
        onChange={onSearchInputChange}
      />
    </>
  );
};

export default SearchInput;
