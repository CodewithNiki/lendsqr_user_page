import { Nav } from "./SideNav";
import Icon1 from "../../../public/Icon1.svg"
import Icon2 from "../../../public/Icon2.svg"
import Icon3 from "../../../public/Icon3.svg"
import Icon4 from "../../../public/Icon4.svg"
import Icon5 from "../../../public/Icon5.svg"

export type INav = {
  link: Nav;
};

export const customerList: Nav[] = [
  { navText: "Users", url: "/", image: Icon1 },
  { navText: "Guarantors", url: "/", image: Icon2 },
  { navText: "Loans", url: "#services", image: Icon4 },
  { navText: "Decision Models", url: "/", image: Icon3 },
  { navText: "Savings", url: "/", image: Icon5 },
  { navText: "Loan Requests", url: "/", image: Icon4 },
  { navText: "Whitelist", url: "/", image: Icon1 },
  { navText: "Karma", url: "/", image: Icon1 },
];

export const businessList: Nav[] = [
  { navText: "Organization", url: "", image: Icon4 },
  { navText: "Loan Products", url: "", image: Icon4 },
  { navText: "Savings Products", url: "", image: Icon4 },
  { navText: "Decision Models", url: "", image: Icon4 },
  { navText: "Savings", url: "", image: Icon4},
  { navText: "Loan Requests", url: "", image: Icon4 },
  { navText: "Fees and Charges", url: "", image: Icon4 },
  { navText: "Transactions", url: "", image: Icon4 },
  { navText: "Services", url: "", image: Icon4 },
  { navText: "Service Account", url: "", image: Icon1 },
  { navText: "Settlements", url: "", image: Icon4 },
  { navText: "Reports", url: "", image: Icon4 },
];

export const settingsList: Nav[] = [
  { navText: "Preferences", url: "", image: Icon4 },
  { navText: "Fees and Pricing", url: "", image: Icon4 },
  { navText: "Audit Logs", url: "", image: Icon4 },
  { navText: "Decision Models", url: "", image: Icon4 },
  { navText: "Systems Messages", url: "", image: Icon4 },
];