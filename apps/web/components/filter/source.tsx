import { Label, MultiSelect } from "@repo/ui";
import { FC } from "react";
import { sources } from "./const";

interface SourceProps {
  value: string[];
  onSourceChange: (arg: { name: string; value: string[] }) => void;
}
const Source: FC<SourceProps> = ({ onSourceChange, value }) => {
  return (
    <>
      <Label htmlFor="sources">Sources</Label>
      <MultiSelect
        options={sources}
        selected={value}
        onChange={(selected) =>
          onSourceChange({
            name: "sources",
            value: selected.length < 1 ? value : selected,
          })
        }
        placeholder="Select sources"
      />
    </>
  );
};

export default Source;
