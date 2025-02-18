"use client";

import { X } from "lucide-react";
import Link from "next/link";

export const SearchFormReset = () => {
  const resetHandler = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <button
      type="reset"
      onClick={resetHandler}
      className="search-btn text-white "
    >
      <Link href="/">
        <X className="size-5" />
      </Link>
    </button>
  );
};

export default SearchFormReset;
