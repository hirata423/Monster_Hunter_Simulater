import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { BuguType } from "../types/BuguType";

export type TotalDateContextType = {
  total: BuguType[];
  setTotal: Dispatch<SetStateAction<BuguType[]>>;
};

export const TotalDateCotext = createContext<TotalDateContextType>(
  {} as TotalDateContextType
);

export const TotalDateProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [total, setTotal] = useState<BuguType[]>([]);
  return (
    <TotalDateCotext.Provider value={{ total, setTotal }}>
      {children}
    </TotalDateCotext.Provider>
  );
};
