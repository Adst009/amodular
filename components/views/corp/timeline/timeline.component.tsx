import styles from "./timeline.module.css";

const Timeline = ({title, description, number}:any) => {
  return (
    <div className="flex w-full mb-20" >
      <div className="flex-col w-8/12 md:w-6/12 pt-56">
        <h2 className="text-9xl text-white text-right z-10 relative">{number}</h2>
        <div className="bg-[red] mr-2 md:mr-20 ml-2  lg:ml-60 mt-[60px] p-4">
          <h3 className="font-extrabold text-lg">{title}</h3>
          <p className="w-10/12">
            {description}
          </p>
        </div>
      </div>
      <div
        className={
          "w-6/12 md:w-6/12 bg-[url('/images/corp/timeline/timeline1_3.png')] bg-no-repeat " +
          styles.container_img
        }
      >
        <img src="/images/corp/timeline/timeline1_1.png" alt="timeline1" />
      </div>
    </div>
  );
};

export default Timeline;
