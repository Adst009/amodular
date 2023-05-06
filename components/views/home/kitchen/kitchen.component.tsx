import styles from "./kitchen.module.css";

const Kitchen = () => {
  return (
    <div
      className={
        "flex flex-col content-center items-center py-48 w-full " +
        styles.container_text
      }
    >
      <h2 className={"text-8xl font-black text-white " + styles.title_main}>
        PERSONALIZAMOS
      </h2>
      <h3 className={"text-8xl pl-4 font-medium text-white " + styles.title_main}>
        tu cocina
      </h3>
      <p className="text-white my-14 w-8/12 pl-2">
        slider
      </p>
      <button className="text-white px-11 py-2 ml-2">Contactanos</button>
    </div>
  )
}

export default Kitchen