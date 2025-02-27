// app/testAnnatya/Anantya_test-main/Anantya_test-main/src/components/team/Team.jsx
// import React from "react";
// import SpiderManAnimation from "../gallery/back";
// import CosmicAnimation from "../gallery/back";
import bg from "./../../../public/bg_3.jpg";
// eslint-disable-next-line react/prop-types
const TeamCard = ({ name, role, imageUrl, linkedinUrl }) => {
  return (
    <>
    
    <div className="relative bg-gradient-to-t from-[#990000] via-[#c70c0c] to-[#FF0000] w-full p-2 rounded-3xl group transition-all duration-500 ease-in-out transform hover:scale-105">
      <div className="bg-black rounded-3xl py-4 px-2 flex flex-col items-center text-center justify-center min-h-[40vh] transition-all duration-500 ease-in-out group-hover:bg-transparent">
        {/* Default State */}
        <div className="flex flex-col justify-start items-center group-hover:hidden transition-opacity duration-500 ease-in-out opacity-100">
          <img
            src={imageUrl}
            width={200}
            height={200}
            className="w-[75%] sm:w-[65%] md:w-[80%] lg:w-[90%] rounded-lg object-cover border-2 border-black"
          />
          <span className="my-4 text-lg sm:text-xl font-medium text-white transition-colors duration-500 ease-in-out group-hover:text-black">
            {role}
          </span>
        </div>

        {/* Hover State */}
        <div className="hidden group-hover:flex flex-col items-center text-center text-black transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
          <span className="text-lg sm:text-xl font-semibold transition-colors duration-500 ease-in-out">{name}</span>
          <a href={linkedinUrl} className="mt-2" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-black text-3xl transition-transform duration-300 ease-in-out hover:scale-110"></i>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default function TeamGrid() {
  const teamMembers = [
  
   
    {
      name: "WebMaster, ACM PCCOE ",
      role: "Vineet Salve",
      imageUrl: "/team/vineet.jpg",
      linkedinUrl: "https://www.linkedin.com/in/vineet-salve-1b1b3b1b8",
    },
    {
      name: "WebMaster ,  ACM PCCOE",
      role: "Amey Jadhav",
      imageUrl: "/team/amey.jpg",
      linkedinUrl: "https://www.linkedin.com/in/amey-jadhav-208984267/",
    }, 
    {
      name: "WebHead ,OWASP PCCOE",
      role: "Sumit Pisal",
      imageUrl: "/team/sumit.jpg",
      linkedinUrl: "https://www.linkedin.com/in/sumit-pisal/",
    },
    {
      name: "WebMaster ,ACM-W PCCOE ",
      role: "Mansi Sabale",
      imageUrl: "",
      linkedinUrl: "https://www.linkedin.com/in/manasi-sabale-36a638233/",
    },
    {
      name: "WebMaster ,ISTE PCCOE",
      role: "Sumedh Pimplikar",
      imageUrl: "/team/sumedh.jpg",
      linkedinUrl: "https://www.linkedin.com/in/sumedh-pimplikar",
    },
    {
      name: "Jr WebMaster ,OWASP PCCOE",
      role: "Pushkar Kirange",
      imageUrl: "/team/pushkar.jpg",
      linkedinUrl: "www.linkedin.com/in/sumedh-pimplikar",
    },
    {
      name: "Jr WebMaster ,ACM PCCOE",
      role: "Parth Joshi",
      imageUrl: "/team/parth.jpg",
      linkedinUrl: "https://www.linkedin.com/in/parth-joshi-9ab997306/",
    },
    
  ];

  return (
    <>
    {/* <SpiderManAnimation /> */}
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 px-4 " style={{
          backgroundImage: `url(${bg})`,
        }}>
      <h1 className="text-3xl font-bold text-white mb-8 flex justify-center mt-20 ">MEET OUR WEB-TEAM</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mb-15">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
 </div>
 </>
  );
}