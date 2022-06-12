import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { BuguType } from "../types/BuguType";

export type TotalDataContextType = {
  total: BuguType[];
  setTotal: Dispatch<SetStateAction<BuguType[]>>;
};

export const TotalDataCotext = createContext<TotalDataContextType>(
  {} as TotalDataContextType
);

export const TotalDataProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [total, setTotal] = useState<BuguType[]>([]);
  return (
    <TotalDataCotext.Provider value={{ total, setTotal }}>
      {children}
    </TotalDataCotext.Provider>
  );
};
