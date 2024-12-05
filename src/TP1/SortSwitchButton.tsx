import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import styles from "./SortSwitchButton.module.css";

interface SortSwitchButtonProps {
  ordreTri: "asc" | "desc";
  handleChangerOrdre: () => void;
}

const SortSwitchButton: React.FC<SortSwitchButtonProps> = ({
  ordreTri,
  handleChangerOrdre,
}) => {
  return (
    <button
      className={`${styles["switch-btn"]} ${
        ordreTri === "asc" ? styles["asc"] : styles["desc"]
      }`}
      onClick={handleChangerOrdre}
    >
      {/* ljust an icon for better UI ken theeb tnehiha w l function order tri ameltha bch maysir tri ken ki t3amar checkbox tekhtear wahda mel les 3 tri*/}
      <span className={styles.icon}>
        {ordreTri === "asc" ? <FaArrowUp /> : <FaArrowDown />}
      </span>
      <span className={styles["switch-text"]}>
        {ordreTri === "asc" ? "Ascendant" : "Descendant"}
      </span>
    </button>
  );
};

export default SortSwitchButton;
