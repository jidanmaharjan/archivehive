import React, { useState } from "react";

type NavbarPropsType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar = (props: NavbarPropsType) => {
  const { search, setSearch } = props;
  return (
    <div className="bg-rose-300 flex items-center p-4 font-semibold justify-between fixed top-0 w-full h-16">
      <h2>ArchiveHive.</h2>
      <input
        placeholder="Search archive"
        className="py-1 px-3 min-w-80 outline-none"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Navbar;
