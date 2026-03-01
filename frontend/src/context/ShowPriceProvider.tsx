import { useState, ReactNode } from "react";
import { ShowPriceContext } from "./ShowPriceContext";

interface ShowPriceProviderProps {
  children: React.ReactNode;
}

export function ShowPriceProvider({ children }: ShowPriceProviderProps) {
  const [showPrice, setShowPrice] = useState<boolean>(true);

  function toggleShowPrice() {
    setShowPrice((value) => !value);
  }

  return (
    <ShowPriceContext.Provider value={{ showPrice, toggleShowPrice }}>
      {children}
    </ShowPriceContext.Provider>
  );
}
