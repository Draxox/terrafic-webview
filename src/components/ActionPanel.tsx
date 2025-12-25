import React from "react";
import Filter from "./Filter";
import type { Dispatch, SetStateAction } from "react";
import type { ActionMode, Filters /*StateCode*/ } from "../types";

interface ActionPanelProps {
  // genPlates: () => void;
  mode: ActionMode;
  setMode: Dispatch<SetStateAction<ActionMode>>;
  // stateCode: StateCode;
  // digits: number[];
  // letter: string;
  // setDigits: Dispatch<SetStateAction<number[]>>;
  // setLetter: Dispatch<SetStateAction<string>>;
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}

const ActionPanel: React.FC<ActionPanelProps> = ({
  // genPlates,
  mode,
  setMode,
  // stateCode,
  // digits,
  // letter,
  // setDigits,
  // setLetter,
  filters,
  setFilters,
}) => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-4 h-96 bg-neutral-800/50 border rounded-2xl">
        <h2 className="text-xl font-bold">Action panel</h2>
        <div className="flex gap-4">
          <button
            onClick={() => setMode("COVER")}
            className={`${
              mode === "COVER" ? "active bg-amber-600/40" : ""
            } px-6 py-3 rounded border`}
          >
            Random Cover
          </button>
          <button
            onClick={() => setMode("PLATES")}
            className={`${
              mode === "PLATES" ? "active bg-amber-600/40" : ""
            } px-6 py-3 rounded border`}
          >
            Random Plates
          </button>
        </div>
        <Filter
          // stateCode={stateCode}
          // digits={digits}
          // letter={letter}
          // setDigits={setDigits}
          // setLetter={setLetter}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
    </>
  );
};

export default ActionPanel;
