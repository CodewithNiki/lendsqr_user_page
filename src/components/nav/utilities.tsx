import { Nav } from "./SideNav";
import Icon1 from '../../../public/users.svg'
import Icon2 from '../../../public/guarantor.svg'
import Icon3 from '../../../public/loan.svg'
import Icon4 from '../../../public/decision.svg'
import Icon5 from '../../../public/savings.svg'
import Icon6 from '../../../public/loan_request.svg'
import Icon7 from '../../../public/whitelist.svg'
import Icon8 from '../../../public/karma.svg'
import Icon9 from '../../../public/org.svg'
import Icon10 from '../../../public/loan_request.svg'
import Icon11 from '../../../public/savings.svg'
import Icon12 from '../../../public/decision.svg'
import Icon13 from '../../../public/fees.svg'
import Icon14 from '../../../public/trans.svg'
import Icon15 from '../../../public/service.svg'
import Icon16 from '../../../public/systems.svg'
import Icon17 from '../../../public/settle.svg'
import Icon18 from '../../../public/report.svg'
import Icon19 from '../../../public/prefer.svg'
import Icon20 from '../../../public/audit.svg'


export type INav = {
  link: Nav;
};

export const customerList: Nav[] = [
  { navText: "Users", url: "/", image: Icon1 },
  { navText: "Guarantors", url: "/", image: Icon2 },
  { navText: "Loans", url: "#services", image: Icon4 },
  { navText: "Decision Models", url: "/", image: Icon3 },
  { navText: "Savings", url: "/", image: Icon5 },
  { navText: "Loan Requests", url: "/", image: Icon6 },
  { navText: "Whitelist", url: "/", image: Icon7 },
  { navText: "Karma", url: "/", image: Icon8 },
];

export const businessList: Nav[] = [
  { navText: "Organization", url: "", image: Icon9 },
  { navText: "Loan Products", url: "", image: Icon10 },
  { navText: "Savings Products", url: "", image: Icon11 },
  { navText: "Decision Models", url: "", image: Icon12 },
  { navText: "Savings", url: "", image: Icon5},
  { navText: "Loan Requests", url: "", image: Icon6 },
  { navText: "Fees and Charges", url: "", image: Icon13 },
  { navText: "Transactions", url: "", image: Icon14 },
  { navText: "Services", url: "", image: Icon15 },
  { navText: "Service Account", url: "", image: Icon15 },
  { navText: "Settlements", url: "", image: Icon17 },
  { navText: "Reports", url: "", image: Icon18 },
];

export const settingsList: Nav[] = [
  { navText: "Preferences", url: "", image: Icon19 },
  { navText: "Fees and Pricing", url: "", image: Icon13 },
  { navText: "Audit Logs", url: "", image: Icon20 },
  { navText: "Decision Models", url: "", image: Icon12 },
  { navText: "Systems Messages", url: "", image: Icon16 },
];