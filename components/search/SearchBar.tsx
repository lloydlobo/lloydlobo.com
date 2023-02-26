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
      <div className={`relative`}>
        <input
          type="text"
          className={`py-3 px-12 bg-white glass border backdrop-blur-sm rounded-full relative`}
          onChange={handleSearch}
        />
        <div className={`absolute top-0 py-3 px-3`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>

        <div className={`absolute right-0 top-0 py-3 px-3`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
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
