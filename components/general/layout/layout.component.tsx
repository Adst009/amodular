import Footer from "../footer/footer.component";
import Navbar from "./navbar/navbar.component";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
