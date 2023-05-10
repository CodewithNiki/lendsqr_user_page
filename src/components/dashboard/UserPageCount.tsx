import { useState } from 'react'
import {FaAngleDown, FaAngleLeft, FaAngleRight} from "react-icons/fa";
import styles from "../../styles/UserProfile.module.scss"
import { IData } from "./utilities";
export interface Data {
    users: IData[];
  }


const ITEMS_PER_PAGE = 8;

const UserPageCount = ({users}: Data) => {
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };


  return (
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
  )
}

export default UserPageCount