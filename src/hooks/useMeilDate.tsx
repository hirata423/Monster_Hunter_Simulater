import { useContext } from "react";
import {
  MeilDateCotext,
  MeilDateContextType,
} from "../provider/MeilDateProvider";

export const useMeilDate = (): MeilDateContextType =>
  useContext(MeilDateCotext);
