import { useState, useRef, useEffect } from "react";


export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle dropdown visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if clicked outside of it
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left me-2 md:hidden" ref={menuRef}>
      <button
        className="bg-transparent border-2 text-white p-2 rounded-lg"
        onClick={toggleMenu}
      >
        Menu
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a
              href="/pokemon-generations"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Generations
            </a>
            <a
              href="/abilities"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Abilities
            </a>
            <a
              href="/egg-groups"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Egg Groups
            </a>
            <a
              href="/types"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Types
            </a>
            <a
              href="/all-pokemons"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              All Pokemons
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
