import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import RecentPortfolios from "../components/RecentPortfolios";
import ScrollAnimation from "react-animate-on-scroll"; // https://dbramwell.github.io/react-animate-on-scroll/#home
import { Glow } from "@codaworks/react-glow";
import { UserIcon } from "@heroicons/react/24/outline";
import Education from "../components/Education";

export default function Home() {
  return (
    <>
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
          <IconBrandGithub
            stroke={1.5}
            size={62}
            color="black"
            className="bg-cta/75 rounded-full p-1 hover:bg-cta-active"
          />
          <IconBrandLinkedin stroke={1.5} size={62} className="bg-cta/75 rounded-full p-1 hover:bg-cta-active" />
          <IconMail stroke={1.5} size={62} color="black" className="bg-cta/75 rounded-full p-1 hover:bg-cta-active" />
        </div>
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
                  From a young age, game development and software development have always been my dream career paths and
                  I knew it was something that I wanted to do in the future. Through my academic background in game
                  development, I have developed strong skills in problem-solving, teamwork, and quick adaptation to new
                  technologies, tools, and various programming languages. I'm looking forward to transitioning to
                  software development as a junior software developer, applying all my previous knowledge in programming
                  to this industry to create impactful solutions with innovation.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </Glow>

      <Glow>
        <div className="mt-24 mb-24 glow:bg-orange-500/25 h-1" />
      </Glow>

      {/* Skills */}
      <Glow>
        <div className="max-w-screen-xl m-auto">
          <h2 className="text-copy-primary font-bold text-4xl m-10 glow:text-orange-500/100">SKILLS</h2>
          <ul>
            <ScrollAnimation animateIn="fadeIn">
              <li className="text-copy-primary">
                <strong className="glow:text-orange-500/100">Programming Languages:</strong> C#, JavaScript, Python.
              </li>
              <li className="text-copy-primary">
                <strong className="glow:text-orange-500/100">Testing:</strong> TDD (Test Driven Development), Jest,
                Supertest, Browser Developer Tools, Lighthouse (Accessibility Testing Tool).
              </li>
              <li className="text-copy-primary">
                <strong className="glow:text-orange-500/100">Back End:</strong> SQL, PostgreSQL, MVC
                (Model-View-Controller), Express, MongoDB, Firebase.
              </li>
              <li className="text-copy-primary">
                <strong className="glow:text-orange-500/100">Front End:</strong> HTML, CSS, Vite.js, React, MUI
                (Material-UI), Tailwind.
              </li>
              <li className="text-copy-primary">
                <strong className="glow:text-orange-500/100">Version Control:</strong> GitHub, Git.
              </li>
            </ScrollAnimation>
          </ul>
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
        <Link to="/portfolios" className="text-copy-primary border p-2 rounded-2xl hover:bg-cta/80">
          Browse More
        </Link>
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
        <div className="max-w-screen-xl m-auto">
          <h2 className="text-copy-primary font-bold text-4xl m-10 glow:text-blue-500/100">HOBBIES</h2>
          <ul>
            <ScrollAnimation animateIn="fadeIn">
              <li className="text-copy-primary/75">
                <strong className="text-copy-primary glow:text-blue-500/100">Programming</strong>: I love turning ideas
                into reality by developing applications, websites, and games in my spare time. It’s both a creative
                outlet and a constant learning journey.
              </li>
              <li className="text-copy-primary/75">
                <strong className="text-copy-primary glow:text-blue-500/100">Gaming</strong>: I’m an avid gamer,
                particularly fond of puzzle games and roguelikes. They challenge my problem-solving skills and provide
                endless fun.
              </li>
              <li className="text-copy-primary/75">
                <strong className="text-copy-primary glow:text-blue-500/100">Sports</strong>: Whether it’s badminton,
                swimming, basketball, rock climbing, or ping pong, I enjoy staying active and spending quality time with
                friends and family through sports.
              </li>
              <li className="text-copy-primary/75">
                <strong className="text-copy-primary glow:text-blue-500/100">Travelling</strong>: Exploring new
                destinations and immersing myself in different cultures is a passion of mine. I especially enjoy tasting
                local cuisines and learning about their culinary traditions.
              </li>
            </ScrollAnimation>
          </ul>
        </div>
      </Glow>
    </>
  );
}
