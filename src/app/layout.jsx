import { Link, Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

export default function Layout() {
  return (
    <div className='layout'>
      <Header />
      <main className='main'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
