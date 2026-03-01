import { useContext } from "react";
import { ShowPriceContext } from "./ShowPriceContext";

export function useShowPrice() {
  const context = useContext(ShowPriceContext);

  if (!context) {
    throw new Error("useShowPrice must be used within a ShowPriceProvider");
  }

  return context;
}
