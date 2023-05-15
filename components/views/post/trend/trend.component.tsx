import React from "react";

function Trend() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl text-center px-5 md:text-7xl">TENDENCIAS 2023 EN </h2>
        <h3 className="text-4xl text-center px-5 md:text-8xl pb-4">diseño de interiores</h3>
        <img className="" src="/images/blog/trend5.png" alt="" />
        <p className="mt-4 md:mt-14  mb-10 text-center md:py-4 w-10/12 md:w-7/12 font-[Eina02] font-bold text-[15px]">
          Las creaciones de los espacios van de la mano de las tendencias que se van dando.
          Conoce algunas de ellas y sabrás con cuál te identificas más.
        </p>
        <div className="w-full flex items-center justify-center">
          <img
            className={"w-9/12 md:w-8/12 h-[15rem] md:h-[25rem]"}
            src="/images/blog/trend4.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Trend;
