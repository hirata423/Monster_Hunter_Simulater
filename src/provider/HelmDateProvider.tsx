import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import HelmDate from "../../Helm.json";
import { BuguType } from "../types/BuguType";

export type HelmDateContextType = {
  helmList: BuguType[];
  setHelmList: Dispatch<
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

export const HelmDateCotext = createContext<HelmDateContextType>(
  {} as HelmDateContextType
);

export const HelmDateProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [helmList, setHelmList] = useState<BuguType[]>(HelmDate);
  return (
    <HelmDateCotext.Provider value={{ helmList, setHelmList }}>
      {children}
    </HelmDateCotext.Provider>
  );
};
