import {
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui";
import { FC } from "react";
import { languages } from "./const";

interface LanguagesProps {
  value: string;
  onLanguageChange: (arg: { name: string; value: string }) => void;
}
const Languages: FC<LanguagesProps> = ({ onLanguageChange, value }) => {
  return (
    <>
      <Label htmlFor="language">Language</Label>
      <Select
        value={value}
        onValueChange={(value) => onLanguageChange({ name: "language", value })}
      >
        <SelectTrigger id="language">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.value} value={lang.value}>
              {lang.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default Languages;
