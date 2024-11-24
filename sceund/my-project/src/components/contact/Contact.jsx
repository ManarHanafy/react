import React from "react";
import { useState } from "react";

export default function Contact(){
    return <>
    <div className="  pt-28">
           <h2 className=" text-[#2c3e50] py-5 text-4xl font-bold text-center">CONATCT SECTION</h2>
           <div className=" flex justify-center items-center">
            <div className=" h-1 w-20  bg-[#2c3e50] mx-5"></div>
            <i className="fa-solid fa-star text-[#2c3e50] "></i>
            <div className=" h-1 w-20  bg-[#2c3e50] mx-5"></div>
           </div>
           <form className="container mx-auto px-3">
            <div className="flex flex-col justify-center items-center">
           <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="userName"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-600 focus:ring-0 sm:text-sm/6 md:w-[57%] w-[100%] py-[13px] shadow-md mt-28 mb-10 rounded-lg"
                  />
            <input
                    id="userage"
                    name="userage"
                    type="text"
                    placeholder="userAge"
                    autoComplete="userage"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-600 focus:ring-0 sm:text-sm/6 md:w-[57%] w-[100%] py-[13px] shadow-md mb-10 rounded-lg"
                  />
            <input
                    id="useremail"
                    name="useremail"
                    type="email"
                    placeholder="userEmail"
                    autoComplete="useremail"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-600 focus:ring-0 sm:text-sm/6 md:w-[57%] w-[100%] py-[13px] shadow-md mb-10 rounded-lg"
                  />
            <input
                    id="userpassword"
                    name="userpassword"
                    type="password"
                    placeholder="userPassword"
                    autoComplete="userpassword"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-600 focus:ring-0 sm:text-sm/6 md:w-[57%] w-[100%] py-[13px] shadow-md mb-10 rounded-lg"
                  />
            </div>
            <div className=" md:px-[21%] mb-14">
            <button className="bg-[#1abc9c] text-white p-2 rounded-md">send Message</button></div>
           </form>
        </div>
    </>
}