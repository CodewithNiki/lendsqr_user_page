import Image from "next/image";
import { getUsers } from "../../../../lib/User";
import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "../../../styles/UserDetail.module.scss";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from 'axios';

interface User {
  email: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };

  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    loanRepayment: string;
    monthlyIncome: {
      0: string;
      1: string;
    };
  };
  accountBalance: string;
  accountNumber: string;
}


interface UserDetailsProps {
  user: User;
}

const details: String[] = ['General Details', 'Documents', 'Bank Details', 'Loans', 'Savings', 'App and System'];

const UserDetails = ({ user }: UserDetailsProps) => {
  const router = useRouter();
  return (
    <div className={styles.userDetail_container}>
      <div
        className={styles.userDetail_container_first}
        onClick={() => router.back()}
      >
        <FaLongArrowAltLeft /> Back to Users
      </div>
      <div className={styles.userDetail_container_second}>
        <p className={styles.userDetail_container_second_text}>User Details</p>
        <div className={styles.userDetail_container_second_btns}>
          <div>BLACKLIST USER</div>
          <div>ACTIVATE USER</div>
        </div>
      </div>
      <div className={styles.userDetail_container_third}>
        <div className={styles.userDetail_container_third_container}>
          <Image
            src={user.profile.avatar}
            alt=""
            width={70}
            height={70}
            className={styles.userDetail_container_third_container_img}
          />
          <div className={styles.userDetail_container_third_container_profile}>
            <p>
              {user.profile.firstName} {user.profile.lastName}
            </p>
            <div>{user.profile.bvn}</div>
          </div>
          <div className={styles.userDetail_container_third_container_star}>
            <p>User{"'"}s Tier</p>
            <div
              className={styles.userDetail_container_third_container_star_star}
            >
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </div>
          </div>
          <div className={styles.userDetail_container_third_container_account}>
            <p
              className={
                styles.userDetail_container_third_container_account_currency
              }
            >
              {user.profile.currency}
              {user.accountBalance}
            </p>
            <p>{user.accountNumber}/Providus Bank</p>
          </div>
        </div>
        <div className={styles.userDetail_container_third_details}>
          {details.map((detail, index) =>{
            return (
              <Link href={"#"}  key={index}>
                <p>{detail}</p>
              </Link>
            )
          })}
        </div>
      </div>
      <div className={styles.userDetail_container_fourth}>
        <div className={styles.userDetail_container_fourth_container}>
          <h4 className={styles.userDetail_container_fourth_container_header}>
            Personal Information
          </h4>
          <div className={styles.userDetail_container_fourth_container_content}>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>FULL NAME</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>
                {user.profile.firstName} {user.profile.lastName}
              </p>
            </div>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>PHONE NUMBER</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>{user.profile.phoneNumber}</p>
            </div>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>EMAIL ADDRESS</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>{user.email}</p>
            </div>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>BVN</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>{user.profile.bvn}</p>
            </div>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>GENDER</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>{user.profile.gender}</p>
            </div>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>MARITAL STATUS</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>Single</p>
            </div>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>CHILDREN</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>None</p>
            </div>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>TYPE OF RESIDENCE</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>Parent{"'"}s Apartment</p>
            </div>
          </div>
        </div>
        <div className={styles.userDetail_container_fourth_container}>
          <h4 className={styles.userDetail_container_fourth_container_header}>
            Education and Employment
          </h4>
          <div className={styles.userDetail_container_fourth_container_content}>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>LEVEL OF EDUCATION</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>{user.education.level}</p>
            </div>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>EMPLOYMENT STATUS</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>{user.education.employmentStatus}</p>
            </div>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>SECTOR OF EMPLOYMENT</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>{user.education.sector}</p>
            </div>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>DURATION OF EMPLOYMENT</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>{user.education.duration}</p>
            </div>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>OFFICE EMAIL</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>{user.education.officeEmail}</p>
            </div>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>MONTHLY INCOME</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>
                {user.profile.currency}
                {user.education.monthlyIncome[0]} - {user.profile.currency}
                {user.education.monthlyIncome[1]}
              </p>
            </div>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>LOAN REPAYMENT</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>{user.education.loanRepayment}</p>
            </div>
          </div>
        </div>
        <div className={styles.userDetail_container_fourth_container}>
          <h4 className={styles.userDetail_container_fourth_container_header}>Socials</h4>
          <div className={styles.userDetail_container_fourth_container_content}>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>TWITTER</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>{user.socials.twitter}</p>
            </div>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>FACEBOOK</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>{user.socials.facebook}</p>
            </div>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>INSTAGRAM</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>{user.socials.instagram}</p>
            </div>
          </div>
        </div>
        <div className={styles.userDetail_container_fourth_container}>
          <h4 className={styles.userDetail_container_fourth_container_header}>Guarantor</h4>
          <div className={styles.userDetail_container_fourth_container_content}>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>FULL NAME</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>
                {user.guarantor.firstName} {user.guarantor.lastName}
              </p>
            </div>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>PHONE NUMBER</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>{user.guarantor.phoneNumber}</p>
            </div>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>EMAIL ADDRESS</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>{user.guarantor.address}</p>
            </div>
            <div className={styles.userDetail_container_fourth_container_content_text}>
              <h6 className={styles.userDetail_container_fourth_container_content_text_header}>RELATIONSHIP</h6>
              <p className={styles.userDetail_container_fourth_container_content_text_para}>{user.guarantor.gender}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context: { params: { id: string } }) {
  const { id } = context.params;
  const res = await axios.get(
    `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
  );
  const user = await res.data;
  return {
    props: {
      user,
    },
  };
}

export async function getStaticPaths() {
  const users = await getUsers();

  const allPaths = users.map((path: { id: string }) => {
    return {
      params: {
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}
export default UserDetails;
