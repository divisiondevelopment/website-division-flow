"use client";

import Image from "next/image";
import { useSearchPopup } from "./SearchPopupProvider";

export default function SearchBox() {
  const { isOpen, close } = useSearchPopup();

  return (
    <>
      <div
        className={`search-popup${isOpen ? " active" : ""}`}
        id="search-popup"
        aria-hidden={!isOpen}
      >
        <form
          className="search-form"
          onSubmit={(e) => {
            e.preventDefault();
            close();
          }}
        >
          <input type="text" placeholder="Enter Keywords..." required />
          <button
            type="submit"
            className="submit-btn"
            aria-label="Submit search"
          >
            <Image
              src="/assets/images/icon/search.svg"
              alt=""
              width={20}
              height={20}
              aria-hidden
            />
          </button>
        </form>
      </div>
      <div
        className={`search-overlay${isOpen ? " active" : ""}`}
        aria-hidden={!isOpen}
        onClick={close}
      />
    </>
  );
}
