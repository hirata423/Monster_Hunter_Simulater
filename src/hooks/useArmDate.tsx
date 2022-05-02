import { useContext } from "react";
import { ArmDateCotext, ArmDateContextType } from "../provider/ArmDateProvider";

export const useArmDate = (): ArmDateContextType => useContext(ArmDateCotext);
