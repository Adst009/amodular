import styles from "./results.module.css";

const Results = () => {
    return (
    
        <div className="flex-col sm:flex-col md:flex-row lg:flex-row xl:flex items-center content-center ">
        <div className={"pl-4 md:pl-32 md:w-6/12 border-2 border-red-700 p-8"}>
          <h2 className={"text-7xl font-black text-white " + styles.title_main}>
            MIRA LOS
          </h2>
          <h3
            className={
              "text-7xl font-medium text-white " + styles.title_main
            }
          >
            resultados
          </h3>
          
        </div>
        <div className={styles.container}>
            <h1>ggg</h1>
            <h1>ggg</h1>
            <h1>ggg</h1>
            <h1>ggg</h1>
            <h1>ggg</h1>
            <h1>ggg</h1>
            <h1>ggg</h1>
            <h1>ggg</h1>
            <h1>ggg</h1>
            <h1>ggg</h1>
        </div>
      </div>
       
  );
};

    
    export default Results;
