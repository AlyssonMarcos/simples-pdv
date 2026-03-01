import React from "react";
import styles from "./Home.module.css";
import { useShowPrice } from "../context/ShowPrice";

const Home = () => {
  const { showPrice } = useShowPrice();

  return (
    <main className="layout">
      <header>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h3>Vendas</h3>
            <p>{showPrice ? "R$ 0,00" : "R$ •••••"}</p>
            <small>Hoje - 0 vendas realizadas</small>
          </div>

          <div className={styles.card}>
            <h3>Totais em caixa</h3>
            <p>{showPrice ? "R$ 0,00" : "R$ •••••"}</p>
            <small>26/02/2026 22:27</small>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Home;
