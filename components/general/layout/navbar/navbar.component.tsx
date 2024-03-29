import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.css";

const services = [
  {
    title: "Cocinas",
    url: "/",
  },
  {
    title: "Habitaciones",
    url: "/",
  },
  {
    title: "Salas",
    url: "/",
  },
  {
    title: "Baños",
    url: "/",
  },
  {
    title: "Terrazas",
    url: "/",
  },
  {
    title: "Balcones",
    url: "/",
  },
];

const services2 = [
  {
    title: "Oficinas",
    url: "/corp",
  },
  {
    title: "Salas de juntas",
    url: "/corp",
  },
  {
    title: "Adecuaciones",
    url: "/corp",
  },
  {
    title: "Home office",
    url: "/corp",
  },
];

const Navbar = () => {
  const [icon, setIcon] = useState("bx bx-menu-alt-right");
  const [menu, setMenu] = useState(styles.menu);

  const handleMenu = () => {
    if (icon === "bx bx-menu-alt-right") {
      setIcon("bx bx-menu-alt-left");
      setMenu(styles.menuActive);
    } else {
      setIcon("bx bx-menu-alt-right");
      setMenu(styles.menu);
    }
  };

  return (
    <div className="flex h-28 items-center place-content-around">
      <div className="inline-flex w-10/12 ">
        <Link href="/">
          <img
            src="/images/home/logo.png"
            className="h-18 mr-3 cursor-pointer"
            alt="logo_amodular"
            title="logo_amodular"
          />
        </Link>

        <div className={"w-full flex items-center pl-10 " + styles.list_menu}>
          <ul
            className={
              "w-full pt-20 md:pt-2 flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row gap-5 " +
              menu
            }
          >
            <div className="flex flex-col lg:flex-row lg:flex-grow xl:flex-row 2xl:flex-row  gap-6  xl:flex-grow">
              <div className={styles.dropdown}>
                <li>
                  <Link href={`/`} title="sdfsafsdf">
                    <a title="dsfsdfsg">
                      <button
                        id="dropdownNavbarLink"
                        data-dropdown-toggle="dropdownNavbar"
                        className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                      >
                        Hogar{" "}
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </a>
                  </Link>
                </li>

                <div className={styles.dropdown_content}>
                  {services?.map((item: any, index: number) => {
                    return (
                      <li key={index}>
                        <Link href={`${item.url}`} title={item.title}>
                          <a className={"navbar-brand"} title={item.title}>
                            {item.title}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </div>
              </div>
              <div className={styles.dropdown}>
                <li>
                  <Link href={`/`} title="sdfsafsdf">
                    <a title="dsfsdfsg">
                      <button
                        id="dropdownNavbarLink"
                        data-dropdown-toggle="dropdownNavbar"
                        className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                      >
                        Corporativo
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </a>
                  </Link>
                </li>

                <div className={styles.dropdown_content}>
                  {services2?.map((item: any, index: number) => {
                    return (
                      <li key={index}>
                        <Link key={index} href={item.url} title={item.title}>
                          <a className={"navbar-brand"} title={item.title}>
                            {item.title}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </div>
              </div>
              <li className={"pl-4 md:pl-0 " + styles.blog_item}>
                <Link
                  href="/blog"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blog
                </Link>
              </li>
            </div>

            <div className="flex-initial w-full md:w-32 ">
              <div
                className={
                  "flex flex-col items-center content-center w-auto gap-4 md:flex-row xl:flex-row xl:flex-row 2xl:flex-row " +
                  styles.socials_mob
                }
              >
                <a
                  href="https://www.instagram.com/amodular.col/"
                  target="_blank"
                >
                  <img
                    src={"./images/instagram.png"}
                    alt={"logo instagram"}
                    width={30}
                    height={30}
                    title="logo instagram"
                  />
                </a>

                <a
                  href="https://www.facebook.com/Amodular.Arquitectura.Interior/"
                  target="_blank"
                >
                  <img
                    src={"./images/facebook.png"}
                    alt={"logo facebook"}
                    width={30}
                    height={30}
                    title="logo facebook"
                  />
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div>

      <div onClick={handleMenu} className={styles.botonMovil}>
        <Link href="#">
          <i className={icon}></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
