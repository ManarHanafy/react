 import React from "react"
    import { Link ,NavLink } from "react-router-dom"
    
    export default function Navbar(){
        return (
            <>
            <nav className="bg-[#2c3e50] text-white py-8 fixed z-[99999] w-[100%]">
        <div className=" container flex justify-between items-center">
            <h1 className=" font-bold px-24 text-3xl"><Link to="/">START FRAMEWORK</Link></h1>
            <ul className=" flex gap-6 font-bold">
                <li>
                    <NavLink className={({isActive})=>isActive ? "bg-[#1abc9c] rounded-md p-2" :" bg-transparent" } to="/about">ABOUT</NavLink>
                </li>
                <li><NavLink className={({isActive})=>isActive ? "bg-[#1abc9c] rounded-md p-2" :" bg-transparent" }  to="/portfolio">PORTFOLIO</NavLink></li>
                <li><NavLink className={({isActive})=>isActive ? "bg-[#1abc9c] rounded-md p-2" :" bg-transparent" }  to="/contact">CONTACT</NavLink></li>
            </ul>
            </div>
        </nav>
            </>)
    }



       