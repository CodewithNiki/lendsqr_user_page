import React from 'react';
import Unionlogo from '../../../public/Unionlogo.svg';
import Image from 'next/image';
import styles from "../../styles/Logo.module.scss"

const Logo = () => {
  return (
    <div className={styles.logo}>
        <Image src={Unionlogo} alt='union' height={20} width={20}/>
        <p className={styles.logo_para}>lendsqr</p>
    </div>
  )
}

export default Logo