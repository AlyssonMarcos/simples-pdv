import { Routes, Route } from "react-router";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import { ShowPriceProvider } from "../context/showPriceProvider";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        element={
          <ShowPriceProvider>
            <AppLayout />
          </ShowPriceProvider>
        }
      >
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
