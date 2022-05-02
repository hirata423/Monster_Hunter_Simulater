import { useContext } from "react";
import {
  BukisDateCotext,
  BukisDateContextType,
} from "../provider/BukisDateProvider";

export const useBukisDate = (): BukisDateContextType =>
  useContext(BukisDateCotext);
