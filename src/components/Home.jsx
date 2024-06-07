import React from 'react';
import RcbMen from '../assets/images/rcb-poster.png';
import galleryData from '../Data/galleryData';
import rcbWomen from '../assets/gallery/rcb-women2.jpg';
import rcbMen from '../assets/images/rcb-poster.png';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <img src={RcbMen} className="w-full h-[25rem] object-cover transform transition-transform duration-500 hover:scale-105" alt="RCB Poster" />
      <h1 className="text-3xl text-center font-bold mt-4">Welcome to RCB's Fan Page</h1>

      <div className="my-20 mx-10">
        <h2 className="text-4xl text-rcbRed text-center font-bold mb-4">Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex justify-center">
                <img src={item.image} alt={item.title} className="mb-4 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-950 py-10 text-center text-white hover:bg-gray-900 transition-colors duration-300">
        <h2 className="text-4xl font-bold mb-4">Visit Official Website of RCB</h2>
        <a
          href="https://www.royalchallengers.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-rcbRed rounded-lg inline-block hover:bg-red-700 transition-colors duration-300"
        >
          Visit Now
        </a>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center mt-10">
  <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="md:flex">
      <div className="md:w-1/2 p-8">
        <h2 className="text-3xl font-bold text-red-600 mb-4">About RCB Men's Team</h2>
        <p className="text-gray-700 mb-4">
          The Royal Challengers Bangalore (RCB) men's team has been a part of the IPL since its inception in 2008.
          Known for their aggressive play style and star-studded lineup, RCB has been a fan favorite over the years.
          The team boasts of some of the best players in the world, making every match an exciting spectacle.
        </p>
        <p className="text-gray-700">
          With a passionate fan base and a never-say-die attitude, the RCB men's team continues to strive for their
          maiden IPL title. Join us in supporting our team and witnessing some of the best cricketing action.
        </p>
        <h3 className="text-2xl font-bold text-center text-gray-800 mt-10 mb-6">RCB Men's Team Players:</h3>
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
              <p className="text-gray-700">
                Akash Deep, Alzarri Joseph, Anuj Rawat, Cameron Green, Dinesh Karthik,
                Faf Du Plessis, Glenn Maxwell, Himanshu Sharma, Karn Sharma, Lockie Ferguson,
                Mahipal Lomror, Manoj Bhandage, Mayank Dagar, Mohammed Siraj, Rajan Kumar,
                Rajat Patidar, Reece Topley, Saurav Chuahan, Suyash S Prabhudessai, Swapnil Singh,
                Tom Curran, Virat Kohli, Vyashak Vijay Kumar, Will Jacks, and Yash Dayal.
              </p>
            </div>
      </div>
      <div className="md:w-1/2 p-8 flex items-center justify-center">
        <img
          src={rcbMen}
          alt="RCB Men's Team"
          className="w-full h-auto rounded-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-2"
        />
      </div>
    </div>
    <div className="md:flex flex-row-reverse mt-8">
      <div className="md:w-1/2 p-8">
        <h2 className="text-3xl font-bold text-red-600 mb-4">About RCB Women's Team</h2>
        <p className="text-gray-700 mb-4">
          The Royal Challengers Bangalore (RCB) women's team is set to make its mark in the upcoming IPL seasons.
          With a mix of experienced players and young talent, the team is ready to take on the competition and showcase
          their skills on the grand stage.
        </p>
        <p className="text-gray-700">
          The RCB women's team embodies the spirit of courage and resilience, aiming to inspire fans with their performances.
          Join us in cheering for our women's team as they embark on this exciting journey in the IPL.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 text-center mt-10 mb-6">RCB Women's Team Players:</h3>
        <div className="bg-white mt-6 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
              <p className="text-gray-700">
              Smriti Mandhana, Richa Ghosh, Disha Kasat, Sabbineni Meghana, Shreyanka Patil,
            Shubha Satheesh, Idrani Roy, Ekta Bisht, Georgia Wareham, Kate Cross,
            Renuka Singh, Shraddha Pokharkar, Sophie Molineux, Nadine De Klerk,
            Ellyse Perry, Asha Sobhana, Simran Bahadur, Sophie Devine.
              </p>
            </div>
      </div>
      <div className="md:w-1/2 p-8 flex items-center justify-center">
        <img
          src={rcbWomen}
          alt="RCB Women's Team"
          className="w-full h-auto rounded-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-2"
        />
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;
