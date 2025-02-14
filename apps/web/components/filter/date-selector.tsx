"use client";

import {
  Button,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@repo/ui";
import { CalendarIcon } from "lucide-react";

import { cn } from "@repo/ui/lib";
import { format, isAfter } from "date-fns";
import dynamic from "next/dynamic";
import { Dispatch, FC, SetStateAction } from "react";
import { FilterOptions } from "./filter.type";
const Calendar = dynamic(
  () => import("@repo/ui").then(({ Calendar }) => Calendar),
  { ssr: false }
);
interface DateSelectorProps {
  filters: FilterOptions;
  setFilters: Dispatch<SetStateAction<FilterOptions>>;
}
const DateSelector: FC<DateSelectorProps> = ({ filters, setFilters }) => {
  const handleDateChange = (name: string, date: Date | undefined) => {
    if (date) {
      const utcDate = new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
      );
      setFilters({ ...filters, [name]: utcDate.toISOString().split("T")[0] });
    }
  };

  const disabledDate = (date: Date, type: "from" | "to") => {
    // TODO: user should not be able to select dates before From date
    const today = new Date();
    const twoDaysAgo = new Date(today);
    twoDaysAgo.setDate(today.getDate() - 3);
    const from = filters.from;
    const fromDate = new Date(from);
    if (type === "from") {
      return isAfter(date, today) || isAfter(twoDaysAgo, date);
    }
    return (
      isAfter(date, today) ||
      isAfter(fromDate, date) ||
      isAfter(twoDaysAgo, date)
    );
  };

  return (
    <>
      <div className="space-y-2">
        <Label>From Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !filters.from && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {filters.from ? (
                format(new Date(filters.from + "T00:00:00Z"), "PPP")
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={filters.from ? new Date(filters.from) : undefined}
              onSelect={(date) => handleDateChange("from", date)}
              disabled={(date) => disabledDate(date, "from")}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="space-y-2">
        <Label>To Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !filters.to && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {filters.to ? (
                format(new Date(filters.to + "T00:00:00Z"), "PPP")
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={filters.to ? new Date(filters.to) : undefined}
              onSelect={(date) => handleDateChange("to", date)}
              disabled={(date) => disabledDate(date, "to")}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default DateSelector;
