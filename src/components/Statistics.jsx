import React from 'react';
import { motion } from 'framer-motion';
import statsData from '../Data/statsData';
import ViratKohli from '../assets/menPlayers/ViratKohli.png';
import MohammedSiraj from '../assets/menPlayers/MohammedSiraj.png';
import FafDuPlessis from '../assets/menPlayers/FafDuPlessis.png';
import AnujRawat from '../assets/menPlayers/AnujRawat.png';
import GlennMaxwell from '../assets/menPlayers/GlennMaxwell.png';
import DineshKarthik from '../assets/menPlayers/DineshKarthik.png';
import rcbPoster from '../assets/images/rcb-poster.png';

const Statistics = () => {
  const imgStyle = "w-full h-64 object-cover";
  const cardStyle = "relative w-64 transform hover:scale-105 transition duration-300 ease-in-out";
  const overlayStyle = "absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-4 rounded opacity-0 hover:opacity-100 transition duration-300 ease-in-out";
  const textContainerStyle = "absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-4 rounded";
  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold mb-4 text-center">RCB Stats 2024</h2>

      <div className="relative mb-8">
        <img src={rcbPoster} className="w-full h-[40rem] object-cover" alt="RCB Poster" />
        <div className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-75 p-4 rounded">
          <p>Matches Played: {statsData.matchesPlayed}</p>
          <p>Matches Won: {statsData.matchesWon}</p>
          <p>Matches Lost: {statsData.matchesLost}</p>
          <p>Highest Score: {statsData.highestScore}</p>
          <p>Lowest Score: {statsData.lowestScore}</p>
        </div>
      </div>

      <div className="relative mb-8">
        <h1 className='text-center font-bold text-3xl mb-8'>Top Performers</h1>
        <div className="flex flex-wrap justify-center">
          <div className={cardStyle}>
            <img src={ViratKohli} alt="Virat Kohli" className={imgStyle} />
            <div className={overlayStyle}>
              <p>Top Run Scorer: {statsData.topRunScorer.name} - {statsData.topRunScorer.runs} runs (Avg: {statsData.topRunScorer.average}, SR: {statsData.topRunScorer.strikeRate})</p>
            </div>
          </div>
          <div className={cardStyle}>
            <img src={MohammedSiraj} alt="Mohammed Siraj" className={imgStyle} />
            <div className={overlayStyle}>
              <p>Top Wicket Taker: {statsData.topWicketTaker.name} - {statsData.topWicketTaker.wickets} wickets (Avg: {statsData.topWicketTaker.average}, ER: {statsData.topWicketTaker.economyRate})</p>
              <p>Best Bowling Figures: {statsData.bestBowlingFigures.name} - {statsData.bestBowlingFigures.figures}</p>
            </div>
          </div>
          <div className={cardStyle}>
            <img src={FafDuPlessis} alt="Faf du Plessis" className={imgStyle} />
            <div className={overlayStyle}>
              <p>Highest Individual Score: {statsData.highestIndividualScore.name} - {statsData.highestIndividualScore.score} ({statsData.highestIndividualScore.balls} balls)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-[100px] mb-8">
        <h1 className='text-center font-bold text-3xl mb-10'>Partnerships</h1>
        <div className="flex justify-center">
          <motion.div
            className="relative w-32"
            whileHover={{ scale: 1.1 }}
          >
            <img src={ViratKohli} alt="Partnerships" className={imgStyle} />
          </motion.div>
          <motion.div
            className="relative w-32"
            whileHover={{ scale: 1.1 }}
          >
            <img src={FafDuPlessis} alt="Partnerships" className={imgStyle} />
          </motion.div>
          <motion.div
            className="relative w-32"
            whileHover={{ scale: 1.1 }}
          >
            <img src={AnujRawat} alt="Partnerships" className={imgStyle} />
          </motion.div>
          <motion.div
            className="relative w-32"
            whileHover={{ scale: 1.1 }}
          >
            <img src={GlennMaxwell} alt="Partnerships" className={imgStyle} />
          </motion.div>
        </div>
        <motion.div
          className={textContainerStyle}
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          {statsData.partnerships.map((partnership, index) => (
            <p key={index}>
              {partnership.players.join(' & ')} - {partnership.runs} runs (Against: {partnership.against})
            </p>
          ))}
        </motion.div>
      </div>

      <div className="relative mb-[60px]">
        <h1 className='text-center font-bold text-3xl mb-10'>Miscellaneous</h1>
        <div className="flex justify-center">
          <motion.div
            className="relative w-32"
            whileHover={{ scale: 1.1 }}
          >
            <img src={ViratKohli} alt="Miscellaneous" className={imgStyle} />
          </motion.div>
          <motion.div
            className="relative w-32"
            whileHover={{ scale: 1.1 }}
          >
            <img src={FafDuPlessis} alt="Miscellaneous" className={imgStyle} />
          </motion.div>
          <motion.div
            className="relative w-32"
            whileHover={{ scale: 1.1 }}
          >
            <img src={DineshKarthik} alt="Miscellaneous" className={imgStyle} />
          </motion.div>
          <motion.div
            className="relative w-32"
            whileHover={{ scale: 1.1 }}
          >
            <img src={GlennMaxwell} alt="Miscellaneous" className={imgStyle} />
          </motion.div>
        </div>
        <motion.div
          className={textContainerStyle + " top-[230px]"}
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          <p>Most Sixes: {statsData.mostSixes.name} - {statsData.mostSixes.sixes}</p>
          <p>Most Fours: {statsData.mostFours.name} - {statsData.mostFours.fours}</p>
          <p>Fastest Fifty: {statsData.fastestFifty.name} - {statsData.fastestFifty.balls} balls</p>
          <p>Most Catches: {statsData.mostCatches.name} - {statsData.mostCatches.catches}</p>
          <p>Overall Strike Rate: {statsData.overallStrikeRate}</p>
          <p>Overall Economy Rate: {statsData.overallEconomyRate}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Statistics;
