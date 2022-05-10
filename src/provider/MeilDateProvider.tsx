import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import MeilDate from "../../Meil.json";
import { BuguType } from "../types/BuguType";

export type MeilDateContextType = {
  meilList: BuguType[];
  setMeilList: Dispatch<
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

export const MeilDateCotext = createContext<MeilDateContextType>(
  {} as MeilDateContextType
);

export const MeilDateProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [meilList, setMeilList] = useState<BuguType[]>(MeilDate);
  return (
    <MeilDateCotext.Provider value={{ meilList, setMeilList }}>
      {children}
    </MeilDateCotext.Provider>
  );
};
