import { useSession } from "next-auth/react";
import WelcomePage from "../welcome/WelcomePage";
import NavBar from "../nav/NavBar";
import SideNav from "../nav/SideNav";
import styles from "../../styles/Layout.module.scss";
import UserDashboard from "../../pages/dashboard/UserDashboard";

interface IChildren {
  children: React.ReactNode;
}


const Layout = ({ children }: IChildren) => {
  
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <section>
          <NavBar />
          <SideNav />
          <UserDashboard users={[]} />
          <div className={styles.container}>{children}</div>
      </section>
    );
  }
  return (
    <main>
      <WelcomePage />
    </main>
  );
};
export default Layout;
