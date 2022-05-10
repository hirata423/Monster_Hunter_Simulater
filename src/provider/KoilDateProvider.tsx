import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import KoilDate from "../../Koil.json";
import { BuguType } from "../types/BuguType";

export type KoilDateContextType = {
  koilList: BuguType[];
  setKoilList: Dispatch<
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

export const KoilDateCotext = createContext<KoilDateContextType>(
  {} as KoilDateContextType
);

export const KoilDateProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [koilList, setKoilList] = useState<BuguType[]>(KoilDate);
  return (
    <KoilDateCotext.Provider value={{ koilList, setKoilList }}>
      {children}
    </KoilDateCotext.Provider>
  );
};
