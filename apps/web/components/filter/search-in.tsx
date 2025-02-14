import { Checkbox, Label } from "@repo/ui";
import { FC } from "react";

interface SearchProps {
  value: string[];
  onChangeSearch: (arg: { name: string; value: string[] }) => void;
}
const SearchIn: FC<SearchProps> = ({ value, onChangeSearch }) => {
  return (
    <>
      <Label>Search In</Label>
      <div className="flex space-x-4">
        {["title", "description", "content"].map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox
              id={`searchIn-${option}`}
              checked={value.includes(option)}
              onCheckedChange={(checked) => {
                const updatedSearchIn = checked
                  ? [...value, option]
                  : value.filter((item) => item !== option);
                onChangeSearch({ name: "searchIn", value: updatedSearchIn });
              }}
            />
            <Label htmlFor={`searchIn-${option}`}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Label>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchIn;
