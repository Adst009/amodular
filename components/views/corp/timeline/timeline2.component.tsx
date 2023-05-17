import styles from "./timeline2.module.css";

const Timeline2 = ({title, description, number}:any) => {
  return (
    <div className="flex w-full my-20">
      <div
        className={
          "w-5/12 bg-[url('/images/corp/timeline/timeline1_3.png')] scale-x-[-1] bg-no-repeat " +
          styles.container_img
        }
      >
        <img src="/images/corp/timeline/timeline2_1.png" alt="timeline2" title="timeline2"/>
      </div>
      <div className="flex-col w-6/12 pt-[210px]">
        <h2 className="text-9xl text-white text-left z-10 relative">{number}</h2>
        <div className="relative z-50 bg-[red] ml-2 md:ml-20 mr-[-20px] lg:mr-60 mt-[60px] p-4">
          <h3 className="font-extrabold text-lg">{title}</h3>
          <p className="w-12/12">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline2;
