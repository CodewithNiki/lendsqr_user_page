import React from 'react';
import { customerList, businessList, settingsList,  } from './utilities';
import Link from 'next/link';
import Logout from '../login/Logout';
import styles from '../../styles/SideNav.module.scss'
import Image from 'next/image';

export type Nav = {
    navText: string;
    url: string;
    image: string;
  };
  
  export interface ICustomer {
    customerList: Nav[];
  };

  export interface IBusiness {
    businessList: Nav[];
  };

  export interface ISettings {
    settingsList: Nav[];
  };

const CusList = ({ customerList }: ICustomer) => {
    const renderedLists = customerList.map((list, index)=>{
        return <Link className={styles.sideNav_link_links} href={list.url} key={index}>
          <Image src={list.image} alt='' width={10} height={10}/>
          {list.navText}</Link>
    })
    return <div className={styles.sideNav_link} >{renderedLists}</div>;
}

const BusList = ({ businessList }: IBusiness) => {
    const renderedLists = businessList.map((list, index)=>{
        return <Link className={styles.sideNav_link_links} href={list.url} key={index}>
          <Image src={list.image} alt='' width={10} height={10}/>
          {list.navText}</Link>
    })
    return <div className={styles.sideNav_link} >{renderedLists}</div>;
}

const SetList = ({ settingsList }: ISettings) => {
    const renderedLists = settingsList.map((list, index)=>{
        return <Link className={styles.sideNav_link_links} href={list.url} key={index}>
          {/* <Image src={list.image} alt='' width={10} height={10}/> */}
          {list.navText}</Link>
    })
    return <div className={styles.sideNav_link} >{renderedLists}</div>;
}

const SideNav = () => {
  return (
    <aside className={styles.sideNav}>
        <p className={styles.sideNav_heading}>Switch Organization</p>
        <p className={styles.sideNav_text}>Dashboard</p>

       <nav className={styles.sideNav_nav}>
        <p className={styles.sideNav_title}>CUSTOMER</p>
        <CusList customerList={customerList}/>
       </nav>

       <nav className={styles.sideNav_nav}>
        <p className={styles.sideNav_title}>BUSINESS</p>
        <BusList businessList={businessList}/>
       </nav>

       <nav>
        <p className={styles.sideNav_title}>SETTINGS</p>
        <SetList settingsList={settingsList}/>
       </nav>

       <Logout/>
    </aside>
  )
}

export default SideNav