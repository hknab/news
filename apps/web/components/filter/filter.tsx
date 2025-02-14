"use client";

import { parseSearchParams } from "@/utils";
import { Button } from "@repo/ui";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { sources as SOURCES } from "./const";
import DateSelector from "./date-selector";
import { FilterOptions } from "./filter.type";
import SearchIn from "./search-in";
import SearchInput from "./search-input";
import Source from "./source";

export default function NewsFilter() {
  const searchParams = useSearchParams();

  const { searchIn, sources, ...defaultFilters } = parseSearchParams(
    searchParams.toString()
  );
  console.log({ defaultFilters });
  const [filters, setFilters] = useState<FilterOptions>({
    ...(defaultFilters as any),
    searchIn: searchIn?.length ? searchIn : ["title"],
    sources: sources?.length ? sources : [SOURCES[0] as string],
  });
  console.log({ filters });
  const handleChangeFilter = ({
    name,
    value,
  }: {
    name: string;
    value: FilterOptions[keyof FilterOptions];
  }) => {
    setFilters({ ...filters, [name]: value });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeFilter({ name: e.target.name, value: e.target.value });
  };

  const router = useRouter();
  const handleSearch = () => {
    const { searchIn, sources, ...restFilters } = filters;
    const query = new URLSearchParams({
      ...restFilters,
      searchIn: searchIn.join(","),
      domains: sources.join(","),
    } as any).toString();
    router.push(`/?${query}`);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Source onSourceChange={handleChangeFilter} value={filters.sources} />
        </div>
        <div className="space-y-2">
          <SearchInput
            value={filters.q}
            onSearchInputChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <SearchIn
            value={filters.searchIn}
            onChangeSearch={handleChangeFilter}
          />
        </div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       
        <div className="space-y-2">
          <Languages
            onLanguageChange={handleChangeFilter}
            value={filters.language}
          />
        </div>

        <div className="space-y-2">
          <Sortby onSelectChange={handleChangeFilter} value={filters.sortBy} />
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DateSelector filters={filters} setFilters={setFilters} />
      </div>
      <Button onClick={handleSearch} className="w-full">
        Search
      </Button>
    </div>
  );
}
