import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { Bukis } from "../types/BukiTypes";
import BukiDate from "../../Buki.json";

export type BukisDateContextType = {
  bukiList: Bukis[];
  setBukiList: Dispatch<
    SetStateAction<
      {
        id: number;
        name: string;
        subName: string;
        power: number;
        type?: string;
        critical?: string;
        checked: boolean;
      }[]
    >
  >;
};

export const BukisDateCotext = createContext<BukisDateContextType>(
  {} as BukisDateContextType
);

export const BukiSDateProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [bukiList, setBukiList] = useState<Bukis[]>(BukiDate);
  return (
    <BukisDateCotext.Provider value={{ bukiList, setBukiList }}>
      {children}
    </BukisDateCotext.Provider>
  );
};
