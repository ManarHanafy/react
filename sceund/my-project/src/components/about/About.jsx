import React from "react"

export default function About(){
    return <>
    <div className=" bg-[#1abc9c] h-svh pt-64">
        <div className="  flex justify-center items-center flex-col">
           <h2 className=" text-white py-8 text-4xl font-bold">ABOUT COMPONENT</h2>
           <div className=" flex justify-center items-center">
            <div className=" h-1 w-28 mb-3 bg-white mx-5"></div>
            <i class="fa-solid fa-star text-white"></i>
            <div className=" h-1 w-28 mb-3 bg-white mx-5"></div>
           </div>
           <div className=" py-3 text-white md:flex justify-center items-center w-[75%] gap-4">
            <p className="pb-4">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className="pb-4">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
           </div>
        </div>
    </div>
    </>
}