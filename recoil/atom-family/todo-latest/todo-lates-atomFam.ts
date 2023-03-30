import { atomFamily } from "recoil";

export const todoAtomFamily = atomFamily({
  key: "todoAtomFam",
  default: { message: "", isUpdated: false },
});
