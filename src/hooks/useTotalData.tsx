import { useContext } from "react";
import {
  TotalDataCotext,
  TotalDataContextType,
} from "../provider/TotalDataProvider";

export const useTotalData = (): TotalDataContextType =>
  useContext(TotalDataCotext);
