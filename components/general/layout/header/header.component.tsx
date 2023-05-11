import Navbar from "../navbar/navbar.component";
import styles from "./header.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const route = useRouter();
  return (
    <div className={`w-full flex-col ${route.asPath === "/corp" ? "bg-[url('/images/corp/background.png')]" :  "bg-[url('/images/home/background.png')]"} ` + styles.container}>
      <Navbar />
      <div className={"flex flex-col content-start items-start pb-10 pt-[70px] " + styles.container_text}>
        <h1 className={"text-5xl ml-2 md:ml-44 md:text-9xl font-black text-white " + styles.title_main}>{route.asPath === "/corp" ? "TU OFICINA" : "REMODELA"}</h1>
        <h2 className={"text-5xl ml-2 md:ml-44 md:text-9xl pl-2 font-medium text-white " + styles.title_main}>{route.asPath === "/corp" ? "corporativa" : "tu cocina"}</h2>
        <p className="text-white ml-2 md:ml-48 md:w-4/12 my-6 w-10/12 pl-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          suscipit quod et? Sit harum vitae modi perferendis, minus deleniti
          adipisci autem, ipsa deserunt quisquam vel praesentium repellendus,
          veritatis cumque minima.
        </p>
        <button className="ml-4 text-white md:ml-48 px-11 py-2">Contáctanos</button>
      </div>

    </div>
  );
};

export default Header;
