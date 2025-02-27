import { useEffect, useState } from "react";
import "./EventPage.css";
import bg from "./../../../public/bg_3.jpg";


const CollegeEvents = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [visibleEvents, setVisibleEvents] = useState(9);
  const [loadMoreClicks, setLoadMoreClicks] = useState(0);
  const [firstVideoEnded, setFirstVideoEnded] = useState(false);
  const [activeTab, setActiveTab] = useState("tech");
    
  const techEvents = [
    {
        id: 1,
        title: "CODIGO - Programming Event",
        description:
            "Step into the Multiverse of Code! Join us in CODIGO, where different dimensions of programming collide in a thrilling battle of logic and speed.",
        date: "",
        imgUrl: "/poster/Codigo.png",
        videoUrl1: "/poster/video1.mp4",
        videoUrl2: "/poster/video2.mp4",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfFBtmyhz8NyTnzTXWudSyttHxFoy2PNBCE0yt2u3vyZND56A/viewform?usp=header",
        rulebookLink: "https://drive.google.com/file/d/1-lnMXBjDCLr3dUPiPKc2nY5MFEnTXHrU/view?usp=sharing",
    },
    {
        id: 2,
        title: "She Solves - Coding Event",
        description:
            "Across the Multiverse, the greatest problem-solvers rise! She Solves is the ultimate coding showdown where brilliance breaks all boundaries.",
        date: "",
        imgUrl: "/poster/SheSolves.png",
        videoUrl1: "/poster/video1.mp4",
        videoUrl2: "/poster/video2.mp4",
        registrationLink: "https://forms.gle/PYCz3XLfqmbm8YgLA",
        rulebookLink: "https://drive.google.com/file/d/1zF4C4HjOS35V7GD9aXgAhrO610xe9MM-/view?usp=sharing",
    },
    {
        id: 3,
        title: "Blind Coding",
        description:
            "Code through the chaos of parallel realities where logic warps, syntax shifts, and only your intuition can restore order!",
        date: "",
        imgUrl: "/poster/BlindCoding.png",
        videoUrl1: "/poster/video1.mp4",
        videoUrl2: "/poster/video2.mp4",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScr0g_0jamSuNh15AdBcO92-9Sv0VZKeK1u9_us-X7QMywzUQ/viewform?usp=dialog",
        rulebookLink: "https://drive.google.com/file/d/14e0cHjgroBCoyr_z9aVRXkh4QCIAg9rY/view?usp=sharing",
    },
    {
        id: 4,
        title: "Byte Me CTF",
        description:
            "Traverse the digital Multiverse! Byte Me is your gateway to exploring infinite possibilities in technology through engaging discussions and insights.",
        date: "",
        imgUrl: "/poster/Byteme.png",
        videoUrl1: "/poster/video1.mp4",
        videoUrl2: "/poster/video2.mp4",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScpYrea_RNf5lalNmDDdIt_pDq1L-OgHoRMQWsoO1A38q7RBA/viewform?usp=header",
        rulebookLink: "https://drive.google.com/file/d/1FhqTUgKxWoPB8-UDgsGLo5j1sgdcHRnl/view?usp=sharing",
    },
    {
        id: 5,
        title: "CAT",
        description:
            "Navigate the infinite possibilities of logic, reasoning, and problem-solving across multiversal dimensions to prove your managerial prowess!",
        date: "",
        imgUrl: "/poster/CAT.png",
        videoUrl1: "/poster/video1.mp4",
        videoUrl2: "/poster/video2.mp4",
        registrationLink: "https://forms.gle/tmoBmwvQKbCVifTo9",
        rulebookLink: "https://drive.google.com/file/d/1UMVEUOQfyXJ-I-6w_pBq01T0Wy8jOna2/view?usp=sharing",
    },
    {
        id: 6,
        title: "Code Relay",
        description:
            "Jump through parallel realities of code! Code Relay takes you on a fast-paced adventure where teamwork and strategy determine your success.",
        date: "",
        imgUrl: "/poster/CodeRelay.png",
        videoUrl1: "/poster/video1.mp4",
        videoUrl2: "/poster/video2.mp4",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeO9thlXfTxum5lmT6A9m7bjfz8ou1fnEOtzzvDxcp-mTr21Q/viewform",
        rulebookLink: "https://drive.google.com/file/d/147ZgcYuLmndBOZT6clVaIJSpVze54CE0/view?usp=sharing",
    },
    {

      id: 7,
      title: "Coding Olympics",
      description:
        "Join us for Coding Olympics, an exciting seminar at PCET's Pimpri Chinchwad College of Engineering.",
      date: "15th March",
      imgUrl: "/poster/CodingOlympics.png",
      videoUrl1: "/poster/video1.mp4",
      videoUrl2: "/poster/video2.mp4",
      registrationLink: "https://forms.gle/EBPyfywySgrdXE5Q6",
      rulebookLink: "https://drive.google.com/file/d/1SAXF7qdFVzKaoEiRMjN_kInl8ZTpo_wS/view?usp=drive_link",
    },
    {
        id: 8,
        title: "InnovateX",
        description:
            "Showcase your groundbreaking ideas at InnovateX! A platform for innovators to present solutions shaping the future of technology.",
        date: "",
        imgUrl: "/poster/InnovateX.png",
        videoUrl1: "/poster/video1.mp4",
        videoUrl2: "/poster/video2.mp4",
        registrationLink: "Registeration Not Required",
        rulebookLink: "https://drive.google.com/file/d/1tDSKRNfQv-C_cKnqbx7k74CKzSyLe9pT/view?usp=sharing",
    },
    {
        id: 9,
        title: "MasterChef UI",
        description:
            "Master the art of UI design! MasterChef UI challenges participants to craft visually stunning and user-friendly interfaces in a limited time.",
        date: "",
        imgUrl: "/poster/MasterChefUI.jpg",
        videoUrl1: "/poster/video1.mp4",
        videoUrl2: "/poster/video2.mp4",
        registrationLink: "https://forms.gle/QvNkpzHNJLe82xF26",
        rulebookLink: "https://drive.google.com/file/d/1GX8_DESDkZtXG0KDfeBGEl7BaUZUfWSC/view?usp=sharing",
    }
];


