import styles from "./header.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const route = useRouter();
  return (
    <div className={`w-full flex-col mt-[-110px] ${route.asPath === "/corp" ? "bg-[url('/images/corp/background.png')]" :  "bg-[url('/images/home/background.png')]"} ` + styles.container}>
      <div className={"flex flex-col content-start items-start pb-20 pt-[120px] md:pt-[170px] " + styles.container_text}>
        <h1 className={"text-5xl ml-2 md:ml-10 lg:ml-24 xl:ml-44 md:text-8xl lg:text-9xl font-black text-white " + styles.title_main}>{route.asPath === "/corp" ? "TU OFICINA" : "REMODELA"}</h1>
        <h3 className={"text-5xl ml-2 md:ml-10 lg:ml-24 xl:ml-44 md:text-8xl lg:text-9xl pl-2 font-medium text-white " + styles.title_main}>{route.asPath === "/corp" ? "corporativa" : "tu cocina"}</h3>
        <p className="text-white ml-2 md:ml-10 lg:ml-24 xl:ml-48 w-8/12 md:w-4/12 my-6 w-10/12 pl-2">

          {route.asPath === "/corp" ? "Diseñamos tus espacios según el entorno que lo necesites, cuidando cada detalle para asegurarnos que cumpla con tus expectativas." : "¿Te imaginas preparando tus platillos favoritos en una cocina diseñada a tu medida? Una en la que cada detalle será personalizado y perfecto para ti."}
        </p>
        <button className="text-white ml-4 md:ml-12 lg:ml-28 xl:ml-48 px-11 py-2">Contáctanos</button>
      </div>

    </div>
  );
};

export default Header;
