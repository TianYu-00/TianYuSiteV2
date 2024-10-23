import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import RecentPortfolios from "../components/RecentPortfolios";
import ScrollAnimation from "react-animate-on-scroll"; // https://dbramwell.github.io/react-animate-on-scroll/#home
import { Glow } from "@codaworks/react-glow";
import { UserIcon } from "@heroicons/react/24/outline";
import Education from "../components/Education";
import BackToTopButton from "../components/BackToTop";
import InterestAndHobbies from "../components/InterestAndHobbiesSection";
import BouncyArrow from "../components/BouncyArrow";

export default function Home() {
  return (
    <>
      <BackToTopButton></BackToTopButton>
      {/* Name/Info */}
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <ScrollAnimation animateIn="bounceInRight" initiallyVisible={true}>
          <div className=" overflow-hidden whitespace-nowrap text-ellipsis">
            <h1 className="text-copy-primary text-center mb-10 text-5xl md:text-6xl lg:text-9xl font-bold">
              <ReactTyped strings={["Tian", "ZiLiang Wu"]} typeSpeed={100} backSpeed={50} loop />
            </h1>
          </div>
        </ScrollAnimation>

        <div className="flex flex-row gap-4">
          <a href="https://github.com/Tianyu-00" target="_blank" rel="noopener noreferrer">
            <IconBrandGithub
              stroke={1.5}
              className="size-12 md:size-16 rounded-full p-1 text-copy-primary hover:bg-cta-active hover:text-cta-text"
            />
          </a>

          <a href="https://www.linkedin.com/in/ziliangwu/" target="_blank" rel="noopener noreferrer">
            <IconBrandLinkedin
              stroke={1.5}
              className="size-12 md:size-16 rounded-full p-1 text-copy-primary hover:bg-cta-active hover:text-cta-text"
            />
          </a>

          {/* <a href="mailto:#">
            <IconMail stroke={1.5} size={62} color="black" className="bg-cta/75 rounded-full p-1 hover:bg-cta-active" />
          </a> */}
        </div>
        <BouncyArrow></BouncyArrow>
      </div>

      <Glow>
        <div className="mt-24 mb-24 glow:bg-red-500/25 h-1" />
      </Glow>

      {/* Personal Statement */}
      <Glow>
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-copy-primary font-bold text-4xl my-10 glow:text-red-500/100">ABOUT</h2>

          <div className="flex flex-col md:flex-row border-background rounded-2xl ">
            <div className="flex justify-center items-center p-4 md:w-1/2 my-32">
              <UserIcon className="size-60 text-blue-500" />
            </div>
            <div className="flex justify-center items-center p-4 md:w-1/2">
              <ScrollAnimation animateIn="fadeIn">
                <p className="text-copy-primary text-center md:text-left">
                  Programming has always been my passion, and I find great fulfillment in solving problems through code.
                  With a strong foundation in both game and software development, I excel at adapting to new
                  technologies, working collaboratively, and delivering high-quality solutions. My experience across
                  various projects has sharpened my ability to quickly learn and innovate.
                </p>
                <br></br>
                <p className="text-copy-primary text-center md:text-left">
                  I am excited to bring my skills and passion for programming to a dynamic team, where I can contribute
                  to building impactful and scalable solutions in the software development industry.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </Glow>

      <Glow>
        <div className="mt-24 mb-24 glow:bg-yellow-500/25 h-1" />
      </Glow>

      {/* Projects */}
      <div className="">
        <Glow>
          <h2 className="text-copy-primary font-bold text-4xl m-10 glow:text-yellow-500/100">RECENT PROJECTS</h2>
        </Glow>

        <RecentPortfolios></RecentPortfolios>
        <div className="m-20"></div>
        <a
          href="/portfolio"
          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-cta rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cta group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-cta transition-all duration-300 transform group-hover:translate-x-full ease">
            Browse More
          </span>
          <span className="relative invisible">Button Text</span>
        </a>
      </div>

      <Glow>
        <div className="mt-24 mb-24 glow:bg-green-500/25 h-1" />
      </Glow>

      {/* Education */}
      <Glow>
        <div className="max-w-screen-xl m-auto">
          <h2 className="text-copy-primary font-bold text-4xl m-10 glow:text-green-500/100">EDUCATION</h2>
          <ScrollAnimation animateIn="fadeIn">
            <Education></Education>
          </ScrollAnimation>
        </div>
      </Glow>

      <Glow>
        <div className="mt-24 mb-24 glow:bg-blue-500/25 h-1" />
      </Glow>

      {/* Interest and Hobbies */}
      <Glow>
        <div className="m-auto">
          <h2 className="text-copy-primary font-bold text-4xl m-10 glow:text-blue-500/100">HOBBIES</h2>
          <InterestAndHobbies />
        </div>
      </Glow>
    </>
  );
}
