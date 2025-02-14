import {
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui";
import { FC } from "react";
import { sortOptions } from "./const";

interface SortbyProps {
  value: string;
  onSelectChange: (args: { name: string; value: string }) => void;
}
const Sortby: FC<SortbyProps> = ({ onSelectChange, value }) => {
  return (
    <>
      <Label htmlFor="sortBy">Sort By</Label>
      <Select
        value={value}
        onValueChange={(value) => onSelectChange({ name: "sortBy", value })}
      >
        <SelectTrigger id="sortBy">
          <SelectValue placeholder="Select sort option" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default Sortby;
