import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
export default function Layout2(){
    return (
        <>
        <Outlet/>
        <Footer/>
        </>
    )
}