import { useState } from "react";
import styles from "../../styles/UserProfile.module.scss";
import { useRouter } from "next/router";
import moment from "moment";
import Icon from "../../../public/Vector.svg";
import Image from "next/image";
import Link from "next/link";
import { IData, userHeaders } from "./utilities";
import Icon2 from "../../../public/Dropdown.svg";
import UserDropdown from "./UserDropdown";
import { detailCard } from "./utilities";
import Icon1 from "../../../public/detail1.svg";
import {FaAngleDown, FaAngleLeft, FaAngleRight} from "react-icons/fa";


export interface Data {
  users: IData[];
}

const ITEMS_PER_PAGE = 10;

const Users = ({ users }: Data) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<null | Number>(null);
  const [openForm, setOpenForm] = useState<null | Number>(null);
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

  return (
    <div className={styles.UserContainer}>
      <table className={styles.UserContainer_table}>
        <thead className={styles.UserContainer_table_head}>
          <tr>
            {userHeaders.map((header, index) => {
              return (
                <th key={index}>
                  <div>
                    <span>{header}</span>
                    {header && (
                      <Image
                        src={Icon2}
                        alt=""
                        width={16}
                        height={12}
                        className={styles.UserContainer_table_head_click}
                        onClick={() =>
                          openForm === index
                            ? setOpenForm(null)
                            : setOpenForm(index)
                        }
                      />
                    )}
                  </div>
                  {openForm === index ? <UserDropdown /> : ""}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{user.orgName}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{moment(user.createdAt).format("MMM D, YYYY h:mm a")}</td>
                <td>
                  {moment(user.lastActiveDate).format("MMM D, YYYY h:mm a")}
                </td>
                <td>
                  <Image
                    src={Icon}
                    width={20}
                    height={20}
                    alt=""
                    onClick={() =>
                      isOpen === index ? setIsOpen(null) : setIsOpen(index)
                    }
                    className={styles.UserContainer_click}
                  />

                  {isOpen === index ? (
                    <div className={styles.card}>
                      <Link href={`/user/${user.id}`} className={styles.card_detail}>
                      <Image
                              src={Icon1}
                              alt=""
                              width={14}
                              height={14}
                            />
                            <span>View Details</span>
                      </Link>
                      {detailCard.map((detail, index) => {
                        return (
                          <Link
                            href={detail.value}
                            key={index}
                            className={styles.card_detail}
                          >
                            <Image
                              src={detail.image}
                              alt=""
                              width={14}
                              height={14}
                            />
                            <span>{detail.text}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.UserContainer_controls}>
        <div className={styles.UserContainer_controls_first}> 
          <p>Showing</p> <button>{endIndex}<FaAngleDown/></button> <p>out of {users.length}</p>
        </div>
        <div className={styles.UserContainer_controls_second}>
          <button onClick={handlePrevPage} disabled={currentPage === 1} className={styles.UserContainer_controls_second_left}>
          <FaAngleLeft />
          </button>
          <button onClick={handleNextPage} disabled={currentPage === totalPages} className={styles.UserContainer_controls_second_right}>
          <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
