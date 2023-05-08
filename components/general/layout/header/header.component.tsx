import Link from "next/link";
import Navbar from "../navbar/navbar.component";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={"w-full flex-col " + styles.container}>
      <Navbar />
      <div className={"flex flex-col content-start items-start " + styles.container_text}>
        <h1 className={"text-5xl ml-8 xl:ml-40 font-black text-white " + styles.title_main}>REMODELA</h1>
        <h2 className={"text-5xl ml-8 xl:ml-40 pl-2 font-medium text-white " + styles.title_main}>tu cocina</h2>
        <p className="ml-8 text-white my-6 w-10/12 pl-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          suscipit quod et? Sit harum vitae modi perferendis, minus deleniti
          adipisci autem, ipsa deserunt quisquam vel praesentium repellendus,
          veritatis cumque minima.
        </p>
        <button className="ml-12 text-white px-11 py-2">Contactanos</button>
      </div>

    </div>
  );
};

export default Header;