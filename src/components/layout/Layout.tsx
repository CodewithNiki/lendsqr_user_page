import { useSession } from "next-auth/react";
import WelcomePage from "../welcome/WelcomePage";
import NavBar from "../nav/NavBar";
import SideNav from "../nav/SideNav";
import IconBar from "../nav/IconBar";

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
          <div className="height">{children}</div>
      </section>
    );
  }
  return (
    // <main className="">
    //   <WelcomePage />
    // </main>
    <section>
          <NavBar />
          <SideNav />
          <IconBar/>
          <div className="height">{children}</div>
      </section>
  );
};
export default Layout;
