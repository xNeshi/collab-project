import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

type SearchFormProps = {
  query?: string;
};

export const SearchForm = ({ query }: SearchFormProps) => {
  return (
    <Form
      action="/"
      scroll={false}
      className="search-form pl-6"
      autoComplete="off"
    >
      <input
        name="query"
        defaultValue={query}
        className="search-input placeholder:opacity-35"
        placeholder="Search for projects"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button
          type="submit"
          className="search-btn text-white cursor-pointer"
        >
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
