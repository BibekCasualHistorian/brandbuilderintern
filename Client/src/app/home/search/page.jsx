import React from "react";
import SearchProductSearch from "@/components/search/SearchProductSearch";
import SpecialProductHeader from "@/components/search/SpecialProductHeader";
import SpecialProductDisplay from "@/components/search/SpecialProductDisplay";

const Search = () => {
  return (
    <div>
      <SearchProductSearch />
      <SpecialProductHeader />
      <SpecialProductDisplay />
    </div>
  );
};

export default Search;
