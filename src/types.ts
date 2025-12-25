export type StateCode = {
  code: string;
  name: string;
};

export type ActionMode = "COVER" | "PLATES";

export type Filters = {
  state: boolean;
  rto: boolean;
  letter: boolean;
  number: boolean;
};
// export type NumberPlate = {
//   state: string;
//   rto: number;
//   letter: string;
//   number: number;
// };
