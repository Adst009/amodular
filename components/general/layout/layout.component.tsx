import Header from "./header/header.component";
import Footer from "../footer/footer.component";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
