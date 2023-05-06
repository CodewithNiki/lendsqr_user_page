import React from "react";
import Logo from "../logo/Logo";
import { FaSistrix, FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Notification from "../../../public/Notification.svg";
import styles from "../../styles/Nav.module.scss";

const NavBar = () => {
  const { data: session } = useSession();

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_first}>
        <Logo />
        <div className={styles.nav_first_input}>
          <input
            type="text"
            placeholder="Search for anything"
            className={styles.nav_first_input_input}
          />
          <FaSistrix className={styles.nav_first_input_icon} />
        </div>
      </div>
      <div className={styles.nav_second}>
        <Link href="" className={styles.nav_second_link}>
          Docs
        </Link>
        <Image src={Notification} alt="" width={22} height={24} />
        <Image
          src={session?.user?.image}
          width={48}
          height={48}
          alt="img"
          className={styles.nav_second_img}
        />
        <div className={styles.nav_second_para}>
        <p>{session?.user?.name}</p>
        <FaAngleDown className={styles.nav_second_para_icon}/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
