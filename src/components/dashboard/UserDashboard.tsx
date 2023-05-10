import { cards, IData  } from "./utilities";
import Image from "next/image";
import styles from "../../styles/UserDashboard.module.scss";

export type IUser = {
  image: string;
  text: string;
  value: string;
};

export interface User {
  cards: IUser[];
}

export interface Data {
  users: IData[];
}

const Card = ({ cards }: User) => {
  const renderCard = cards.map((card, index) => {
    return (
      <div key={index} className={styles.UserContainer_card}>
        <Image src={card.image} width={40} height={40} alt="" />
        <p className={styles.UserContainer_card_text}>{card.text}</p>
        <p className={styles.UserContainer_card_value}>{card.value}</p>
      </div>
    );
  });
  return <div className={styles.UserContainer}>{renderCard}</div>;
};


const UserDashboard = () => {
  return (
    <div className={styles.Container}>
      <p className={styles.UserContainer_text}>User</p>
      <Card cards={cards} />     
    </div>
  );
};


export default UserDashboard;
