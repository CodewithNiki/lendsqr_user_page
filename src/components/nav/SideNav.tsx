import React from "react";
import { customerList, businessList, settingsList } from "./utilities";
import Link from "next/link";
import Logout from "../login/Logout";
import styles from "../../styles/SideNav.module.scss";
import Image from "next/image";
import Logo from "../logo/Logo";

export type Nav = {
  navText: string;
  url: string;
  image: string;
};

export interface ICustomer {
  customerList: Nav[];
}

export interface IBusiness {
  businessList: Nav[];
}

export interface ISettings {
  settingsList: Nav[];
}

export const CusList = ({ customerList }: ICustomer) => {
  const renderedLists = customerList.map((list, index) => {
    return (
      <Link className={styles.sideNav_aside_link_links} href={list.url} key={index}>
        <Image src={list.image} alt="" width={10} height={10} />
        {list.navText}
      </Link>
    );
  });
  return <div className={styles.sideNav_aside_link}>{renderedLists}</div>;
};

export const BusList = ({ businessList }: IBusiness) => {
  const renderedLists = businessList.map((list, index) => {
    return (
      <Link className={styles.sideNav_aside_link_links} href={list.url} key={index}>
        <Image src={list.image} alt="" width={10} height={10} />
        {list.navText}
      </Link>
    );
  });
  return <div className={styles.sideNav_aside_link}>{renderedLists}</div>;
};

export const SetList = ({ settingsList }: ISettings) => {
  const renderedLists = settingsList.map((list, index) => {
    return (
      <Link className={styles.sideNav_aside_link_links} href={list.url} key={index}>
        {/* <Image src={list.image} alt='' width={10} height={10}/> */}
        {list.navText}
      </Link>
    );
  });
  return <div className={styles.sideNav_aside_link}>{renderedLists}</div>;
};

const SideNav = () => {
  return (
    <div className={styles.sideNav}>
      <Logo />
      <aside className={styles.sideNav_aside}>
        <p className={styles.sideNav_aside_heading}>Switch Organization</p>
        <p className={styles.sideNav_aside_text}>Dashboard</p>

        <nav className={styles.sideNav_aside_nav}>
          <p className={styles.sideNav_aside_title}>CUSTOMER</p>
          <CusList customerList={customerList} />
        </nav>

        <nav className={styles.sideNav_aside_nav}>
          <p className={styles.sideNav_aside_title}>BUSINESS</p>
          <BusList businessList={businessList} />
        </nav>

        <nav className={styles.sideNav_aside_nav}>
          <p className={styles.sideNav_aside_title}>SETTINGS</p>
          <SetList settingsList={settingsList} />
        </nav>

        <Logout />
      </aside>
    </div>
  );
};

export default SideNav;
