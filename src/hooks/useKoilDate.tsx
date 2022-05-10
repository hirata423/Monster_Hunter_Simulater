import { useContext } from "react";
import {
  KoilDateCotext,
  KoilDateContextType,
} from "../provider/KoilDateProvider";

export const useKoilDate = (): KoilDateContextType =>
  useContext(KoilDateCotext);
