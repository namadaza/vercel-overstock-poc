"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { createUrl, debounce } from "lib/utils";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const SEARCH_DEBOUNCE_MS = 700;

type SuggestionAPI = {
  keyword: string;
  categories: string[];
  brands: {
    name: string;
    relativeUrl: string;
  }[];
};

type SuggestionSearchResult = {
  keyword: string;
  splitKeyword: string[];
  searchMatchIndex: number;
  url: string;
};

const getSearchResults = (
  suggestions: SuggestionAPI[],
  searchQuery: string,
): SuggestionSearchResult[] => {
  return suggestions.map((suggestion) => {
    const splitKeyword = suggestion.keyword.split(" ");
    const urlKeyword = suggestion.keyword.replace(" ", "+");
    const searchMatchIndex = splitKeyword.findIndex((word) =>
      word.toLowerCase().startsWith(searchQuery.toLowerCase()),
    );

    return {
      keyword: suggestion.keyword,
      splitKeyword,
      searchMatchIndex,
      url: `/search?q=${urlKeyword}`,
    };
  });
};

const EXAMPLE_SUGGESTIONS: SuggestionAPI[] = [
  {
    keyword: "outdoor rugs",
    categories: [],
    brands: [
      {
        name: "Safavieh",
        relativeUrl: "/outdoor-rugs,Safavieh,/k,brand,/results.html",
      },
      {
        name: "Kavka Designs",
        relativeUrl: "/outdoor-rugs,Kavka-Designs,/k,brand,/results.html",
      },
      {
        name: "World Rug Gallery",
        relativeUrl: "/outdoor-rugs,World-Rug-Gallery,/k,brand,/results.html",
      },
      {
        name: "Brooklyn Rug Co",
        relativeUrl: "/outdoor-rugs,Brooklyn-Rug-Co,/k,brand,/results.html",
      },
      {
        name: "Dream Decor Rugs",
        relativeUrl: "/outdoor-rugs,Dream-Decor-Rugs,/k,brand,/results.html",
      },
    ],
  },
  {
    keyword: "safavieh rugs",
    categories: [],
    brands: [
      {
        name: "Safavieh",
        relativeUrl: "/safavieh-rugs,Safavieh,/k,brand,/results.html",
      },
    ],
  },
  {
    keyword: "bathroom rugs",
    categories: [],
    brands: [
      {
        name: "Windsor Home",
        relativeUrl: "/bathroom-rugs,Windsor-Home,/k,brand,/results.html",
      },
      {
        name: "Kavka Designs",
        relativeUrl: "/bathroom-rugs,Kavka-Designs,/k,brand,/results.html",
      },
      {
        name: "E by Design",
        relativeUrl: "/bathroom-rugs,E-by-Design,/k,brand,/results.html",
      },
      {
        name: "Mohawk Home",
        relativeUrl: "/bathroom-rugs,Mohawk-Home,/k,brand,/results.html",
      },
      {
        name: "American Soft Linen",
        relativeUrl:
          "/bathroom-rugs,American-Soft-Linen,/k,brand,/results.html",
      },
    ],
  },
  {
    keyword: "safavieh area rugs",
    categories: [],
    brands: [
      {
        name: "Safavieh",
        relativeUrl: "/safavieh-area-rugs,Safavieh,/k,brand,/results.html",
      },
    ],
  },
  {
    keyword: "indoor outdoor rugs",
    categories: [],
    brands: [
      {
        name: "Safavieh",
        relativeUrl: "/indoor-outdoor-rugs,Safavieh,/k,brand,/results.html",
      },
      {
        name: "Dream Decor Rugs",
        relativeUrl:
          "/indoor-outdoor-rugs,Dream-Decor-Rugs,/k,brand,/results.html",
      },
      {
        name: "Addison Rugs",
        relativeUrl: "/indoor-outdoor-rugs,Addison-Rugs,/k,brand,/results.html",
      },
      {
        name: "Nourison",
        relativeUrl: "/indoor-outdoor-rugs,Nourison,/k,brand,/results.html",
      },
      {
        name: "Brooklyn Rug Co",
        relativeUrl:
          "/indoor-outdoor-rugs,Brooklyn-Rug-Co,/k,brand,/results.html",
      },
    ],
  },
];

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams?.get("q") || "");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestionSearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close the popover when clicking outside of the search input
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsPopoverOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fetch search suggestions
  useEffect(() => {
    const debouncedSearch = debounce(async (term: string) => {
      if (term.length > 0) {
        try {
          const response = await fetch(
            "https://api.overstock.com/search/suggestions",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                query: term,
                deviceType: "DESKTOP",
                count: 5,
              }),
            },
          );
          const data = await response.json();
          const searchResults = getSearchResults(
            data.suggestions || [],
            searchTerm,
          );

          setSuggestions(searchResults);
          setIsPopoverOpen(true);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
          setSuggestions(getSearchResults(EXAMPLE_SUGGESTIONS, searchTerm));
          setIsPopoverOpen(true); // TODO set to false after testing
        }
      } else {
        setSuggestions([]);
        setIsPopoverOpen(false);
      }
    }, SEARCH_DEBOUNCE_MS);

    debouncedSearch(searchTerm);
  }, [searchTerm]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    router.push(createUrl("/search", newParams));
  }

  console.log("suggestions", suggestions);

  return (
    <div
      ref={searchRef}
      className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
    >
      <form onSubmit={onSubmit}>
        <input
          key={searchParams?.get("q")}
          type="text"
          name="search"
          placeholder="Search Crazy-Good Deals"
          autoComplete="off"
          className="text-base w-full rounded-full bg-white pl-8 pr-4 py-2 text-black placeholder:text-neutral-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute left-0 top-0 ml-3 flex h-full items-center">
          <MagnifyingGlassIcon className="h-4 text-black" />
        </div>
        {isPopoverOpen && suggestions.length > 0 && (
          <div className="absolute z-10 w-full bg-white mt-4 rounded-md shadow-lg border border-gray-300">
            <ul className="py-2">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                >
                  <Link
                    href={suggestion.url}
                    onClick={() => setSearchTerm(suggestion.keyword)}
                  >
                    {/* <span className="text-sm">{suggestion.keyword}</span> */}
                    {suggestion.splitKeyword.map((word, index) => (
                      <span className="text-sm" key={index}>
                        {index === suggestion.searchMatchIndex ? (
                          <strong>{word}</strong>
                        ) : (
                          word
                        )}
                        {index < suggestion.splitKeyword.length - 1 && " "}
                      </span>
                    ))}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}

export function SearchSkeleton() {
  return (
    <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <input
        placeholder="Search for products..."
        className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4" />
      </div>
    </form>
  );
}
