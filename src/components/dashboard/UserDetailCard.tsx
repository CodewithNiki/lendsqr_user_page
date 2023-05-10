import { detailCard } from "./utilities";
import styles from "../../styles/DetailCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const UserDetailCard = () => {
  return (
    <div className={styles.card}>
        {detailCard.map((detail, index) =>{
            return (
                <Link href={detail.value} key={index} className={styles.card_detail}>
                    <Image src={detail.image} alt="" width={14} height={14} /><span>{detail.text}</span>
                </Link>
            )
        })}
    </div>
  )
}

export default UserDetailCard