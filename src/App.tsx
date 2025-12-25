import { useState } from "react";
import "./App.css";
import NumberPlate from "./components/NumberPlate";
import { randomChars, randomCodes, randomDigits } from "./utils/random";
import ActionPanel from "./components/ActionPanel";
import { STATE_CODES } from "./constants/stateCodes";
import { type ActionMode, type Filters, type StateCode } from "./types";
import { getActivePlateIndices, pickRandomIndices } from "./utils/plateIndex";

// type PlateValue = {
//   state: string;
//   rto: string;
//   letter: string;
//   number: string;
// };

function App() {
  const [digits, setDigits] = useState<number[]>([9, 9, 9, 9, 9, 9]);
  const [letter, setLetter] = useState("J");
  const [stateCode, setStateCode] = useState<StateCode>(STATE_CODES[0]);
  const [mode, setMode] = useState<ActionMode>("PLATES");
  //i want to use this number plate strucure to unify and make use of it in the generate blocks handler action so that i can use a utility of randomIndex to get it from that number plate value and then using it for the cover applygin ui logic further
  // console.log(plateValue);
  // const plateValue: PlateValue = {
  //   state: stateCode.code,
  //   rto: `${digits[0]}${digits[1]}`,
  //   letter,
  //   number: `${digits[2]}${digits[3]}${digits[4]}${digits[5]}`,
  // };

  const [filters, setFilters] = useState<Filters>({
    state: false,
    rto: false,
    letter: false,
    number: false,
  });

  const [coverIndices, setCoverIndices] = useState<number[]>([]);

  const handleGenerate = () => {
    if (mode === "COVER") {
      // console.log("heeeeeeeeeeeeeeeeeeelo");
      genBlocks(filters);
    } else {
      genPlates(filters);
    }
  };

  const genPlates = (filters: Filters) => {
    setDigits((prevDigits) => {
      const newDigits = [...prevDigits];

      // RTO (2 digits)
      if (filters.rto) {
        const rtoDigits = randomDigits(2);
        newDigits[0] = rtoDigits[0];
        newDigits[1] = rtoDigits[1];
      }

      // 4-digit unique number
      if (filters.number) {
        const fourDigits = randomDigits(4);
        newDigits[2] = fourDigits[0];
        newDigits[3] = fourDigits[1];
        newDigits[4] = fourDigits[2];
        newDigits[5] = fourDigits[3];
      }

      return newDigits;
    });

    // Letter
    if (filters.letter) {
      setLetter(randomChars());
    }
    if (filters.state) {
      setStateCode(randomCodes(STATE_CODES));
    }
    setCoverIndices([]); //reset covers
  };

  const genBlocks = (filters: Filters) => {
    const active = getActivePlateIndices(filters);
    if (!active.length) return;
    const randomCovers = pickRandomIndices(active, 4);
    setCoverIndices(randomCovers);
    // console.log("cover in : ", randomCovers);
  };

  return (
    <>
      <div className="flex gap-6 border h-full p-6 rounded items-center justify-center">
        <div className="w-2/4">
          <ActionPanel
            // genPlates={genPlates}
            mode={mode}
            setMode={setMode}
            // stateCode={stateCode}
            // digits={digits}
            // setDigits={setDigits}
            // letter={letter}
            // setLetter={setLetter}
            filters={filters}
            setFilters={setFilters}
          />
        </div>
        <div className="w-full flex flex-col gap-8 p-2">
          <h1>Terrafic</h1>

          {/* display div for the number plates output */}
          <div className="w-full">
            <NumberPlate
              digits={digits}
              letter={letter}
              stateCode={stateCode}
              coverIndices={coverIndices}
            />
          </div>
          <button
            onClick={handleGenerate}
            className="px-4 py-2 rounded bg-amber-800 font-bold text-lg"
          >
            Generate
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
