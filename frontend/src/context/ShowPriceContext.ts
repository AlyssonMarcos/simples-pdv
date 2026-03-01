import { createContext } from "react";

export interface ShowPriceContextType {
  showPrice: boolean;
  toggleShowPrice: () => void;
}

export const ShowPriceContext = createContext<ShowPriceContextType | undefined>(
  undefined,
);
