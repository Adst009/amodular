import Link from "next/link";
import Navbar from "../navbar/navbar.component";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={"px-36 " + styles.container}>
      <Navbar />
      <h1>Remodela <br/>
      tu casa</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
        suscipit quod et? Sit harum vitae modi perferendis, minus deleniti
        adipisci autem, ipsa deserunt quisquam vel praesentium repellendus,
        veritatis cumque minima.
      </p>
      <button>Contactanos</button>
    </div>
  );
};

export default Header;
