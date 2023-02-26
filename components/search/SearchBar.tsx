import { useState } from "react";
import { reposData } from "@/utils/repositories";
import Link from "next/link";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    let items = reposData;
    const term = event.target.value.toLowerCase();

    setSearchTerm(term);

    const results = items.filter((item) =>
      item.repo.toLowerCase().includes(term)
    );

    setSearchResults(results);
  };

  return (
    <div className={`relative`}>
      <input
        type="text"
        className={`py-2 px-4 bg-white glass border backdrop-blur-sm rounded-full relative`}
        onChange={handleSearch}
      />
      <div
        style={{ position: "absolute", top: "100%", left: 0 }}
        className={`w-full`}
      >
        {searchResults.map((result) => (
          <div
            key={result.id}
            className={`w-full px-2 space-y-1 bg-white/30 glass divide-y-2 shadow backdrop-blur-sm grid`}
          >
            <Link href="/">
              <h2 className={`px-4`}>{result.repo}</h2>
            </Link>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
