import Image from "next/image";
import { getUsers } from "../../../../lib/User";
import {FaStar, FaRegStar} from "react-icons/fa"

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
  },

  guarantor:{
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  },
  socials:{
    facebook: string;
    instagram: string;
    twitter: string;
  },
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
    },
  },
  accountBalance: string;
  accountNumber: string;
}

interface UserDetailsProps {
  user: User;
}

const UserDetails = ({ user }: UserDetailsProps) => {
  return(
    <div>
      <div>Back to Users</div>
      <div>
        <p>User Details</p>
        <div>
          <button>BLACKLIST USER</button>
          <button>ACTIVATE USER</button>
        </div>
      </div>
      <div>       
          <Image src={user.profile.avatar} alt="" width={50} height={50}/>
          <div>
            <p>{user.profile.firstName} {user.profile.lastName}</p>
          </div>
          <div>
            <p>User{"'"}s Tier</p>
            <div>
              <FaStar/><FaRegStar/><FaRegStar/>
            </div>
          </div>
          <div>
            <p>{user.profile.currency}{user.accountBalance}</p>
            <p>{user.accountNumber}/Providus Bank</p>
          </div>
        <div>
          <p>General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>
      <div>
        <div>
          <h4>Personal Information</h4>
          <div>
            <h6>FULL NAME</h6>
            <p>{user.profile.firstName} {user.profile.lastName}</p>
          </div>
          <div>
            <h6>PHONE NUMBER</h6>
            <p>{user.profile.phoneNumber}</p>
          </div>
          <div>
            <h6>EMAIL ADDRESS</h6>
            <p>{user.email}</p>
          </div>
          <div>
            <h6>BVN</h6>
            <p>{user.profile.bvn}</p>
          </div>
          <div>
            <h6>GENDER</h6>
            <p>{user.profile.gender}</p>
          </div>
          <div>
            <h6>MARITAL STATUS</h6>
            <p>Single</p>
          </div>
          <div>
            <h6>CHILDREN</h6>
            <p>None</p>
          </div>
          <div>
            <h6>TYPE OF RESIDENCE</h6>
            <p>Parent{"'"}s Apartment</p>
          </div>
        </div>
        <div>
          <h4>Education and Employment</h4>
          <div>
            <div>
              <h6>LEVEL OF EDUCATION</h6>
              <p>{user.education.level}</p>
            </div>
            <div>
              <h6>EMPLOYMENT STATUS</h6>
              <p>{user.education.employmentStatus}</p>
            </div>
            <div>
              <h6>SECTOR OF EMPLOYMENT</h6>
              <p>{user.education.sector}</p>
            </div>
            <div>
              <h6>DURATION OF EMPLOYMENT</h6>
              <p>{user.education.duration}</p>
            </div>
            <div>
              <h6>OFFICE EMAIL</h6>
              <p>{user.education.officeEmail}</p>
            </div>
            <div>
              <h6>MONTHLY INCOME</h6>
              <p>{user.profile.currency}{user.education.monthlyIncome[0]}-{user.profile.currency}{user.education.monthlyIncome[1]}</p>
            </div>
            <div>
              <h6>LOAN REPAYMENT</h6>
              <p>{user.education.loanRepayment}</p>
            </div>
          </div>
        </div>
        <div>
          <h4>Socials</h4>
          <div>
            <h6>TWITTER</h6>
            <p>{user.socials.twitter}</p>
          </div>
          <div>
            <h6>FACEBOOK</h6>
            <p>{user.socials.facebook}</p>
          </div>
          <div>
            <h6>INSTAGRAM</h6>
            <p>{user.socials.instagram}</p>
          </div>
        </div>
        <div>
          <h4>Guarantor</h4>
          <div>
            <div>
              <h6>FULL NAME</h6>
              <p>{user.guarantor.firstName} {user.guarantor.lastName}</p>
            </div>
            <div>
              <h6>PHONE NUMBER</h6>
              <p>{user.guarantor.phoneNumber}</p>
            </div>
            <div>
              <h6>EMAIL ADDRESS</h6>
              <p>{user.guarantor.address}</p>
            </div>
            <div>
              <h6>RELATIONSHIP</h6>
              <p>{user.guarantor.gender}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);
  const user = await res.json()
  return {
    props: {
      user
    },
  };
}

export async function getStaticPaths() {
  const users = await getUsers();

  
  const allPaths = users.map((path)=>{
    return{
        params: {
            id: path.id
        }
    }
  });

  
  return {
    paths: allPaths,
    fallback: false,
  };
}
export default UserDetails;
