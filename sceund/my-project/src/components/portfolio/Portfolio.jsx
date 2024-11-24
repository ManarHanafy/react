import React from "react"
import img1 from "../../pictuers/poert1.png"
import img2 from "../../pictuers/port2.png"
import img3 from "../../pictuers/port3.png"

export default function Portfolio(){
    return <>
    <div className="  pt-28">
           <h2 className=" text-[#2c3e50] py-5 text-4xl font-bold text-center">PORTFOLIO COMPONENT</h2>
           <div className=" flex justify-center items-center">
            <div className=" h-1 w-20  bg-[#2c3e50] mx-5"></div>
            <i className="fa-solid fa-star text-[#2c3e50] "></i>
            <div className=" h-1 w-20  bg-[#2c3e50] mx-5"></div>
           </div>
           <div className=" text-center my-5">
            <div className=" flex flex-wrap gap-10 w-[100%] lg:ps-10 md:ps-28 sm:ps-10">
                <div className=" xl:w-[30%] lg:w-[29%] md:w-[33%] sm:w-[90%] relative">
                    <img src={img1} className=" rounded-lg"/>
                    <div className="layer absolute start-0 w-[100%] top-0 h-[100%] flex justify-center items-center bg-[#1abc9ce6] cursor-pointer rounded-lg opacity-0 hover:opacity-100">
                    <i className="text-white fa-solid fa-plus fa-6x"></i></div>
                </div>
                
                <div className=" xl:w-[30%] lg:w-[29%] md:w-[33%] sm:w-[90%] relative">
                    <img src={img2} className=" rounded-lg"/>
                    <div className="layer absolute start-0 w-[100%] top-0 h-[100%] flex justify-center items-center bg-[#1abc9ce6] cursor-pointer rounded-lg opacity-0 hover:opacity-100 ">
                    <i className="text-white fa-solid fa-plus fa-6x"></i></div>
                </div>
                <div className="xl:w-[30%] lg:w-[29%] md:w-[33%] sm:w-[90%] relative">
                    <img src={img3} className=" rounded-lg"/>
                    <div className="layer absolute start-0 w-[100%] top-0 h-[100%] flex justify-center items-center bg-[#1abc9ce6] cursor-pointer rounded-lg opacity-0 hover:opacity-100 ">
                    <i className="text-white fa-solid fa-plus fa-6x"></i></div>
                </div>
                <div className=" xl:w-[30%] lg:w-[29%] md:w-[33%] sm:w-[90%] relative">
                    <img src={img1} className=" rounded-lg"/>
                    <div className="layer absolute start-0 w-[100%] top-0 h-[100%] flex justify-center items-center bg-[#1abc9ce6] cursor-pointer rounded-lg opacity-0 hover:opacity-100 ">
                    <i className="text-white fa-solid fa-plus fa-6x"></i></div>
                </div>
                <div className=" xl:w-[30%] lg:w-[29%] md:w-[33%] sm:w-[90%] relative">
                    <img src={img2} className=" rounded-lg"/>
                    <div className="layer absolute start-0 w-[100%] top-0 h-[100%] flex justify-center items-center bg-[#1abc9ce6] cursor-pointer rounded-lg opacity-0 hover:opacity-100 ">
                    <i className="text-white fa-solid fa-plus fa-6x"></i></div>
                </div>
                <div className=" xl:w-[30%] lg:w-[29%] md:w-[33%] sm:w-[90%] relative">
                    <img src={img3} className=" rounded-lg"/>
                    <div className="layer absolute start-0 w-[100%] top-0 h-[100%] flex justify-center items-center bg-[#1abc9ce6] cursor-pointer rounded-lg opacity-0 hover:opacity-100 ">
                    <i className="text-white fa-solid fa-plus fa-6x"></i></div>
                </div>
            </div>
           </div>
        </div>
    </>
}