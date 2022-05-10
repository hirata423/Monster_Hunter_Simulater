import { useContext } from "react";
import {
  LeginsDateCotext,
  LeginsDateContextType,
} from "../provider/LeginsDateProvider";

export const useLeginsDate = (): LeginsDateContextType =>
  useContext(LeginsDateCotext);
