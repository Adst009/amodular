import Link from "next/link";
import Navbar from "../navbar/navbar.component";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={"px-36 " + styles.container}>
      <Navbar />
      <div className={"flex flex-col content-start items-start mx-44 py-48 " + styles.container_text}>
        <h1 className={"text-9xl font-black text-white " + styles.title_main}>REMODELA</h1>
        <h2 className={"text-9xl pl-4 font-medium text-white " + styles.title_main}>tu cocina</h2>
        <p className="text-white my-14 w-8/12 pl-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          suscipit quod et? Sit harum vitae modi perferendis, minus deleniti
          adipisci autem, ipsa deserunt quisquam vel praesentium repellendus,
          veritatis cumque minima.
        </p>
        <button className="text-white px-11 py-2 ml-2">Contactanos</button>
      </div>

    </div>
  );
};

export default Header;
