import { useContext } from "react";
import {
  TotalDateCotext,
  TotalDateContextType,
} from "../provider/TotalDateProvider";

export const useTotalDate = (): TotalDateContextType =>
  useContext(TotalDateCotext);
