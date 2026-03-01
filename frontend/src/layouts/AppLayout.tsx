import { Outlet } from "react-router";
import styles from "./AppLayout.module.css";
import { RxExit } from "react-icons/rx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useShowPrice } from "../context/ShowPrice";

export default function AppLayout() {
  const { showPrice, toggleShowPrice } = useShowPrice();
  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.headerContent} layout`}>
          <h1>Simples PDV</h1>

          <div className={styles.headerRight}>
            <div className="cursor-pointer" onClick={toggleShowPrice}>
              {showPrice ? (
                <FaEye className="align-center" color="#fff" size={24} />
              ) : (
                <FaEyeSlash className="align-center" color="#fff" size={24} />
              )}
            </div>

            <div className={`${styles.userInfo} cursor-pointer`}>
              <RxExit size={24} />
              <span>Usuario</span>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
