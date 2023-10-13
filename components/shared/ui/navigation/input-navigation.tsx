"use client";
import Image from "next/image";
import { useState } from "react";

const InputNavigation = () => {
  const [isOpenedSearch, setIsOpenedSearch] = useState<boolean>(false);

  return (
    <div className="relative">
      <Image
        src="/assets/graphics/loupe.png"
        alt="searct-icon"
        className="absolute left-3 top-3"
        width={16}
        height={16}
      />
      <input
        placeholder="Search Globaly"
        className="input_navigation"
        onMouseOver={() => setIsOpenedSearch(true)}
        onMouseOut={() => setIsOpenedSearch(false)}
      />
      {isOpenedSearch && (
        <div
          onMouseOver={() => setIsOpenedSearch(true)}
          onMouseOut={() => setIsOpenedSearch(false)}
          className="input_navigation_result_box"
        >
          Search
        </div>
      )}
    </div>
  );
};

export default InputNavigation;
