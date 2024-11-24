import React from "react"

export default function Footer(){
    return <>
    <div className=" bg-[#2c3e50] py-16">
        <div className=" md:flex justify-evenly items-center">
            <div className=" flex flex-col justify-center items-center text-white md:w-[28%] sm:w-[10%] pb-7">
                <h3 className=" font-medium text-2xl">LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p className=" py-5">Clark, MO 65243</p>
            </div>
            <div className=" flex flex-col justify-center items-center text-white md:w-[28%] sm:w-[10%] pb-7">
                <h3 className=" font-medium text-2xl">AROUND THE WEB</h3>
                <div className=" flex justify-center items-center pb-10 py-4">
                <i className="fa-brands fa-facebook mx-1 icon text-white border-2 border-white rounded-full p-2"></i>
                <i className="fa-brands fa-twitter mx-1 icon text-white border-2 border-white rounded-full p-2"></i>
                <i className="fa-brands fa-linkedin-in mx-1 icon text-white border-2 border-white rounded-full p-2"></i>
                <i className="fa-solid fa-globe mx-1 icon text-white border-2 border-white rounded-full p-2"></i>
                </div>
            </div>
            <div className=" flex flex-col justify-center items-center text-white md:w-[28%] sm:w-[10%] pb-7">
                <h3 className=" font-medium text-2xl">ABOUT FREELANCER</h3>
                <p className=" pb-10 text-center md:line-clamp-2 sm:line-clamp-3">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
    </div>
    <footer className=" bg-[#1a252f]">
        <div className=" text-center text-white pt-5 pb-7">Copyright © Your Website 2021</div>
    </footer>
    </>
}