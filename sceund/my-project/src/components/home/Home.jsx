import React from "react"
import img from "../../pictuers/avataaars.svg"

export default function Home(){
    return <>
    <div className=" bg-[#1abc9c] h-svh pt-44">
        <div className=" text-center flex justify-center items-center flex-col">
           <img src={img} className=" w-64"/>
           <h2 className=" text-white py-8 text-4xl font-bold">START FRAMEWORK</h2>
           <div className=" flex justify-center items-center">
            <div className=" h-1 w-28 mb-3 bg-white mx-5"></div>
            <i className="fa-solid fa-star text-white pb-3"></i>
            <div className=" h-1 w-28 mb-3 bg-white mx-5"></div>
           </div>
           <div className=" py-3 text-white">Graphic Artist - Web Designer - Illustrator</div>
        </div>
    </div>
    </>
}