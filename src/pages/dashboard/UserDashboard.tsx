import { cards  } from "./utilities";
import Image from "next/image";
import styles from "../../styles/UserDashboard.module.scss";
import { getUsers } from "../../../lib/User";
import { useState } from "react";
import Link from "next/link";

export type IUser = {
  image: string;
  text: string;
  value: string;
};

export interface User {
  cards: IUser[];
}

export type IData = {
  id: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  lastActiveDate: string;
};
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

const ITEMS_PER_PAGE = 10;

const Users = ({ users }: Data) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentUsers = users.slice(startIndex, endIndex);  
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const renderUsers = currentUsers.map(
    (user) => {
      const timestamp: string = `${user.createdAt}`;
      const dateObj: Date = new Date(timestamp);
      const formattedDate: string = dateObj.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      const lastTimestamp: string = `${user.lastActiveDate}`;
      const dateOBJ: Date = new Date(lastTimestamp);
      const lastFormattedDate: string = dateOBJ.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      return (
        <Link href={`/user/${user.id}`} key={user.id} className={styles.UserContainer_details_users_info}>
          <p className={styles.UserContainer_details_users_info_text}>{user.orgName}</p>
          <p className={styles.UserContainer_details_users_info_text}>{user.userName}</p>
          <p className={styles.UserContainer_details_users_info_text}>{user.email}</p>
          <p className={styles.UserContainer_details_users_info_text}>{user.phoneNumber}</p>
          <p className={styles.UserContainer_details_users_info_text}>{formattedDate}</p>
          <p className={styles.UserContainer_details_users_info_text}>{lastFormattedDate}</p>
        </Link>
      );
    }
  );
  return (
    <div className={styles.UserContainer_details_users}>
      {renderUsers}
      <div>
        <div className={styles.UserContainer_details_users_controls}>
          <p>
            Showing <button>{currentUsers.length * currentPage}</button> out of{" "}
            {users.length}
          </p>
          <div>
            <button disabled={currentPage === 1} onClick={handlePrevPage}>
              Prev
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={handleNextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserDashboard = ({ users }: Data) => {
  return (
    <div>
      <p className={styles.UserContainer_text}>User</p>
      <Card cards={cards} />
      <div className={styles.UserContainer_details}>
        <div className={styles.UserContainer_details_header}>
          <p className={styles.UserContainer_details_header_text}>ORGANIZATION</p>
          <p className={styles.UserContainer_details_header_text}>USERNAME</p>
          <p className={styles.UserContainer_details_header_text}>EMAIL</p>
          <p className={styles.UserContainer_details_header_text}>PHONE NUMBER</p>
          <p className={styles.UserContainer_details_header_text}>DATE JOINED</p>
          <p className={styles.UserContainer_details_header_text}>LAST ACTIVE DATE</p>
        </div>
        <Users users={users} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const users = await getUsers();
  

  return {
    props: {
      users,
    },
  };
}

export default UserDashboard;
