import { userHeaders } from "./utilities";
import styles from "../../styles/DetailCard.module.scss"

const UserDropdown = () => {
  return (
    <form className={styles.form}>
      <label>Organization</label>
      <select>
        <option>Select</option>
      </select>
        {userHeaders.map((header, index) =>{
            return (
                <div key={index} className={styles.form_info}>
                    <label htmlFor="">{header}</label>
                    <input type="text" placeholder={header} />
                </div>
            )
        })}
        <div className={styles.form_btns}>
          <div>Reset</div>
          <div>Filter</div>
        </div>
    </form>
  )
}

export default UserDropdown