import type { StateCode } from "../types";
import PlateCell from "./PlateCell";

interface NumberPlateProps {
  stateCode: StateCode;
  digits: number[];
  letter: string;
  coverIndices: number[];
}

const NumberPlate = ({
  digits,
  letter,
  stateCode,
  coverIndices,
}: NumberPlateProps) => {
  // const isStateCode=filter[0];
  // const isRto=filter[1];
  // const isLetter=filter[2];
  // const isfourDigit=filter[3];

  const plateValues = [
    ...stateCode.code.split(""),
    ...digits.slice(0, 2),
    ...letter.split(""),
    ...digits.slice(2),
  ];

  const groups = [
    { start: 0, end: stateCode.code.length }, //statecode
    { start: stateCode.code.length, end: stateCode.code.length + 2 }, //rto
    {
      start: stateCode.code.length + 2,
      end: stateCode.code.length + 2 + letter.length,
    }, //letter
    {
      start: stateCode.code.length + 2 + letter.length,
      end: plateValues.length,
    }, //number
  ];

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-4">
        <span className="text-orange-500">Format Example:</span>
        <h2 className="text-black p-4 bg-amber-50 font-medium rounded">
          [WB]-state or union code || [26]-two digit rto codes || [J]-single or
          multiple letters || [9056]-unique numbers btw 1-9999
        </h2>
      </div>
      <div className="flex items-center p-6 border-2 border-black bg-white">
        {/* state or union code */}
        {/* <div className="w-1/4 text-black font-bold text-3xl">
          {stateCode.code}
        </div> */}
        {/* two digit rto codes */}
        {/* <div className="w-1/4 text-black font-bold text-3xl flex items-center justify-center gap-4">
          {digits.slice(0, 2).map((digit, index) => (
            <div key={index}>{digit}</div>
          ))}
        </div> */}
        {/* single or multiple letters */}
        {/* <div className="w-1/4 text-black font-bold text-3xl">{letter}</div> */}
        {/* unique numbers btw 1-9999 */}
        {/* <div className="w-1/4 text-black font-bold text-3xl flex items-center justify-center gap-4"> */}
        {/* random khela hobe */}
        {/* {digits.slice(2).map((digit, index) => (
            <div key={index}>{digit}</div>
          ))} */}
        {/* </div> */}
        {groups.map((group, groupindex) => (
          <div key={groupindex} className="flex gap-2 px-4">
            {plateValues.slice(group.start, group.end).map((value, index) => {
              const actualIndex = group.start + index;
              return (
                <PlateCell
                  key={actualIndex}
                  value={value}
                  covered={coverIndices.includes(actualIndex)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberPlate;
