import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import LeginsDate from "../../Legins.json";
import { BuguType } from "../types/BuguType";

export type LeginsDateContextType = {
  leginsList: BuguType[];
  setLeginsList: Dispatch<
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

export const LeginsDateCotext = createContext<LeginsDateContextType>(
  {} as LeginsDateContextType
);

export const LeginsDateProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [leginsList, setLeginsList] = useState<BuguType[]>(LeginsDate);
  return (
    <LeginsDateCotext.Provider value={{ leginsList, setLeginsList }}>
      {children}
    </LeginsDateCotext.Provider>
  );
};
