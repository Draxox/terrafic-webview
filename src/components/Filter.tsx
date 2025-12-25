import React from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Filters /*StateCode*/ } from "../types";
interface FilterProps {
  // stateCode: StateCode;
  // digits: number[];
  // letter: string;
  // setDigits: Dispatch<SetStateAction<number[]>>;
  // setLetter: Dispatch<SetStateAction<string>>;
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}
const Filter: React.FC<FilterProps> = ({
  // digits,
  // letter,
  // setDigits,
  // setLetter,
  // stateCode,
  filters,
  setFilters,
}) => {
  const handleChange = (index: keyof Filters) => {
    setFilters((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  return (
    <div className="flex flex-col gap-6 items-start">
      <label htmlFor="statecode">
        <input
          name="statecode"
          type="checkbox"
          checked={filters.state}
          onChange={() => handleChange("state")}
        />{" "}
        State or union code
      </label>
      <label htmlFor="rtonumber">
        <input
          name="rtonumber"
          type="checkbox"
          checked={filters.rto}
          onChange={() => handleChange("rto")}
        />{" "}
        RTO Number
      </label>
      <label htmlFor="letter">
        <input
          name="letter"
          type="checkbox"
          checked={filters.letter}
          onChange={() => handleChange("letter")}
        />{" "}
        Single or Multiple Letter
      </label>
      <label htmlFor="4digit">
        <input
          name="4digit"
          type="checkbox"
          checked={filters.number}
          onChange={() => handleChange("number")}
        />{" "}
        4-digit of 1-9999
      </label>
    </div>
  );
};

export default Filter;
