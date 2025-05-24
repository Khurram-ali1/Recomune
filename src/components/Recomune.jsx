import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Recommune.css';
import Logo from "../assets/Logo.svg";
import Applebtn1 from '../assets/apple-btn-1.png';

import Applewhite from '../assets/apple-white-btn.png';
import Playwhite from '../assets/play-white-btn.png';
import Btn1 from '../assets/btn-1.png';
import Btn2 from '../assets/btn-2.png';
import Herophone from '../assets/hero-phone.png';
import Herobg from '../assets/hero-bg.png';
import Herophone3 from '../assets/hero-phone-3.png';
import Herophone2 from '../assets/hero-phone-2.png';
import Homebg from '../assets/home-bg.png';
import Homephone from '../assets/home-phone.png';
import Btn from '../assets/btn.png';
import Btnn from '../assets/btnn.png';
import Playbtn2 from '../assets/play-btn-2.png';
import Arrow from '../assets/arrow.svg';
import Approach from '../assets/approach.png';
import Benefits from '../assets/benefits.png';
import Friends from '../assets/friends.png';
import Circle from '../assets/circle.png';
import Recomunevideo from '../assets/Recomune.mp4'
import Mockup1 from '../assets/mockup-1.png';
import Mockup2 from '../assets/mockup-2.png';
import Mockup3 from '../assets/mockup-3.png';
import Trusted from '../assets/trusted.png';
import Trusted2 from '../assets/trusted-2.png';
import Explorebg from "../assets/explorebg.png"
import Footerbg from "../assets/footer-bg.jpg"

import { FaYoutube, FaLinkedin , FaInstagram ,FaFacebook } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

function Recomune() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const baseRef = useRef(null);
  

