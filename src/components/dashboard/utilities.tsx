import User1 from "../../../public/User-1.svg"
import User2 from "../../../public/User-2.svg"
import User3 from "../../../public/User-3.svg"
import User4 from "../../../public/User-4.svg"
import { IUser } from "./UserDashboard";
import Icon2 from "../../../public/detail2.svg"
import Icon3 from "../../../public/detail3.svg";

export const userHeaders:string[] = [
'Organization', 'Username', 'Email', 'Phone number', 'Date Joined', 'Last Active Date', ];

export const detailCard: IUser[] = [
  {
    image: Icon2,
    text: "Blacklist User",
    value: ""
  },
  {
    image: Icon3,
    text: "Activate User",
    value: ""
  },
];

export type IData = {
  id: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  lastActiveDate: string;
};

export type AUser = {
  card: IUser;
};

export const cards: IUser[] = [
  {
    image: User1,
    text: "USERS",
    value: "2,453",
  },
  {
    image: User2,
    text: "ACTIVE USERS",
    value: "2,453",
  },
  {
    image: User3,
    text: "USERS WITH LOANS",
    value: "12,453",
  },
  {
    image: User4,
    text: "USERS WITH SAVINGS",
    value: "102,453",
  },
 
];
