import Image from "next/image";
import loginImage from "../../../public/loginImage.svg";
import Logo from "../logo/Logo";
import { NextPage } from "next";
import Link from "next/link";
import {  signIn } from "next-auth/react";
import styles from "../../styles/Login.module.scss";
import React, { FormEventHandler, useState } from "react";

const LoginForm: NextPage = (props): JSX.Element => {
    const [userInfo, setUserInfo] = useState({email: "", password: ""});
  
    const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) =>{
      e.preventDefault();    
  
      const res = await signIn("credentials", {
        email: userInfo.email,
        password: userInfo.password,
        redirect: false,
      })
    }
    
  
    return (
      <div className={styles.login}>
        <div className={styles.login_logo}>
          <Logo />
        </div>
        <div className={styles.login_image}>
          <Image src={loginImage} alt="image" width={600} height={338} />
        </div>
        <form className={styles.login_form} onSubmit={handleSubmit}>
          <div className={styles.login_form_container}>
            <h1 className={styles.login_form_container_heading}>Welcome!</h1>
            <p className={styles.login_form_container_para}>Enter details to login</p>
            <input type="text" placeholder="Email" value={userInfo.email} onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} /><br/>
            <input type="text" placeholder="Password" value={userInfo.password} onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}/><br/>
            <Link href={"/"} className={styles.login_form_container_text}>FORGOT PASSWORD?</Link><br/>
            <button className={styles.login_form_container_btn} value="Login">LOG IN</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default LoginForm;