useEffect(() => {
  const container = containerRef.current;
  const sections = gsap.utils.toArray(".horizontal-scroll .content");

  gsap.registerPlugin(ScrollTrigger);

  if (window.innerWidth >= 768) {
    // ✅ Desktop: Horizontal Scroll
    const ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 0.5,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: 0.1,
            delay: 0.1,
            ease: "power3.inOut",
          },
          end: () => `+=${container.offsetWidth * sections.length}`,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, container);

    return () => ctx.revert();
  } else {
    // ✅ Mobile: Slide in from right (x movement)
    const ctx = gsap.context(() => {
      sections.forEach((section, index) => {
        if (index === 0) return; // Skip first section

        gsap.fromTo(
          section,
          { x: "100%" },
          {
            x: "0%",
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top bottom", // Trigger when section enters view
              end: "top center",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }
}, []);

  
  

   useEffect(() => {
    const screenWidth = window.innerWidth;
    let heightValue = 3300; // Default height

    if (screenWidth >= 1024 && screenWidth <= 1440) {
      heightValue = 2750; // Adjust for laptop screens
    }

    // Set base gray line height
    if (baseRef.current) {
      baseRef.current.style.height = `${heightValue}px`;
    }

    // Animate white fill line
    if (lineRef.current) {
      const tl = gsap.fromTo(
        lineRef.current,
        { height: "0px" },
        {
          height: `${heightValue}px`,
          ease: "none",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 80%",
            end: `top+=${heightValue}`,
            scrub: 2,
            // markers: true,
          },
        }
      );

      return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
      };
    }
  }, []);








 

  return (
    <>
      <div className="horizontal-scroll" ref={containerRef}>
        <section
          className="h-screen content"
          style={{
            backgroundImage: `url(${Herobg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative container max-w-7xl mx-auto ">
            <div className="logo">
              <img
                src={Logo}
                alt="Logo"
                className="absolute top-4 md:left-0 left-12 screen-logo md:w-auto w-[150px]"
              />
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex flex-col gap-4 mt-[200px] items-center md:items-start px-8 md:px-0 screen-margin ">
                <h1 className="text-white md:text-left text-center text-[26px] md:text-[69.2px] md:w-[800px] w-[300px] items-center font-bold leading-tight screen-h1">
                  Connect With <span className="text-[#2563EA]">Friends</span>{" "} <br className="hidden md:inline"/>
                  Instantly
                  <span className="inline-block align-middle w-8 md:w-12 h-1.5 md:h-3 bg-white mx-4 white-line"></span>
                  Start Your <br className="hidden md:inline"/> Chat Now{" "}
                  <span className="inline-block align-middle w-[160px] md:w-[250px] h-1 bg-[#2563EA] mx-2 blue-line"></span>
                </h1>
                <p className="md:text-[18px] text-[16px] md:text-left text-center text-white font-normal screen-p">
                  Browse a circle of friendly, thoughtful companions — each with
                  unique stories <br className="hidden md:inline"/> and personalities. Tap to start a
                  conversation and build meaningful bonds, <br className="hidden md:inline"/> anytime you
                  like.
                </p>
                <div className="flex gap-4 mt-4">
                  <img
                    src={Btn1}
                    alt=""
                    className="md:w-[220px] screen-btn1 w-[120px]"
                  />
                  <img
                    src={Btn2}
                    alt=""
                    className="md:w-[220px] screen-btn2 w-[120px]"
                  />
                </div>
              </div>
              <img
                src={Herophone}
                alt="Hero"
                className="h-[1000px] ml-[-200px] screen-img md:flex hidden "
              />
            </div>
          </div>
        </section>
        <section
          className="h-screen content"
          style={{
            backgroundImage: `url(${Herobg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative container max-w-7xl mx-auto ">
            <div className="logo">
              <img
                src={Logo}
                alt="Logo"
                className="absolute top-4 md:left-0 left-12 screen-logo md:w-auto w-[150px]"
              />
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex flex-col gap-4 mt-[200px] items-center md:items-start px-8 md:px-0 screen-margin ">
                <h1 className="text-white md:text-left text-center text-[26px] md:text-[69.2px] md:w-[800px] w-[300px] items-center font-bold leading-tight screen-h1">
                  Begin Meaningful{" "} <br className="hidden md:inline"/>
                  <span className="text-[#2563EA]">Conversations</span>, On{" "} 
                  <br className="hidden md:inline"/>
                  Your Schedule
                  <span className="inline-block align-middle w-[100px] h-1 bg-[#2563EA] mx-3 "></span>
                </h1>
                <p className="md:text-[18px] text-[16px] md:text-left text-center text-white font-normal screen-p">
                  Step into a world where friendship is just a call away. Your
                  Recomune friend <br className="hidden md:inline"/> listens,  responds, and truly engages in
                  real-time conversations—bringing <br className="hidden md:inline"/> warmth and  connection
                  to your day.
                </p>
                <div className="flex gap-4 mt-4">
                  <img
                    src={Btn1}
                    alt=""
                    className="md:w-[220px] screen-btn1 w-[120px]"
                  />
                  <img
                    src={Btn2}
                    alt=""
                    className="md:w-[220px]  w-[120px] screen-btn2"
                  />
                </div>
              </div>
              <img
                src={Herophone2}
                alt="Hero"
                className="h-[1000px] ml-[-200px] md:flex hidden screen-img "
              />
            </div>
          </div>
        </section>
        <section
          className="h-screen content"
          style={{
            backgroundImage: `url(${Herobg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative container max-w-7xl mx-auto ">
            <div className="logo">
              <img
                src={Logo}
                alt="Logo"
                className="absolute top-4 md:left-0 left-12 screen-logo md:w-auto w-[150px] screen-logo"
              />
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex flex-col gap-4 mt-[200px] items-center md:items-start px-8 md:px-0  screen-margin ">
                <h1 className="text-white md:text-left text-center text-[26px] md:text-[69.2px] md:w-[800px] w-[300px] items-center font-bold leading-tight screen-h1">
                  Take a Closer Look & <br className="hidden md:inline"/>{" "}
                  <span className="text-[#2563EA]">Discover </span>
                  Who Your <br className="hidden md:inline"/>
                  Friend Really Is
                  <span className="inline-block align-middle w-[100px] h-1 bg-[#2563EA] mx-3"></span>
                </h1>
                <p className="md:text-[18px] text-[16px] md:text-left text-center text-white font-normal screen-p">
                  Every friend on Recomune has a story worth hearing — from
                  their passions and life <br className="hidden md:inline"/> experiences to the little
                  things that make them unique. Take a moment to discover <br className="hidden md:inline"/>{" "}
                  who they really are and build a connection that truly matters.{" "}
                </p>
                <div className="flex gap-4 mt-4">
                  <img
                    src={Btn1}
                    alt=""
                    className="md:w-[220px]  w-[120px] screen-btn1"
                  />
                  <img
                    src={Btn2}
                    alt=""
                    className="md:w-[220px]  w-[120px] screen-btn2"
                  />
                </div>
              </div>
              <img
                src={Herophone3}
                alt="Hero"
                className="h-[1000px] ml-[-200px] screen-img md:flex hidden "
              />
            </div>
          </div>
        </section>
      </div>

      <section
      
        className="h-screen"
        style={{
          backgroundImage: `url(${Homebg})`,

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container max-w-7xl mx-auto px-4 flex items-center justify-center h-screen">
          <div className="flex md:flex-row flex-col items-center justify-between">
            <img
              src={Homephone}
              alt=""
              className="h-[425px] md:h-[625px] md:ml-[-140px] mb-12 md:mb-0 home-phone "
            />
            <div className="w-[890px] h-[168px] flex md:flex-row flex-col items-center justify-center gap-4 ">
              <div className="flex flex-col gap-4 items-end  md:mr-0 mr-[-200px] hidden md:flex">
                <div className="group relative h-16 flex justify-end">
                  <img
                    src={Btn}
                    alt=""
                    className="h-16 w-16 absolute top-0 right-0 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 cursor-pointer home-btn1"
                  />
                  <img
                    src={Applebtn1}
                    alt=""
                    className="h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 home-btn-open-1"
                  />
                </div>

                <div className="group relative h-16 flex justify-end">
                  <img
                    src={Btnn}
                    alt=""
                    className="h-16 w-16 absolute top-0 right-0 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 cursor-pointer home-btn2"
                  />
                  <img
                    src={Playbtn2}
                    alt=""
                    className="h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 home-btn-open-2"
                  />
                </div>
              </div>

              <div className="border border-[#2563EA] rounded-lg p-4 flex flex-col gap-2 mr-0 md:mr-[-100px] home-container">
                <h1 className="text-[20px] md:text-[40px] text-[#2563EA] font-bold home-h1">
                  Feeling Lonely After Retirement?
                </h1>
                <p className="text-[14px] md:w-[600px] w-[350px] font-normal text-white home-p">
                  No one should have to face loneliness alone. On Recomune, you
                  can connect with companions  anytime—whether you’re
                  seeking friendship, comfort, or simply someone to share your
                  day with.  Start meaningful conversations and find the
                  companionship you deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#040C20] py-12 relative">
        <div className="container max-w-8xl mx-auto flex flex-col items-center justify-center text-center">
          <p className="text-[#2563EA] text-[18px] font-bold mb-2">
            The Power Of Connection
          </p>
          <h1 className="text:[20px] md:text-[45px] font-bold text-white px-4 md:px-0 mb-2 connection-main-h1">
            Conversations That Support A Healthier, <br className="md:inline hidden"/>{" "}
            <span className="text-[#2563EA] ">Happier Life </span> For Seniors{" "}
          </h1>
          <p className="text-[14px] md:text-[16px] font-normal text-white mb-2 leading-[24px] md:leading-[30px] connection-main-p">
            Regular social interaction isn’t just enjoyable—it’s essential for
            mental sharpness, <br className="md:inline hidden"/> emotional well-being, and physical health.
          </p>
    
  <div className="absolute top-[380px] left-6 md:left-1/2 -translate-x-1/2 w-[2px]">
      {/* Gray base line */}
      <div
        ref={baseRef}
        className="bg-[#6065778f] w-full rounded-md"
        style={{ height: "0px" }}
      />

      {/* White animated fill line */}
      <div
        ref={lineRef}
        className="bg-white w-full h-0 rounded-md absolute top-0 left-0"
      />
    </div>


          <div className="flex items-start gap-[20px] md:gap-[180px] mt-0 md:mt-20 connection-box">
            <div className="flex flex-col gap-2 items-start md:flex hidden connection-number">
              <h1 className="text-[189px] font-bold text-[#1D2436] connection-num">01</h1>
              <h1 className="text-[128px] font-bold text-[#1D2436] mt-[-100px] connection-heading">
                Approach
              </h1>
            </div>
            <div className="flex flex-col gap-4 items-start md:ml-0 ml-10 md:mt-0 mt-24 md:px-0 px-4 connection-area">
              <h1 className="md:hidden font-bold text-[#1D2436] text-[40px]"> Approach</h1>
              <h1 className="text-[16px] md:text-[28px] font-bold text-white connection-h1">
                A Smarter Approach to Cognitive Wellness
              </h1>
              <p className="text-[14px] md:text-[16px] font-normal text-[#B5BED6] text-left leading-[22px] md:leading-[30px] connection-p">
                Did you know that friendly, purposeful conversations can slow
                cognitive <br className="md:inline hidden" /> decline in older adults? Recomune is designed
                to empower seniors by <br className="md:inline hidden" /> connecting them through engaging,
                consistent dialogue that enhances <br className="md:inline hidden" /> memory retention and
                mental sharpness.
              </p>
              <h3 className="text-[16px] md:text-[20px] font-semibold text-[#2563EA] connection-blue">
                How Recomune Boosts Brain Health
              </h3>
              <p className="text-[14px] md:text-[18px] font-normal text-[#B5BED6] flex gap-[6px] md:gap-2 text-left connection-li">
                <img src={Arrow} alt="" className="md:w-auto w-[16px]" /> Talking regularly
                keeps the brain engaged & improves memory.
              </p>
              <p className="text-[14px] md:text-[18px] font-normal text-[#B5BED6] flex gap-[6px] md:gap-2 text-left connection-li">
                <img src={Arrow} alt=""  className="md:w-auto w-[16px]" /> Interaction lowers
                blood pressure and heart disease risk.
              </p>
              <p className="text-[14px] md:text-[18px] font-normal text-[#B5BED6] flex gap-[6px] md:gap-2 text-left connection-li">
                <img src={Arrow} alt=""  className="md:w-auto w-[16px]" /> Engaging
                conversations reduce anxiety and improve rest.
              </p>
              <p className="text-[14px] md:text-[18px] font-normal text-[#B5BED6] flex gap-[6px] md:gap-2 text-left connection-li">
                <img src={Arrow} alt=""  className="md:w-auto w-[16px]" /> Seniors feel
                valued, heard, and part of a community.
              </p>
              <img
                src={Approach}
                alt=""
                className="md:mt-12 mt-6 md:w-[568px] md:h-[571px] md:ml-0 ml-[-10px] connection-img"
              />
            </div>
          </div>

          <div className="flex items-start gap-[290px] mt-24 connection-box2">
            <div className="flex flex-col gap-2 items-start md:flex hidden connection-number">
              <h1 className="text-[189px] font-bold text-[#1D2436] connection-num">02</h1>
              <h1 className="text-[128px] font-bold text-[#1D2436] mt-[-100px] connection-heading">
                Benefits
              </h1>
            </div>
            <div className="flex flex-col gap-4 items-start md:ml-0 ml-10  md:px-0 px-4 connection-area">
              <h1 className="md:hidden font-bold text-[#1D2436] text-[40px]"> Benefits</h1>
              <h1 className="text-[16px] md:text-[28px] font-bold text-white connection-h1">
                The Power of Socializing for a Healthier Life
              </h1>
              <p className="text-[14px] md:text-[16px] font-normal text-[#B5BED6] text-left leading-[22px] md:leading-[30px] connection-p">
                Social isolation can have effects similar to chronic smoking. Regular <br className="md:inline hidden" /> interaction, even virtual, significantly contributes to physical and emotional  <br className="md:inline hidden" /> well-being in seniors. Recomune combats loneliness by building authentic,  <br className="md:inline hidden" /> human connections.
              
              </p>
              <h3 className="text-[16px] md:text-[20px] font-semibold text-[#2563EA] connection-blue">
               Why Socializing with Recomune Matters
              </h3>
              <p className="text-[14px] md:text-[18px] font-normal text-[#B5BED6] flex gap-[6px] md:gap-2 text-left connection-li">
                <img src={Arrow} alt=""  className="md:w-auto w-[16px]"/> Connected seniors have stronger immune responses.
              </p>
              <p className="text-[14px] md:text-[18px] font-normal text-[#B5BED6] flex gap-[6px] md:gap-2 text-left connection-li">
                <img src={Arrow} alt=""  className="md:w-auto w-[16px]"/> Interaction lowers blood pressure and heart disease risk.
              </p>
              <p className="text-[14px] md:text-[18px] font-normal text-[#B5BED6] flex gap-[6px] md:gap-2 text-left connection-li">
                <img src={Arrow} alt=""  className="md:w-auto w-[16px]"/> Engaging conversations reduce anxiety and improve rest.
              </p>
              <p className="text-[14px] md:text-[18px] font-normal text-[#B5BED6] flex gap-[6px] md:gap-2 text-left connection-li">
                <img src={Arrow} alt=""  className="md:w-auto w-[16px]"/> Seniors feel valued, heard, and part of a community.
              </p>
              <img
                src={Benefits}
                alt=""
                className="md:mt-12 mt-6 md:w-[568px] md:h-[571px] md:ml-0 ml-[-10px] connection-img"
              />
            </div>
          </div>

          <div className="flex items-start gap-[350px] mt-24 connection-box3">
            <div className="flex flex-col gap-2 items-start md:flex hidden connection-number">
              <h1 className="text-[189px] font-bold text-[#1D2436] connection-num">03</h1>
              <h1 className="text-[128px] font-bold text-[#1D2436] mt-[-100px] connection-heading">
                Friends
              </h1>
            </div>
            <div className="flex flex-col gap-4 items-start md:ml-0 ml-10  md:px-0 px-4 connection-area">
              <h1 className="md:hidden font-bold text-[#1D2436] text-[40px]"> Friends</h1>
              <h1 className="text-[16px] md:text-[28px] font-bold text-white connection-h1">
                Everyone’s Here—Who Will You Talk To?
              </h1>
              <p className="text-[14px] md:text-[16px] font-normal text-[#B5BED6] text-left leading-[22px] md:leading-[30px] connection-p">
              Recomune is designed with ease and familiarity in mind. No complex  <br /> menus, just intuitive conversations with friends and companions. Whether  <br /> it’s chatting about gardening, family, or the weather—every conversation  <br />matters.
              
              </p>
              <h3 className="text-[16px] md:text-[20px]  font-semibold text-[#2563EA] connection-blue">
               Why Socializing with Recomune Matters
              </h3>
              <p className="text-[14px] md:text-[18px] font-normal text-[#B5BED6] flex gap-[6px] md:gap-2 text-left connection-li">
                <img src={Arrow} alt="" className="md:w-auto w-[16px]"/> Large buttons, clear text, & voice-friendly features.
              </p>
              <p className="text-[14px] md:text-[18px] font-normal text-[#B5BED6] flex gap-[6px] md:gap-2 text-left connection-li">
                <img src={Arrow} alt="" className="md:w-auto w-[16px]"/> Resembles popular calling/chat platforms seniors may recognize.
              </p>
              <p className="text-[14px] md:text-[18px] font-normal text-[#B5BED6] flex gap-[6px] md:gap-2 text-left connection-li">
                <img src={Arrow} alt="" className="md:w-auto w-[16px]"/> Gentle reminders encourage regular use.
              </p>
              <p className="text-[14px] md:text-[18px] font-normal text-[#B5BED6] flex gap-[6px] md:gap-2 text-left connection-li">
                <img src={Arrow} alt="" className="md:w-auto w-[16px]"/>Privacy and data protection built into every call and message.
              </p>
              <img
                src={Friends}
                alt=""
                className="md:mt-12 mt-6 md:w-[568px] md:h-[571px] md:ml-0 ml-[-10px] connection-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#040C20] py-16">
        <div className="container max-w-8xl mx-auto flex flex-col items-center justify-center text-center md:px-0 px-4">
          <p className="text-[#2563EA] text-[18px] font-bold mb-2">
            The Power Of Connection
          </p>
          <h1 className="text-[20px] md:text-[45px] font-bold text-white mb-2 social-h">
            Why 
            <span className="text-[#2563EA] "> Social Connection </span> Matters
          </h1>
          <p className="text-[14px] md:text-[16px] font-light text-white mb-2 leading:[24px] md:leading-[30px] social-p">
            Social connection is more than just a feel-good experience — it’s a proven key to  <br className="md:inline hidden"/> healthier aging. Meaningful interactions can reduce loneliness, lower stress, and even <br className="md:inline hidden"/> strengthen memory and cognitive health.
          </p>
          <div className="flex md:flex-row flex-col justify-between mt-12 md:mt-24 gap-12 social-main">
            <div className="flex flex-col gap-8  social-box">
              <div className="bg-[#071330] p-4 rounded-lg flex flex-col  items-start">
                <h1 className="text-[18px] font-semibold text-[#2563EA] social-heading">Stay Mentally Sharp</h1>
                <p className="text-[16px] font-light text-[#B5BED6] leading-[26px] text-left social-para">Conversations keep the brain active and memory <br />
                   strong.</p>
              </div>
              <div className="bg-[#071330] p-4 rounded-lg flex flex-col  items-start">
                <h1 className="text-[18px] font-semibold text-[#2563EA] social-heading">Feel Emotionally Connected</h1>
                <p className="text-[16px] font-light text-[#B5BED6] leading-[26px] text-left social-para">Talking regularly with friends boosts happiness <br /> and lowers stress. 
                  </p>
              </div>
              <div className="bg-[#071330] p-4 rounded-lg flex flex-col  items-start">
                <h1 className="text-[18px] font-semibold text-[#2563EA] social-heading"> Live Healthier, Longer</h1>
                <p className="text-[16px] font-light text-[#B5BED6] leading-[26px] text-left social-para">Strong relationships support physical health and <br /> overall wellness. 
                   </p>
              </div>


            </div>
            <div><img src={Circle} alt="" className="md:w-[426px] md:h-[426px] w-[400px] h-[400px] social-circle" /></div>
            <div className="flex flex-col gap-8 social-box ">
              <div className="bg-[#071330] p-4 rounded-lg flex flex-col  items-start">
                <h1 className="text-[18px] font-semibold text-[#2563EA] social-heading">Always Available Support</h1>
                <p className="text-[16px] font-light text-[#B5BED6] leading-[26px] text-left social-para">Talk to someone anytime, reducing loneliness on  <br />
                   demand.</p>
              </div>
              <div className="bg-[#071330] p-4 rounded-lg flex flex-col  items-start">
                <h1 className="text-[18px] font-semibold text-[#2563EA] social-heading">Personalized Friendships</h1>
                <p className="text-[16px] font-light text-[#B5BED6] leading-[26px] text-left social-para">Match with people who fit your interests and <br /> needs.
                  </p>
              </div>
              <div className="bg-[#071330] p-4 rounded-lg flex flex-col  items-start">
                <h1 className="text-[18px] font-semibold text-[#2563EA] social-heading">Peace of Mind for Caregivers</h1>
                <p className="text-[16px] font-light text-[#B5BED6] leading-[26px] text-left social-para">Reliable social interaction helps reduce caregiver <br /> stress. 
                   </p>
              </div>


            </div>
          </div>
          </div>

      </section>

      <section className="bg-[#040C20] py-12 md:px-0 px-4  ">
        <video src={Recomunevideo} loop muted autoPlay className="w-[1798px] rounded-lg mx-auto video-width  "></video>

      </section>

      <section className="bg-[#040C20] py-16">
        <div className="container max-w-8xl mx-auto flex flex-col items-center justify-center text-center px-4 md:px-0">
          <p className="text-[#2563EA] text-[18px] font-bold mb-2">
            The Power Of Connection
          </p>
          <h1 className="text-[20px] md:text-[45px] font-bold text-white mb-2 explore-main">
            Explore The 
            <span className="text-[#2563EA] "> World </span> Of ReComune
          </h1>
          <p className="text-[14px] md:text-[16px] font-light text-white mb-2 leading-[24px] md:leading-[30px] explore-p ">
            Step into a world where you're never truly alone. ReComune brings the warmth of real <br className="md:inline hidden"/> conversation through your very own AI companion</p>
            <div className="flex flex-col items-center justify-center gap-10 mt-12">
            <div className=" w-[400px] h-[440px] md:w-[1328px] md:h-[590px] p-4 rounded-3xl flex items-center justify-between explore-box"  style={{
          backgroundImage: `url(${Explorebg})`,

          backgroundSize: "cover",
          
        }} 
            >
            <div className="flex flex-col gap-4 md:gap-6 items-start ml-6 explore-content ">
              <h1 className="text-[18px] md:text-[22px] font-bold text-white explore-h">Global | Emotion-Centered AI Chat</h1>
              <p className="text-[14px] md:text-[16px] font-light text-[#B5BED6] text-left leading-[24px] md:leading-[30px] explore-para">A lifeline for moments when silence feels heavy. <br />
                ReComune Voice offers realistic, real-time phone <br /> conversations with your virtual friend.</p>
<h3 className="text-18px md:text-[20px] font-semibold text-[#2563EA] explore-blue">
               Key Highlights:
              </h3>
              <p className="text-[14px] md:text-[18px] font-light text-[#B5BED6] flex gap-2 explore-li">
                <img src={Arrow} alt="" className="md:w-auto w-4"/> 24/7 realistic voice chats with live captions
              </p>
              <p className="text-[14px] md:text-[18px] font-light text-[#B5BED6] flex gap-2 explore-li text-left">
                <img src={Arrow} alt=""  className="md:w-auto w-4"/> Emotion-aware conversations for deeper connection
              </p>
              <p className="text-[14px] md:text-[18px] font-light text-[#B5BED6] flex gap-2 explore-li">
                <img src={Arrow} alt=""  className="md:w-auto w-4"/> Perfect for easing loneliness and lifting your spirits
              </p>
              <p className="text-[14px] md:text-[18px] font-light text-[#B5BED6] flex gap-2 explore-li">
                <img src={Arrow} alt=""  className="md:w-auto w-4"/> Just tap to call — your friend is always ready
              </p>
              <div className="flex gap-4 mt-2">
                <img src={Applewhite} alt="" className="w-[100px] h-[28px] md:w-[180px] md:h-[50px] explore-btn " />
                <img src={Playwhite} alt="" className="w-[100px] h-[28px] md:w-[180px] md:h-[50px] explore-btn" />
              </div>
            </div>
            <img src={Mockup1} alt=""  className="w-[789px] h-[556px] explore-mockup md:flex hidden"/>
            </div>

            <div className="w-[400px] h-[440px] md:w-[1328px] md:h-[590px] p-4 rounded-3xl flex items-center justify-between explore-box"  style={{
          backgroundImage: `url(${Explorebg})`,

          backgroundSize: "cover",
          
        }} >
            <div className="flex flex-col gap-4 md:gap-6 items-start ml-6 explore-content ">
              <h1 className="text-[18px] md:text-[22px] font-bold text-white explore-h">Personalized AI Conversations</h1>
              <p className="text-[14px] md:text-[16px] font-light text-[#B5BED6] text-left leading-[24px] md:leading-[30px] explore-para">Conversations that feel like they were made just  <br />
               for you. Companion Chat allows users to customize <br />their virtual friend's personality, tone, and topics.</p>
<h3 className="text-18px md:text-[20px] font-semibold text-[#2563EA] explore-blue">
               Key Highlights:
              </h3>
              <p className="text-[14px] md:text-[18px] font-light text-[#B5BED6] flex gap-2 explore-li">
                <img src={Arrow} alt="" className="md:w-auto w-4"/> Chat responses tailored to your mood and interests
              </p>
              <p className="text-[14px] md:text-[18px] font-light text-[#B5BED6] flex gap-2 explore-li">
                <img src={Arrow} alt="" className="md:w-auto w-4"/> AI learns and evolves with your preferences
              </p>
              <p className="text-[14px] md:text-[18px] font-light text-[#B5BED6] flex gap-2 explore-li">
                <img src={Arrow} alt="" className="md:w-auto w-4"/> Share stories, daily updates, or just vent
              </p>
              <p className="text-[14px] md:text-[18px] font-light text-[#B5BED6] flex gap-2 explore-li">
                <img src={Arrow} alt="" className="md:w-auto w-4"/> No judgment, just genuine understanding
              </p>
              <div className="flex gap-4 mt-2">
                <img src={Applewhite} alt="" className="w-[100px] h-[28px] md:w-[180px] md:h-[50px]  explore-btn" />
                <img src={Playwhite} alt="" className="w-[100px] h-[28px] md:w-[180px] md:h-[50px]  explore-btn" />
              </div>
            </div>
            <img src={Mockup2} alt=""  className="w-[789px] h-[556px] explore-mockup md:flex hidden"/>
            </div>

             <div className="w-[400px] h-[440px] md:w-[1328px] md:h-[590px] p-4 rounded-3xl flex items-center justify-between explore-box"  style={{
          backgroundImage: `url(${Explorebg})`,

          backgroundSize: "cover",
          
        }} >
            <div className="flex flex-col gap-4 md:gap-6 items-start ml-6 explore-content">
              <h1 className="text-[18px] md:text-[22px] font-bold text-white explore-h">Emotional Wellness | Smart Connection</h1>
              <p className="text-[14px] md:text-[16px] font-light text-[#B5BED6] text-left leading-[24px] md:leading-[30px] explore-para">A thoughtful blend of empathy and technology.  <br />
                HeartSpace AI offers a welcoming, non-intrusive  <br /> space to talk about anything.</p>
<h3 className="text-18px md:text-[20px] font-semibold text-[#2563EA] explore-blue">
               Key Highlights:
              </h3>
              <p className="text-[14px] md:text-[18px] font-light text-[#B5BED6] flex gap-2 explore-li">
                <img src={Arrow} alt="" className="md:w-auto w-4"/> Secure, judgment-free zone for meaningful chats
              </p>
              <p className="text-[14px] md:text-[18px] font-light text-[#B5BED6] flex gap-2 explore-li">
                <img src={Arrow} alt="" className="md:w-auto w-4"/> Text-to-speech with real-time captions
              </p>
              <p className="text-[14px] md:text-[18px] font-light text-[#B5BED6] flex gap-2 explore-li">
                <img src={Arrow} alt="" className="md:w-auto w-4"/> Simple, intuitive interface — no learning curve
              </p>
              <p className="text-[14px] md:text-[18px] font-light text-[#B5BED6] flex gap-2 explore-li">
                <img src={Arrow} alt="" className="md:w-auto w-4"/> Promotes mindfulness, connection, and calm
              </p>
                <div className="flex gap-4 mt-2">
                  <img src={Applewhite} alt="" className="w-[100px] h-[28px] md:w-[180px] md:h-[50px]  explore-btn" />
                  <img src={Playwhite} alt="" className="w-[100px] h-[28px] md:w-[180px] md:h-[50px] explore-btn " />
                </div>
            </div>
            <img src={Mockup3} alt=""  className="w-[789px] h-[556px] explore-mockup md:flex hidden"/>
            </div>

            </div>
          </div>
          </section>

          <section className="bg-[#040C20] py-12">
            <h1 className="text-[20px] md:text-[45px] font-bold text-white text-center mb-12 trusted-heading ">Your <span className="text-[#2563EA]">Trusted Friend </span>, Always Available</h1>
            <div className="container max-w-7xl mx-auto flex items-center justify-center ">
              
              <div className="flex md:flex-row flex-col justify-between gap-10 md:gap-16">
                <img src={Trusted} alt="" className="w-[400px] md:w-[425px] h-[578px] ml-0 md:ml-[-40px] md:mt-[130px] trusted-img1" />
                <div className="flex flex-col gap-12 items-center  md:items-start trusted-content">
                  <div className="flex flex-col items-start">
                    <h1 className="text-[18px] md:text-[22px] font-medium text-[#2563EA] trusted-num">01</h1>
                    <h2 className="text-[18px] md:text-[22px] font-bold text-white leading-[66px] mt-[-10px] trusted-h">Thoughtful Companionship</h2>
                    <p className="text-[14px] md:text-[16px] font-light text-[#B5BED6] text-left leading-[24px] md:leading-[30px] mt-[-10px] md:mt-[-6px] trusted-p">ReComune brings real, heartfelt conversations <br /> with a virtual friend who listens, understands, <br /> and responds with empathy.</p>
                  </div>
                   <div className="flex flex-col  items-start">
                    <h1 className="text-[18px] md:text-[22px] font-medium text-[#2563EA] trusted-num">02</h1>
                    <h2 className="text-[18px] md:text-[22px] font-bold text-white leading-[66px] mt-[-10px] trusted-h">Effortless Experience</h2>
                    <p className="text-[14px] md:text-[16px] font-light text-[#B5BED6] text-left leading-[24px] md:leading-[30px] mt-[-10px] md:mt-[-6px] trusted-p">With a clean, intuitive design, ReComune makes<br /> it easy to chat, revisit conversations, and  <br /> connect — all with a tap.</p>
                  </div>
                  <div className="flex flex-col  items-start">
                    <h1 className="text-[18px] md:text-[22px] font-medium text-[#2563EA] trusted-num">03</h1>
                    <h2 className="text-[18px] md:text-[22px] font-bold text-white leading-[66px] mt-[-10px] trusted-h">Safe & Private Space</h2>
                    <p className="text-[14px] md:text-[16px] font-light text-[#B5BED6] text-left leading-[24px] md:leading-[30px] mt-[-10px] md:mt-[-6px] trusted-p">ReComune keeps your conversations private <br /> and secure, creating a safe, judgment-free  <br /> space to be yourself.</p>
                  </div>
                   <div className="flex flex-col  items-start">
                    <h1 className="text-[18px] md:text-[22px] font-medium text-[#2563EA] trusted-num">04</h1>
                    <h2 className="text-[18px] md:text-[22px] font-bold text-white leading-[66px] mt-[-10px] trusted-h">Always Here for You</h2>
                    <p className="text-[14px] md:text-[16px] font-light text-[#B5BED6] text-left leading-[24px] md:leading-[30px] mt-[-10px] md:mt-[-6px] trusted-p">Day or night, your companion is always there <br /> — for support, conversation, or simply to keep <br /> you company.</p>
                  </div>

                </div>
                <img src={Trusted2} alt="" className="w-[425px] h-[282px] mr-[-40px] md:mt-[280px] trusted-img2" />
              </div>
            </div>
            
          </section>

          <section className=" py-8"  style={{
          backgroundImage: `url(${Footerbg})`,

          backgroundSize: "cover",
          backgroundPosition:"center center "
          
          
        }} >
            <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center px-4 md:px-0 ">
              <img src={Logo} alt="" className="w-[250px] md:w-[378px] h-[112px] footer-logo"/>
              <p className="text-[14px] md:text-[16px] font-light text-[#B5BED6] text-center leading-[24px] md:leading-[30px] mt-2 pb-6  border-b border-[#0E2557]  footer-p">Connecting people, fostering meaningful conversations, and making every interaction count.</p>
            <div className="flex gap-10 mt-6  ">
              <p className="text-[14px] md:text-[16px] font-light text-[#B5BED6]">Terms & Condition</p>
              <p className="text-[14px] md:text-[16px] font-light text-[#B5BED6]">Privacy Policy</p>
              <p className="text-[14px] md:text-[16px] font-light text-[#B5BED6]">Support</p>
            </div>
            <div className="flex gap-4 mt-4 mb-2">
              <img src={Applewhite} alt="" className="md:w-[180px] md:h-[50px] w-[100px] h-[28px]" />
              <img src={Playwhite} alt="" className="md:w-[180px] md:h-[50px] w-[100px] h-[28px]" />
            </div>
            </div>

          </section>
          <section className="bg-[#2563EA] py-2 md:px-24">
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <h1 className="text-[12px] md:text-[15px] font-light text-white">
          © 2025 Recomune | All Rights Reserved.
        </h1>
        <div className="flex gap-1 md:gap-3">
          <FaFacebook
            className="text-white bg-transparent border border-[#4881FF] rounded-md p-2 text-[32px] 
              hover:border-none hover:bg-[#071534] transition-all duration-300 cursor-pointer"
          />
          <FaInstagram
            className="text-white bg-transparent border border-[#4881FF] rounded-md p-2 text-[32px] 
              hover:border-none hover:bg-[#071534] transition-all duration-300 cursor-pointer"
          />
          <FaYoutube
            className="text-white bg-transparent border border-[#4881FF] rounded-md p-2 text-[32px] 
              hover:border-none hover:bg-[#071534] transition-all duration-300 cursor-pointer"
          />
          <FaLinkedin
            className="text-white bg-transparent border border-[#4881FF] rounded-md p-2 text-[32px] 
              hover:border-none hover:bg-[#071534] transition-all duration-300 cursor-pointer"
          />
        </div>
      </div>
    </section>

    </>
  );
}

export default Recomune;
