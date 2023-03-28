import Icon from "components/common/Icon";
import React, { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { ReactComponent as FilterIcon } from "assets/icons/ic-filter.svg";
import InputSearch from "../InputSearch";

type FilterOption = {
  label: string;
  value: string;
};

type FilterProps = {
  selectedOption: FilterOption;
  onSelectOption: (option: FilterOption) => void;
  options: FilterOption[];
  className?: string;
};

const Filter: React.FC<FilterProps> = ({ onSelectOption, options, className }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState<string>(
    options[0].label.toLocaleLowerCase()
  );
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div className={`${className ?? ''} flex items-center`}>
      <div className="relative inline-block text-left mr-2" ref={ref}>
        <button
          ref={ref}
          className="flex items-center justify-center w-max h-9 bg-white-two gap-x-2 px-3 py-1 rounded-cards border-[1px] border-solid border-neutral-200 transition-colors duration-500 hover:bg-neutral-200"
          id="filter-options"
          aria-controls="filter-options-menu"
          onClick={() => setOpen(!open)}
        >
          <Icon IconComponent={FilterIcon} />{" "}
          <p className="text-sm font-inter font-medium text-blue-violet">
            FILTRAR
          </p>
        </button>
        {open && (
          <div
            className="origin-top-right absolute left-0 mt-1 w-max rounded-cards shadow-lg bg-white ring-1 ring-black ring-opacity-5 fill-available"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="filter-options"
            id="filter-options-menu"
          >
            <div className="py-1" role="none">
              {options.map((option) => (
                <button
                  key={option.value}
                  className={`text-black-87 block px-4 py-2 text-sm leading-5 text-left w-full hover:bg-gray-100`}
                  role="menuitem"
                  onClick={() => {
                    onSelectOption(option);
                    setOpen(false);
                    setSelectedOption(option.value.toLocaleLowerCase());
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <InputSearch placeholder={`Buscar por ${selectedOption}...`} inputName="searchInput" />
    </div>
  );
};

export default Filter;
