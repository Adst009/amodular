import React, { useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

function Slider() {
    const slides =[
        {
            url:'./images/personalize/res1.png'
        },
        {
            url:'./images/personalize/res2.png'
        },
        {
            url:'./images/personalize/res3.png'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex-1;
        setCurrentIndex(newIndex);

        
    };
    const nextSlide = () =>{
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
    };

     const goToSlide = (slideIndex: any) => {
         setCurrentIndex(slideIndex)
     }
    return(
        <div className="max-w-[1600px] h-[760] w-full py-16 px-4 relative group m-auto" >
            <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                
               
                




              

            

          
            </div>
             {/* left arrow  */}
             <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={40}/>
            </div>

           {/* right arrow  */}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={40}/>
            </div>

            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={()=> goToSlide(slideIndex)} className="text-2xl cursor-pointer">
                        <RxDotFilled/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slider;