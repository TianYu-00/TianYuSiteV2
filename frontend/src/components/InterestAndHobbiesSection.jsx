import React from "react";
import programmingImage from "../assets/undraw_programming_re_kg9v.svg";
import gamingImage from "../assets/undraw_game_world_re_e44j.svg";
import sportsImage from "../assets/undraw_home_run_acyh.svg";
import travellingImage from "../assets/undraw_traveling_yhxq.svg";
import ScrollAnimation from "react-animate-on-scroll";

export default function InterestAndHobbies() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden text-copy-primary">
      {/* Programming Section */}
      <ScrollAnimation animateIn="fadeIn">
        <div className="flex flex-col items-center justify-center p-4 min-h-screen">
          <div className="text-copy-primary/75 text-center max-w-2xl">
            <strong className="text-copy-primary glow:text-blue-500/100">Programming</strong>: I love turning ideas into
            reality by developing applications, websites, and games in my spare time. It’s both a creative outlet and a
            constant learning journey.
            <img src={programmingImage} className="mt-6 max-w-full h-auto rounded-lg shadow-lg" alt="Programming" />
          </div>
        </div>
      </ScrollAnimation>

      {/* Gaming Section */}
      <ScrollAnimation animateIn="fadeIn">
        <div className="flex flex-col items-center justify-center  p-4 min-h-screen">
          <div className="text-copy-primary/75 text-center max-w-2xl">
            <strong className="text-copy-primary glow:text-blue-500/100">Gaming</strong>: I’m an avid gamer,
            particularly fond of puzzle games and roguelikes. They challenge my problem-solving skills and provide
            endless fun.
            <img src={gamingImage} className="mt-6 max-w-full h-auto rounded-lg shadow-lg" alt="Gaming" />
          </div>
        </div>
      </ScrollAnimation>

      {/* Sports Section */}
      <ScrollAnimation animateIn="fadeIn">
        <div className="flex flex-col items-center justify-center p-4 min-h-screen">
          <div className="text-copy-primary/75 text-center max-w-2xl">
            <strong className="text-copy-primary glow:text-blue-500/100">Sports</strong>: Whether it’s badminton,
            swimming, basketball, rock climbing, or ping pong, I enjoy staying active and spending quality time with
            friends and family through sports.
            <img src={sportsImage} className="mt-6 max-w-full h-auto rounded-lg shadow-lg" alt="Sports" />
          </div>
        </div>
      </ScrollAnimation>

      {/* Travelling Section */}
      <ScrollAnimation animateIn="fadeIn">
        <div className="flex flex-col items-center justify-center p-4 min-h-screen">
          <div className="text-copy-primary/75 text-center max-w-2xl">
            <strong className="text-copy-primary glow:text-blue-500/100">Travelling</strong>: Exploring new destinations
            and immersing myself in different cultures is a passion of mine. I especially enjoy tasting local cuisines
            and learning about their culinary traditions.
            <img src={travellingImage} className="mt-6 max-w-full h-auto rounded-lg shadow-lg" alt="Travelling" />
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
