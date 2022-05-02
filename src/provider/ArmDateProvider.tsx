import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import ArmDate from "../../Arm.json";
import { BuguType } from "../types/BuguType";

export type ArmDateContextType = {
  armList: BuguType[];
  setArmList: Dispatch<
    SetStateAction<
      {
        id: number;
        name: string;
        subName: string;
        blockPoint: number;
        skill: {
          firstSK?: string;
          secondSK?: string;
          thirdSK?: string;
        };
        skillLevel: {
          firstSK?: number;
          secondSK?: number;
          thirdSK?: number;
        };
        slot: {
          firstSL?: string;
          secondSL?: string;
          thirdSL?: string;
        };
        flag: boolean;
      }[]
    >
  >;
};

export const ArmDateCotext = createContext<ArmDateContextType>(
  {} as ArmDateContextType
);

export const ArmDateProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [armList, setArmList] = useState<BuguType[]>(ArmDate);
  return (
    <ArmDateCotext.Provider value={{ armList, setArmList }}>
      {children}
    </ArmDateCotext.Provider>
  );
};
