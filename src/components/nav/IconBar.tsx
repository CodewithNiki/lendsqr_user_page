import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BusList, CusList, SetList } from "./SideNav";
import Logo from "../logo/Logo";
import { customerList, businessList, settingsList } from "./utilities";
import Logout from "../login/Logout";
import styles from "../../styles/IconBar.module.scss";

const IconBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div onClick={handleClick} className={styles.container_bar}>
        <FaBars />
      </div>
      {isOpen && (
        <div className={styles.container}>
          <aside className={styles.container_aside}>
          <Logo />
            <p className={styles.container_aside_heading}>Switch Organization</p>
            <p className={styles.container_aside_text}>Dashboard</p>

            <nav className={styles.container_aside_nav}>
              <p className={styles.container_aside_title}>CUSTOMER</p>
              <CusList customerList={customerList} />
            </nav>

            <nav className={styles.container_aside_nav}>
              <p className={styles.container_aside_title}>BUSINESS</p>
              <BusList businessList={businessList} />
            </nav>

            <nav className={styles.container_aside_nav}>
              <p className={styles.container_aside_title}>SETTINGS</p>
              <SetList settingsList={settingsList} />
            </nav>

            <Logout />
          </aside>
        </div>
      )}
    </div>
  );
};

export default IconBar;