const nonTechEvents = [
    {
        id: 13,
        title: "Sherlock",
        description:
            "Unravel the mysteries hidden across the Multiverse! Sherlock is the ultimate test of wit and deduction in a race against time.",
        date: "",
        imgUrl: "/poster/Sherlock.png",
        videoUrl1: "/poster/video1.mp4",
        videoUrl2: "/poster/video2.mp4",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdguXk-7MzzQwhBLmjTGmFoBJCn6VpeENu1Eaf4nWSKRXGn_Q/viewform?usp=header",
        rulebookLink: "https://drive.google.com/file/d/1D2kMoPAwBVjf4A8rabiWvqC1sbrMx3Pz/view?usp=sharing",
    },
    {
        id: 12,
        title: "IPL Auction",
        description:
            "Shape your dream team in a Multiversal cricket battle! IPL Auction brings out the strategist in you as you draft your ultimate lineup.",
        date: "",
        imgUrl: "/poster/IPLAuction.png",
        videoUrl1: "/poster/video1.mp4",
        videoUrl2: "/poster/video2.mp4",
        registrationLink: "https://forms.gle/gS6CZUu7dHKPwUDU9",
        rulebookLink: "https://drive.google.com/file/d/1c0OatJR5iS6LAufsOFiIq69ro-aIQwW0/view?usp=sharing",
    },
    {
        id: 10,
        title: "Action Replay",
        description:
            "Travel through time in the Multiverse of Entertainment! Relive iconic moments and create new legends in Action Replay.",
        date: "",
        imgUrl: "/poster/ActionReplay.png",
        videoUrl1: "/poster/video1.mp4",
        videoUrl2: "/poster/video2.mp4",
        registrationLink: "https://forms.gle/ccFMLUQ5NACEtVgm9",
        rulebookLink: "https://drive.google.com/file/d/10jBYi2aUnENtKqeIbn9eJXY8QKZU-cK2/view?usp=sharing",
    },
    {
        id: 11,
        title: "Beast Games",
        description:
            "Enter the arena of Multiversal champions! Beast Games is where strength, skill, and strategy collide to test the limits of competition.",
        date: "",
        imgUrl: "/poster/BeastGames.png",
        videoUrl1: "/poster/video1.mp4",
        videoUrl2: "/poster/video2.mp4",
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSej6Hj-E6ttV7CjTtC3jA_5VOtczT5wJ4wJZXxw9yhhFq5acg/viewform?usp=header",
        rulebookLink: "https://drive.google.com/file/d/10VObLL05GEny0EWDR3tBuJ2QE5A1TqcG/view?usp=sharing",
    },
];

  useEffect(() => {
    const videoEndHandlers = {};

    const events = activeTab === "tech" ? techEvents : nonTechEvents;

    events.slice(0, visibleEvents).forEach((event, index) => {
      const video1 = document.getElementById(`video${index + 1}-1`);
      const video2 = document.getElementById(`video${index + 1}-2`);
      const eventImage = document.getElementById(`eventImage${index + 1}`);

      if (video1) video1.playbackRate = 0.8;
      if (video2) video2.playbackRate = 2.5;

      videoEndHandlers[index] = () => {
        if (video1) video1.style.opacity = "0";
        setTimeout(() => {
          if (video1) video1.classList.add("hidden");
          if (eventImage) {
            eventImage.classList.remove("hidden");
            eventImage.classList.add("fade-in");
          }
        }, 1300);
      };

      if (video1) video1.addEventListener("ended", videoEndHandlers[index]);

      if (eventImage) {
        eventImage.addEventListener("mouseenter", () => {
          if (video2) {
            video2.style.opacity = "1";
            video2.play();
          }
        });

        eventImage.addEventListener("mouseleave", () => {
          if (video2) {
            video2.style.opacity = "0";
            video2.pause();
            video2.currentTime = 0;
          }
        });
      }
    });

    const firstVideo = document.getElementById("video1-1");
    if (firstVideo) {
      firstVideo.addEventListener("ended", () => {
        setFirstVideoEnded(true);
      });
    }

    return () => {
      events.forEach((_, index) => {
        const video1 = document.getElementById(`video${index + 1}-1`);
        if (video1) video1.removeEventListener("ended", videoEndHandlers[index]);
      });
      if (firstVideo) {
        firstVideo.removeEventListener("ended", () => {
          setFirstVideoEnded(true);
        });
      }
    };
  }, [visibleEvents, activeTab]);

  const openModal = (eventId) => {
    const video2 = document.getElementById(`video${eventId + 1}-2`);
    if (video2) {
      video2.style.opacity = "1";
      video2.play();
    }
    setActiveModal(eventId);
  };

  const closeModal = () => {
    const video2 = document.getElementById(`video${activeModal + 1}-2`);
    if (video2) {
      video2.style.opacity = "0";
      video2.pause();
      video2.currentTime = 0;
    }
    setActiveModal(null);
  };

  const loadMore = () => {
    setLoadMoreClicks((prev) => prev + 1);
    if (loadMoreClicks === 0) {
      setVisibleEvents((prev) => Math.min(prev + 8, techEvents.length)); // Load 2 rows (8 events)
    } else {
      setVisibleEvents(techEvents.length); // Load all remaining events
    }
  };

  const renderEventCards = () => {
    const events = activeTab === "tech" ? techEvents : nonTechEvents;
    // console.log(events.length)
    return events.map((event, index) => (
      <div
        key={event.id}
        className="relative w-[90%] aspect-[3/4] cursor-pointer transform transition duration-500 rounded-lg shadow-lg"
        onClick={() => openModal(index)}
        
      >
        <video
          id={`video${index + 1}-1`}
          className="absolute inset-0 w-full h-full object-cover fade-in"
          autoPlay
          muted
          playsInline
        >
          <source src={event.videoUrl1} type="video/mp4" />
        </video>
        <img
          id={`eventImage${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover event-card hidden"
          src={event.imgUrl }
          alt="Event Image"
        />
        {console.log(event.imgUrl)}
        <video
          id={`video${index + 1}-2`}
          className="absolute inset-0 w-full h-full object-cover video-overlay"
          muted
          playsInline
        >
          <source src={event.videoUrl2} type="video/mp4" />
        </video>
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-2 sm:p-4 position-relative btn" style={{
      backgroundImage: `url(${bg})`,
    }}>
      <h1 className="text-4xl font-bold text-red-600 text-center mb-6">Events</h1>
      <div className="flex justify-center mb-4 ">
        <>
          <button
            className={`px-2 py-1 mx-2 ${activeTab === "tech" ? "bg-red-600 text-white" : "bg-gray-300 text-black"} rounded-md`}
            onClick={() => setActiveTab("tech")}
          >
            Tech Events
          </button>
          <button
            className={`px-2 py-1 mx-2 ${activeTab === "non-tech" ? "bg-red-600 text-white" : "bg-gray-300 text-black"} rounded-md`}
            onClick={() => setActiveTab("non-tech")}
          >
            Non-Tech Events
          </button>
        </>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {renderEventCards()}
      </div>

     

      {activeModal !== null && (
        <div className="modal active" onClick={closeModal}>
          <div className="modal-content modal-animation" onClick={(e) => e.stopPropagation()}>
            <div className="modal-details">
              <h2 id="modalTitle" className="text-3xl font-bold">
                {(activeTab === "tech" ? techEvents : nonTechEvents)[activeModal].title}
              </h2>
              <p id="modalDetails" className="mt-2 text-lg">
                {(activeTab === "tech" ? techEvents : nonTechEvents)[activeModal].description}
                <br />
                {/* <span className="text-sm text-gray-300">
                  Date: {(activeTab === "tech" ? techEvents : nonTechEvents)[activeModal].date}
                </span> */}
              </p>
              <div className="modal-buttons mt-4 flex justify-center gap-4">
                <button
                  onClick={() => window.open((activeTab === "tech" ? techEvents : nonTechEvents)[activeModal].registrationLink, "_blank")}
                  className="bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold"
                >
                  Register
                </button>
                <button
                  onClick={() => window.open((activeTab === "tech" ? techEvents : nonTechEvents)[activeModal].rulebookLink, "_blank")}
                  className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold"
                >
                  
                  Download Rulebook
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        body, html {
          overflow-x: hidden; /* Prevent horizontal scroll */
          margin: 0;
          padding: 0;
        }

        .hidden {
          opacity: 0;
          pointer-events: none;
          transition: opacity 1s ease-in-out;
        }
        .fade-in {
          opacity: 1;
          transition: opacity 1s ease-in-out;
        }
        .event-card {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border: 3px solid red;
          box-shadow: 0 0 15px red;
          border-radius: 10px;
          transition: transform 0.3s ease-in-out;
        }
        .video-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          mix-blend-mode: lighten;
          opacity: 0;
          transition: opacity 0.1s ease-in-out;
          pointer-events: none;
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease-in-out;
          z-index: 1000;
        }
        .modal.active {
          opacity: 1;
          pointer-events: auto;
        }
        .modal-content {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          border-radius: 16px;
          padding: 25px;
          width: 90%;
          max-width: 600px;
        }
        .load-more-animation {
          animation: fadeInUp 1s ease-in-out;
        }
        .modal-animation {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default CollegeEvents;