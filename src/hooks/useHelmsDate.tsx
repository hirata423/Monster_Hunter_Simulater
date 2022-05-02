import { useContext } from "react";
import {
  HelmDateCotext,
  HelmDateContextType,
} from "../provider/HelmDateProvider";

export const useHelmDate = (): HelmDateContextType =>
  useContext(HelmDateCotext);
