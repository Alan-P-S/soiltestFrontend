import React from 'react'
import About from "../components/About/About";
import { Hero } from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import News from "../components/News/News";
import Title from "../components/Title/Title";
import Programs from "../components/Programms/Programms";
import Gallery from "../components/Gallery/Gallery"

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <News></News>
    <Programs></Programs>
    <Gallery></Gallery>
    <About></About>
    </>
  )
}

export default Home