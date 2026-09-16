import React from 'react'
import image from '../assets/image.jpg'
import './header.css'
import logo from '../assets/Logo.png'
import user from '../assets/user.png'
import circle from '../assets/circle.png'
import { useState, useEffect } from 'react'
import business from '../assets/business.png'
import elearning from '../assets/e-learning.png'
import travel from '../assets/travel.png'
import finance from '../assets/finance.png'
import bitcoin from '../assets/bitcoin.png'
import technology from '../assets/technology.png'
import service from '../assets/Insurance.png'
import backgroundVideo from '../assets/image.mp4'
import telecom from '../assets/telecom.png'
import card from '../assets/service.jpg'
import investors from '../assets/investors.png'
import icon from '../assets/icon.png'
import consumers from '../assets/consumers.png'
import businessimg from '../assets/business91.png'
import swipe from '../assets/swipe.png'
import About from '../assets/About.png'
import ebix from '../assets/ebix.jpg'
import youtube from '../assets/youtube.png'
import arrow from '../assets/arrow.png'
import employees from '../assets/employees.png'
import residential from '../assets/residential.png'
import globe from '../assets/globe.png'
import award from '../assets/award.png'
import winner from '../assets/trophy.png'
import Testimonial from './Testimonial.jsx'
import Mobile from '../assets/Mobile.png'
import checkmark from '../assets/checkmark.png'
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import coin from '../assets/coin.png'
import { IoBusinessSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { Contact } from 'lucide-react'
import contact from '../assets/contact.jpg'
import { FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logos from "../assets/logos.png"
import { IoIosSend } from "react-icons/io";
import taxlogo from '../assets/taxlogo.png'
import { MdCopyright } from "react-icons/md";
import contact91 from "../assets/contact91.jpg"
import menu from "../assets/menu.png"
import sendIcon from '../assets/send.png'
import AirIndia from '../assets/AirIndia.png'
import Airtel from '../assets/Airtel.png'
import asian from '../assets/asian.jpg'
import carrier from '../assets/carrier.png'
import ICIC from '../assets/ICIC.png'
import HDFC from '../assets/HDFC.png'
import hp from '../assets/hp.png'
import Kotak from '../assets/Kotak.png'
import LIC from '../assets/LIC.png'
import mahindra from '../assets/mahindra.png'
import Samsung from '../assets/Samsung.jpg'
import Sony from '../assets/Sony.png'
import standardchartered from '../assets/standardchartered.png'
import TheTimes from '../assets/TheTimes.png'
import BBC from '../assets/BBC.jpg'
import MotherDiary from '../assets/MotherDiary.jpg'
import app from '../assets/app.jpg'
import monument from '../assets/monuments.svg'
import { MdOutlineArrowRight } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import phoneapp from "../assets/phoneapp.jpg"

import { BsArrowRightCircleFill } from "react-icons/bs";
import { CgPlayButtonO } from "react-icons/cg";
import  play  from "../assets/play.png";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { PiDownloadSimple } from "react-icons/pi";
import { Globe } from "@/components/ui/globe"
import { FaGlobeAmericas } from "react-icons/fa";
import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { FaYoutube } from "react-icons/fa";
import train from '../assets/train.png'



function Header() {

  const [isClicked, setClicked] = useState(false);
  const [footerOpen, setFooterOpen] = useState({
    discover: false,
    investors: false,
    consumer: false,
    business: false,
    ppi: false,
  });
  const [mobileOpen, setMobileOpen] = useState({
    discover: false,
    company: false,
    services: false,
  });
  const [activeMobileItem, setActiveMobileItem] = useState('home');
  const toggleFooterSection = (section) => {
    setFooterOpen((current) => ({ ...current, [section]: !current[section] }));
  };
  const toggleMobileSection = (section) => {
    setMobileOpen((current) => ({ ...current, [section]: !current[section] }));
  };
  const imageprop = {
     backgroundImage: `url(${image})`,
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     position: 'relative',
     overflow: 'hidden',
  }

  const Herobtnitems = [
    "Ebix Cash",
    "Investors",
    "Consumers",
    "Business"
  ];

  let [btnitems, setBtnitems] = React.useState(Herobtnitems[0]);
  const serviceTabs = [
    { label: 'Investors', accent: 'linear-gradient(135deg, #0635e1 0%, #01287c 100%)', shadow: '0 10px 30px rgba(1, 40, 124, 0.35)' },
    { label: 'Consumers', accent: 'linear-gradient(135deg, #057d03 0%, #0f560b 100%)', shadow: '0 10px 30px rgba(15, 86, 11, 0.35)' },
    { label: 'Businesses', accent: 'linear-gradient(135deg, #5c007e 0%, #450655f8 100%)', shadow: '0 10px 30px rgba(69, 6, 85, 0.35)' },
  ];
  const [activeTab, setActiveTab] = React.useState(serviceTabs[0].label);
  const [hoveredTab, setHoveredTab] = React.useState(serviceTabs[0].label);
  const [isWatchVideoOpen, setIsWatchVideoOpen] = React.useState(false);
  const statsRef = React.useRef(null);
  const [statValues, setStatValues] = React.useState([0, 0, 0, 0, 0]);
  const displayedTab = hoveredTab || activeTab;
  const activeIndex = serviceTabs.findIndex((tab) => tab.label === displayedTab);
  const sliderStyle = {
    transform: `translateX(${activeIndex * 100}%)`,
    width: 'calc((100% - 12px) / 3)',
  };
  const companyLogos = [
    { src: AirIndia, alt: 'Air India', width: '70px', height: '40px' },
    { src: Airtel, alt: 'Airtel', width: '70px', height: '40px' },
    { src: asian, alt: 'Asian Paints', width: '60px', height: '40px' },
    { src: carrier, alt: 'Carrier', width: '70px', height: '40px' },
    { src: ICIC, alt: 'ICIC Bank', width: '100px', height: '30px' },
    { src: HDFC, alt: 'HDFC Bank', width: '140px', height: '30px' },
    { src: hp, alt: 'HP', width: '70px', height: '40px' },
    { src: Kotak, alt: 'Kotak', width: '100px', height: '40px' },
    { src: LIC, alt: 'LIC', width: '80px', height: '40px' },
    { src: mahindra, alt: 'Mahindra', width: '80px', height: '40px' },
    { src: Samsung, alt: 'Samsung', width: '120px', height: '40px' },
    { src: Sony, alt: 'Sony', width: '70px', height: '40px' },
    { src: standardchartered, alt: 'Standard Chartered', width: '80px', height: '40px' },
    { src: TheTimes, alt: 'The Times of India', width: '80px', height: '40px' },
    { src: BBC, alt: 'BBC', width: '100px', height: '40px' },
    { src: MotherDiary, alt: 'Mother Dairy', width: '70px', height: '40px' },
  ];
  const headerCards = [
    { image: business, label: 'FinTech' },
    { image: elearning, label: 'E-Learning' },
    { image: travel, label: 'Travel' },
    { image: finance, label: 'Finance' },
    { image: bitcoin, label: 'Forex' },
    { image: technology, label: 'Business' },
    { image: service, label: 'Insurance' },
    { image: telecom, label: 'Telecom' },
  ];

  useEffect( () => {
    let index = 0;
    const interval = setInterval(() => {
      setBtnitems(Herobtnitems[index]);
      index = (index + 1) % Herobtnitems.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = serviceTabs.findIndex((tab) => tab.label === current);
        return serviceTabs[(currentIndex + 1) % serviceTabs.length].label;
      });
      setHoveredTab((current) => {
        if (!current) return serviceTabs[0].label;
        const currentIndex = serviceTabs.findIndex((tab) => tab.label === current);
        return serviceTabs[(currentIndex + 1) % serviceTabs.length].label;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const statsElement = statsRef.current;
    if (!statsElement) return undefined;

    const targets = [450, 8, 1, 8, 20];
    let animationFrame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        cancelAnimationFrame(animationFrame);
        setStatValues([0, 0, 0, 0, 0]);
        return;
      }

      const startTime = performance.now();
      const animateStats = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / 1400, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setStatValues(targets.map((target) => Math.round(target * easedProgress)));

        if (progress < 1) animationFrame = requestAnimationFrame(animateStats);
      };

      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(animateStats);
    }, { threshold: 0.35 });

    observer.observe(statsElement);
    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, []);

 
  
  return (
     
     <div>
      <div className="container min-w-screen">
        <div className="w-full animate-marqee border-b-2 border-blue-600">
        <div className="marqee-content">
          <p className='font-semibold text-[15px]'>Important Update: Download the latest EbixCash Wallet &amp;
            Payments App to use seamless &amp; secure UPI services.
            Update now for hassle-free payments. App available for Android &amp; iOS devices.
          </p>
          <p className='font-semibold text-[15px]'>Important Update: Download the latest EbixCash Wallet &amp;
            Payments App to use seamless &amp; secure UPI services.
            Update now for hassle-free payments. App available for Android &amp; iOS devices.
          </p>
        </div>
      </div>
      
      <div className="w-full h-140 md:h-170 flex justify-center" style={imageprop}>
        <div
          className="animated-blue-circles"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(6, 1, 78, 0.8)',
            boxShadow: 'inset 0 0 80px rgba(0, 213, 255, 0.2)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        ></div>
    
        <nav className="w-full md:w-5xl relative h-15 md:h-20 flex gap-8 mt-0 md:mt-7 px-0 md:px-10  md:rounded-xl p-1 md:p-3 bg-white flex  justify-between" style={{zIndex: 40}}>
            <div className="logo flex mb-[5px]">
                  <img src={logo} alt="logo" className="ml-5 md:ml-0" style={{width: '120px'}}/>
            </div>
    
            <div className="navbar-items hidden md:flex flex justify-center items-center flex-start  w-[30rem] ">
              <ul className='flex justify-content items-center gap-x-15 font-semibold ' >
                <li className="bg-blue-900  rounded-2xl px-6 py-1 text-white  flex flex-col" style={{ backgroundImage: `linear-gradient(135deg, #0635e1 0%, #01287c 100%)`}}>Home<span className="hidden absolute w-[400px] h-[200px] rounded-2xl bg-white mt-10 left-0 z-20">Hi, John</span></li> 
                <li className="bg-blue-900 rounded-2xl px-6 py-1 text-white  flex flex-col " style={{ backgroundImage: `linear-gradient(135deg, #0635e1 0%, #01287c 100%)`}}>Discover</li>
                <li className="bg-blue-900 rounded-2xl px-6 py-1 text-white  flex flex-col " style={{ backgroundImage: `linear-gradient(135deg, #0635e1 0%, #01287c 100%)`}}>Company</li>
                <li className="bg-blue-900 rounded-2xl px-6 py-1 text-white  flex flex-col " style={{ backgroundImage: `linear-gradient(135deg, #0635e1 0%, #01287c 100%)`}}>Services</li>
              </ul>
            </div>

            <div className="hidden md:flex">
              <ul className='flex gap-4 navbar-user-items gap-x-6'>
                <li ><img src={user} alt="User" className="m-2" style={{width: '40px'}}/></li>
                <li><img src={circle} alt="logo" className="m-2" style={{width: '40px'}}/></li>
              </ul>
            </div>

            <div className="w-8 h-8 absolute right-8 mt-2 md:hidden z-10 ">
              {
                isClicked ? <div className="text-3xl font-bold" onClick={() => setClicked(false)}>X</div> : <img src={menu} alt="menu" onClick={() => setClicked(true)} />
              }
               <div className={`${isClicked ? 'block' : 'hidden'} w-[100vw] h-[100vh] bg-white absolute z-58 top-0 right-[-200px]` }>
                  <div>
                    <div className="text-3xl font-bold absolute w-full h-10 left-60 top-0  " onClick={() => setClicked(false)}>X</div>
                  <ul className="flex flex-col text-[14px] mt-10 " style={{fontFamily: "DM Sans"}}>
                    <li className={`mobile-menu-item ${activeMobileItem === 'home' ? 'active' : ''} flex items-center justify-between border-b-[0.1px] border-blue-400 md:border-none p-2`} onClick={() => setActiveMobileItem('home')}>
                    <p className="font-medium text-[17px] md:text-[15px] ">Home</p></li>
                   
                     <li className={`mobile-menu-item ${activeMobileItem === 'discover' ? 'active' : ''} flex items-center justify-between border-b-[0.1px] border-blue-400 md:border-none p-2`} onClick={() => setActiveMobileItem('discover')}>
                    <p className="font-medium text-[17px] md:text-[15px]">Discover</p>
                    <button type="button" className="block md:hidden text-[24px] font-light leading-none right-45 absolute" onClick={() => toggleMobileSection('discover')}>
                     {mobileOpen.discover ? 'x' : '>'}
                    </button>
                   </li>
                   <div className={`${mobileOpen.discover ? 'flex' : 'hidden'} md:flex flex-col gap-2 text-[14px] mt-2`}>
                    <li className="mobile-menu-item pl-2">Introduction</li>
                    <li className="mobile-menu-item pl-2">Market Overview</li>
                    <li className="mobile-menu-item pl-2">Our Strength</li>
                    <li className="mobile-menu-item pl-2">Global Offices</li>
                    <li className="mobile-menu-item pl-2">Leadership</li>
                    </div>
         
                    
                     <li className={`mobile-menu-item ${activeMobileItem === 'company' ? 'active' : ''} flex items-center justify-between border-b-[0.1px] border-blue-400 md:border-none p-2`} onClick={() => setActiveMobileItem('company')}>
                    <p className="font-medium text-[17px] md:text-[15px]">Company</p>
                    <button type="button" className="block md:hidden text-[24px] font-light leading-none  right-45 absolute" onClick={() => toggleMobileSection('company')}>
                      {mobileOpen.company ? 'x' : '>'}
                    </button>
                  </li>
                    <div className={`${mobileOpen.company ? 'flex' : 'hidden'} md:flex flex-col gap-2 text-[14px]`}>
                    <li className="mobile-menu-item pl-2">Legal Documents</li>
                    <li className="mobile-menu-item pl-2">FAQs</li>
                    <li className="mobile-menu-item pl-2">Terms & Conditions</li>
                    <li className="mobile-menu-item pl-2">Privacy Policy</li>
                    <li className="mobile-menu-item pl-2">Code of Conduct</li>
                    <li className="mobile-menu-item pl-2">Contact Us</li>
                    <li className="mobile-menu-item pl-2">Complaint Status</li>
                    <li className="mobile-menu-item pl-2">Media & News</li>
                    <li className="mobile-menu-item pl-2">Acts</li>
                    <li className="mobile-menu-item pl-2">Find Our Agents</li>
                    </div>

                    <li className={`mobile-menu-item ${activeMobileItem === 'services' ? 'active' : ''} flex items-center justify-between border-b-[0.1px] border-blue-400 md:border-none p-2`} onClick={() => setActiveMobileItem('services')}>
                    <p className="font-medium text-[17px] md:text-[15px]">Services</p>
                    <button type="button" className="block md:hidden text-[24px] font-light leading-none  right-45 absolute" onClick={() => toggleMobileSection('services')}>
                      {mobileOpen.services ? 'x' : '>'}
                    </button>
                    </li>
                    <div className={`${mobileOpen.services ? 'flex' : 'hidden'} md:flex flex-col gap-2 text-[14px]`}>
                    <li className="mobile-menu-item pl-2">Ebix for Investors</li>
                    <li className="mobile-menu-item pl-2">Ebix for Consumers</li>
                    <li className="mobile-menu-item pl-2">Ebix for Businesses</li> 
                    </div>

                  </ul>
               </div>
            </div>
            </div>
        </nav>

        <div className="absolute top-30 md:top-40 text-center flex justify-center items-center flex-col" style={{fontFamily: "DM Sans", zIndex: 10}}>
          <div className="w-[250px] md:w-[300px] mt-[-20px] mt-0 mb-2 rounded-full m-auto py-1 text-white  text-[12px] md:text-sm border-[0.2px] border-white" >
          <span 
                  className="glowing-dot" 
                  style={{
                    backgroundColor: "#00D4FF",
                    boxShadow: `0 0 10px #00D4FF, 0 0 20px #00D4FF`
                  }}
                ></span>Enough for every happiness</div>
          <h1 className='reveal-on-load flex justify-center items-center w-[calc(100vw-2rem)] max-w-[1200px] mt-5 md:mt-7 text-[28px] md:text-[46px] text-blue-200 whitespace-normal leading-[1.2]' style={{fontFamily: "Space Grotesk", fontWeight: `lighter`, lineHeight: 1.2 }}>India’s Largest End-to-End Financial Exchange</h1>
          <p className="reveal-on-load mt-2 md:mt-0  text-[8px] md:text-xl  text-blue-100 text-nowrap md:text-nowrap font-lighter " style={{fontFamily: "DM Sans"}} >Powering payments, travel, forex, remittance,
             and financial technology through a vast <br></br> phygital network of 650,000+ outlets across India.
          </p>

          <div className="reveal-on-load flex gap-4 justify-center mt-5 md:mt-4 ">
              <button className="tracking-wider border-b-2 border-white text-nowrap italic text-center rounded-4xl herobtn font-bold text-white w-40 md:w-48">
                {btnitems}
              </button>
              <button className="flex tracking-wide text-nowrap text-center font-semibold px-5 py-2 rounded-4xl bg-white outline-offset-8 outline-amber-800">Explore<MdOutlineArrowRight size="1.6rem"/></button>
          </div>
          
          <div>
          </div>
          
          <div className="reveal-on-load w-full max-w-[1200px] h-[170px] rounded-2xl m-auto movingCards flex items-center overflow-hidden mt-[12px]" style={{zIndex: 10}}>
            <div className="movingCards-track">
              {[0, 1].map((group) => (
                <div className="movingCards-group" key={group} aria-hidden={group === 1}>
                  {headerCards.map((card, index) => (
                    <div
                      className="bg-blue-800 border-[0.1px] border-blue-400 rounded-xl w-40 h-22 md:h-25 gradient-border px-4 flex-shrink-0 bg-contain bg-no-repeat bg-center"
                      style={{backgroundImage: `url(${card.image})`}}
                      key={`${group}-${card.label}-${index}`}
                    >
                      <span className="cardtext">{card.label}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
         <div className="mt-7 md:mt-20 text-center text-blue-100 text-[12px] md:text-[14px]" style={{fontFamily: "DM Sans"}}>We Strengthen India's Biggest Brands </div>
        </div>
       

        
      </div>

      <div className="company continuous-marquee w-full ">
        <div className="company-logos continuous-marquee-track">
          {[0, 1].map((group) => (
            <div className="company-logo-group continuous-marquee-group" key={group} aria-hidden={group === 1}>
              {companyLogos.map((logo, index) => (
                <img
                  key={`${group}-${logo.alt}-${index}`}
                  src={logo.src}
                  alt={group === 1 ? '' : logo.alt}
                  loading="lazy"
                  style={{ width: logo.width, height: logo.height }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      </div>
      

      <div className="w-full mt-10 flex flex-col gap-15">
       <div><p className="text-center top-0  text-4xl md:text-5xl service"  >Ebix <span className="everywhere">Everywhere...</span></p></div>
      <div className="w-[calc(100%-2rem)] max-w-[770px] md:w-[770px] mt-[-60px] md:mt-[-50px] h-auto px-4 py-4 md:py-1 md:px-1 m-auto flex rounded-full border border-blue-600 serviceoptions">
         <div className=" service-slider " style={sliderStyle}></div>
         {serviceTabs.map((tab) => {
          const isActive = activeTab === tab.label;

          return (
            <button
              key={tab.label}
              type="button"
              className={`text-sm service-option ${isActive ? 'active' : ''}`}
              style={isActive ? { background: tab.accent, boxShadow: tab.shadow } : undefined}
              onMouseEnter={() => setHoveredTab(tab.label)}
              onMouseLeave={() => setHoveredTab(activeTab)}
              onClick={() => setActiveTab(tab.label)}
            >
             <p className="text-[12px] md:text-[14px]">{tab.label}</p> 
            </button>
          );
        })}
      </div>

      <div className="relative bg-gray-400 w-full mt-[-40px] md:mt-[-20px] flex justify-center mx-auto">
        <div className="ml-0 mr-0 md:ml-10 md:mr-10 absolute flex flex-col md:flex-row justify-center items-center gap-1 md:gap-8 w-full max-w-[1400px]">
          <div className="m-2 w-[calc(100%-2rem)] max-w-[420px] rounded-xl min-h-[17rem] md:h-[18rem] md:w-[44%] md:min-w-[100px] bg-cover bg-center card-shine investors-shine" style={{ backgroundImage: `linear-gradient(135deg, #0635e1 0%, #01287c 100%)`}}>
            <div className="float-right mt-10 mr-0 text-justify w-[150px]"><img className="" src={investors} /></div>
            <div className="p-6">
              <h2 className="pl-2 text-3xl text-white border-l-2" style={{fontFamily: "Italianno", cursive: 'true'}}>Investors</h2>
              <p className=" mt-3 font-medium text-left text-justify text-white text-[12px] md:text-[13px]" style={{fontFamily: "DM Sans", fontWeight: "normal"}}> Driving sustainable growth through innovation, transparency, and disciplined execution.
              Committed to creating long-term value for our investors and stakeholders.</p>
            </div>
            <div className="mt-[-3px]  md:mt-[-10px]">
              <ul className="border-white flex flex-wrap gap-2 ml-6  text-white text-center font-semibold  text-[12px] ">
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="">Investors Home</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="">Quarterly Results</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="">Leadership<br></br></li>
               <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="">Announcements</li>
                <br></br>
                
              
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[12px]">More Services</li>
              </ul>
              
            </div>
            <button className="float-right mt-[-10px] md:mt-[-2px] mr-7 text-white rotate-180"><img src={swipe} alt="Swipe" className="w-8 md:w-10"/></button>
          </div>

          <div className="m-2 w-[calc(100%-2rem)] max-w-[420px] rounded-xl min-h-[17rem] md:w-[44%] md:min-w-[300px] card-shine consumers-shine" style={{ backgroundImage: `linear-gradient(135deg, #057d03 0%, #0f560b 100%)`}}>
           <div className="float-right mt-10 mb-0 text-justify w-[150px]"><img src={consumers} /></div>
            <div className="p-6">
              <h2 className=" pl-2 text-3xl text-white border-l-2" style={{fontFamily: "Italianno", cursive: 'true'}}>Consumers</h2>
              <p className=" mt-3 font-medium text-left text-justify text-white text-[12px] md:text-[13px]" style={{fontFamily: "DM Sans", fontWeight: "normal"}}>Everything You Need. One Trusted Platform.
               From travel and payments to insurance and healthcare, experience smarter everyday services in one seamless ecosystem.</p>
            </div>
            <div className=" mt-[-4px] md:mt-[-13px]">
              <ul className="flex flex-wrap gap-2 ml-6 font-bold text-white investors ">
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[12px]">Transport</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[12px]">Hotels & Flight</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[12px]">Insurance</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[12px]">Bill Payment</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[12px]">Money Transfer</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[12px]">Forex </li>
                <div style={{ width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[12px]">More Services</li>
              </ul>
            </div>
            <button className="float-right mt-[-10px] mr-7 text-white rotate-180"><img src={swipe} alt="Swipe" className="w-8 md:w-10"/></button>
          </div>

          <div className="m-2 w-[calc(100%-2rem)] max-w-[420px] rounded-xl min-h-[17rem] md:w-[45%] md:min-w-[300px] card-shine business-shine" style={{ backgroundImage: `linear-gradient(135deg, #5c007e 0%, #450655f8 100%)`}}>
            <div className="float-right mt-8 mb-0 text-justify w-[128px]"><img className="max-w-full h-auto" src={businessimg} /></div>
            <div className="p-6">
              <h2 className="pl-2 text-3xl text-white border-l-2" style={{fontFamily: "Italianno", cursive: 'true'}}>Business</h2>
              <p className=" mt-3 font-medium text-left text-justify text-white text-[12px] md:text-[13px]" style={{fontFamily: "DM Sans", fontWeight: "normal"}}>Powering Businesses with Intelligent Digital Solutions.
              Payments, travel, fintech and telecom, help enterprises simplify operations, accelerate growth, and good customer experiences.</p>
            </div>
            <div className=" mt-[-14px] md:mt-[-14px]">
              <ul className="flex flex-wrap gap-2 ml-6 font-bold text-white investors ">
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[12px]">Payment Solutions</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[12px]">Travel Services</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[12px]">Financial Technology</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[12px]">More Services</li>
              </ul>
            </div>
            <button className="float-right mt-[-4px] mr-7 text-white rotate-180"><img src={swipe} alt="Swipe" className="w-8 md:w-10"/></button>
          </div>
        </div>

         </div>
       </div>
    

    <section className="w-full h-[80rem] md:h-[40rem] relative mt-[58rem] md:mt-[370px] flex flex-col ">
     
    <div className=" gap-10 absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${About})` }}>
    <div className="flex flex-col-reverse md:flex-row">   
      <div className="w-[26rem] md:w-[28rem] mt-30 md:mt-16 mx-auto ">
        <div className="relative m-3 md:m-0 gap-10">
          <img className=" rounded-xl h-66" src={ebix} style={{width: `36rem`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}/>
        </div>
     
     
     <div className="relative flex flex-nowrap  top-0 md:top-7  mt-10 rounded-xl text-[13px] py-2 px-4 bg-blue-100 m-3 md:m-0 " style={{fontFamily: "DM Sans"}}>
      <span className="border-r flex justify-center bg-blue-100 w-[12rem] h-[3rem] white bottom-75 text-center  text-black  px-1 py-1" ><img className="mr-2" src={employees} style={{width: `26px`, height: `26px`}} />10,431<br></br> Employees</span>
      <span className="border-r flex justify-center  bg-blue-100 w-[12rem] h-[3rem] top-20 left-10 text-center  text-black px-1 py-1" ><img className="mr-2" src={residential} style={{width: `26px`, height: `26px`}} /> 22+ years<br></br> in Business</span>
      <span className=" flex justify-center  bg-blue-100 w-[12rem] h-[3rem] top-20 left-10 text-center  text-black px-1 py-1" ><img className="mr-2" src={globe} style={{width: `25px`, height: `25px`}} /> 196 countries<br></br>offices</span>
     </div>

    </div>
  
    
    <div className="w-full md:w-[50rem] m-0 mt-6 md:m-10 md:mt-8 aboutheading">
    <h1 className="  md:p-0 text-blue-400 text-5xl text-center" style={{fontFamily: "DM Sans", fontWeight: "400"}}>About EbixCash</h1>
    <div className="w-90 md:w-full  mx-auto bg-white border-t border-white "></div>
    <ul className="aboutdescription text-xl md:text-3xl pl-4 pr-4 pt-1 md:p-0 mt-[-130px] text-white">
      <li>EbixCash, has today emerged as India’s largest end-to-end financial exchange, that includes a last mile network of over 650,000 physical distribution outlets besides an omni-channel online digital platform. 
           EbixCash converges front-end distribution channels with back-end technology functions, across the payments solutions, travel, insurance and financial technology industries.</li>
      <li className="hidden md:block">The EbixCash Exchange employs more than 10,431 employees across different sectors with 196 offices across the Asia Pacific region. 
          The leadership team of the Company is ingrained in the ethos of Customer First, a genuine need to excel, a bias for action and delivering results.</li>
      <li>With a clear leadership position in the areas of international remittance and foreign exchange, as well as leadership positions in other areas such as digital payments solutions, domestic money remittance, prepaid cards, travel, insurance and corporate & incentive solutions, EbixCash, is pioneering convergence end-to-end play.
         EbixCash portfolio of products can be accessed digitally anywhere as well as across its distribution outlets spread over 4,000 cities and 75,000 villages.</li>

      <li>EbixCash business encompasses four primary business segments - (1) Payments Solutions (2) Travel (3) Financial Technologies (4) BPO and Startups.</li>
      <div className="mt-5 md:mt-2 flex gap-6 text-[14px] mx-auto md:m-0">
      <button type="button" onClick={() => setIsWatchVideoOpen(true)} className="border flex px-7 py-1 bg-white text-black rounded-full" style={{boxShadow: `-3px 4px 0px oklch(62.3% 0.214 259.815)`, fontFamily: "Sans-serif"}} > Watch Now <img className="ml-2" src={youtube} width={22} height={10}/></button>
      <button className="border flex px-5 py-1 bg-white text-black rounded-full " style={{fontFamily: "Sans-serif"}}> Explore Now <img className="ml-2" src={arrow} width={22} height={10}/></button>
      </div>

      {isWatchVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4" onClick={() => setIsWatchVideoOpen(false)}>
          <div className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-black shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              aria-label="Close video"
              className="absolute right-3 top-2 z-10 text-2xl font-bold text-white"
              onClick={() => setIsWatchVideoOpen(false)}
            >
              &times;
            </button>
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/Hw2o2PQWAt8?si=6aVGcnQS_sX5E-tP"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      )}
    
      <div className="absolute ml-[80px] mt-110 md:ml-[35rem] md:mt-62 mx-auto text-justify  ">
  
      <RatingBadge rating={5} title="The Economic Times Recognizes" subtitle="EbixCash as the Best Brand 2020-21"  />
     
      </div>
     
    </ul>
    </div>

   
    </div>


    <div ref={statsRef} className="w-full mx-auto  ">
      <div  className="W-full mt-5 md:mt-0 m-10 ">
        <ul className=" grid  grid-cols-2  w-full h-[10rem] md:flex  justify-center items-center gap-5 md:gap-20 text-white text-wrap "  style={{fontFamily: "DM Sans"}} >
          <li className='flex flex-col text-center '><span className="text-4xl md:text-5xl " style={{fontFamily: "DM Sans"}}>{statValues[0]}+</span>Leanding and Wealth Solutions Installed</li>
          <li className='flex flex-col text-center'><span className="text-4xl md:text-5xl " style={{fontFamily: "DM Sans"}}>{statValues[1]} M+</span>Annual Travel Bookings</li>
          <li className='flex flex-col text-center'><span className="text-4xl md:text-5xl " style={{fontFamily: "DM Sans"}}>{statValues[2]} M+</span>Health Content Users</li>
          <li className='flex flex-col text-center'><span className="text-4xl md:text-5xl " style={{fontFamily: "DM Sans"}}>${statValues[3]} B+</span>Annual Money Remittance Managed</li>
          <li className='flex flex-col text-center hidden  md:flex'><span className="text-4xl md:text-5xl " style={{fontFamily: "DM Sans"}}>{statValues[4]} M+</span>Annual Compliance Images Processed</li>
          

        </ul>
      </div>
    </div>

    </div>
    </section>

    <section >
      <p className="[letter-spacing:0.02cm]  text-center text-4xl md:text-5xl text-blue-900 font-semibold mb-1 md:mb-3 mt-10 md:mt-16" style={{fontFamily: "DM Sans"}}>Client Endorsements </p>
      <Testimonial />
    
      
    </section>

    <section className="mt-[60px] md:mt-0" >
      <div className="border-b-4 border-blue-400 flex flex-col md:flex-row absolute w-full h-[37rem] md:h-[20rem] bg-blue-800 gap-10" style={{
            backgroundImage: `linear-gradient(0deg, rgba(3, 29, 125, 0.68) 0%, rgba(3, 28, 122, 0.68) 100%), url(${phoneapp})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundBlendMode: 'overlay',
            minHeight: '20rem',
          }} >
        <div className="relative w-[25rem] md:w-[70rem] ">
          <img className="relative bottom-35 md:bottom-20 left-8 md:left-20 z-40 " src={Mobile}/>
        </div>
       
        
        
        <div  className=" text-white w-[100vw] md:w-full ml-0 mt-0 md:mt-[35px] md:ml-[-5rem] md:mt-10  p-2 md:p-0  ">
          <p className="font-semibold text-[21px] md:text-[34px] mt-[-170px] md:mt-[-6px] text-center md:text-left" style={{fontFamily: "DM Sans"}}>EbixCash - UPI, Wallet and Payments</p>
          <p className="pl-2 pr-2 md:pl-0 md:pr-0  mt-[1px] text-[14px] md:text-[14px] mt-0 text-white text-justify text-center md:text-left" style={{fontFamily: "DM Sans"}}>One App. Every Essential. From instant payments and seamless money transfers to forex, gift cards, and travel bookings, EbixCash<br className="hidden md:block"></br> brings all your everyday financial services together in one secure, intelligent experience.</p>
          <ul className="mt-1 pl-2 md:pl-0 " style={{fontFamily: "DM Sans"}}>
            <li className="flex text-[14px]
             mb-2" ><img src={icon} className="w-5 h-5 mr-1"/> Instant UPI Payments & Money Transfers</li>
            <li className="flex text-[14px] mb-2"><img src={icon} className="w-5 h-5 mr-1"/> Travel & Forex at Your Fingertips</li>
            <li className="flex text-[14px] mb-2"><img src={icon} className="w-5 h-5 mr-1"/> Rewards, Gift Cards & More</li>
            <li className=" flex flex-col md:flex-row mt-5 md:mx-auto text-center text-[14px]" >Download Ebix App on Your Phone !
            <div className="relative flex ml-0 md:ml-7 top-[-10px] gap-7 mt-6 md:mt-0 px-3 md:px-0 justify-center items-center">
              <div className="flex border-2 border-blue-400 rounded-full px-3 md:px-4 py-2 bg-white" ><FaApple size="1.5rem" color="rgb(0, 36, 215)"/><p className=" ml-1 text-[12px] md:text-[14px] font-bold py-1 text-blue-800">Get on Appstore</p></div>
              <div className="flex border-2 border-blue-400 rounded-full px-3 md:px-4 py-2 bg-white" ><BiLogoPlayStore size="1.5rem" color="rgb(0, 36, 215)"/><p className=" ml-1 text-[12px] md:text-[14px] font-bold py-1 text-blue-800">Get on Playstore</p></div>
            </div>
            </li>
            <li>
              <div className="mt-2 md:mt-[-2px] text-[14px] flex flex-row gap-2 justify-center ">
                     <div className="flex gap-1">3.4 K<MdOutlineStarPurple500 size="1rem" /> Ratings</div>
                     <p>&#x7C;</p>
                     <div className="flex gap-1">100+ K<PiDownloadSimple  size="1rem" /> Downloads</div>
                     </div>
            </li>
         


            
          </ul> 

        </div>



      </div>


    </section>

    <section >
       <div className="absolute mt-150 md:mt-90 w-full h-[85rem] flex flex-col md:flex-row md:flex-row-reverse">

        <div className="flex flex-col md:relative mt-[-30px] md:mt-20 ml-5 md:ml-20">
          <div>
            <p className="mt-8 md:mt-[-20px] flex font-medium text-[50px] text-blue-900" style={{fontFamily: "Space Grotesk", letterSpacing: `-0.01cm` }}>Contact Us</p>
            <p className="text-[15px]  mt-[-15px] pl-1" style={{fontFamily: "Space Grotesk", letterSpacing: `-0.01cm` }}>Write to us and we'll get back to you soon. Promise!</p>
          </div>
          
          <div>
            <form className='w-full md:w-[40rem] h-[45rem] rounded-2xl mt-[30px] md:mt-[-40px] flex justify-center items-center pl-1'>
              <div className='flex w-full md:w-[40rem] h-[50rem] md:h-[40rem] pt-1 flex-nowrap flex-col gap-6  md:gap-8 mx-auto' >
              
              <div className='flex flex-col gap-4 mt-6' style={{fontFamily: "DM Sans"}}>
              <label className="relative font-medium">First Name<sup className="absolute mt-6 text-[15px] text-red-800">*</sup><br className="block md:hidden"></br><input
              type="text"
              name="firstName"
              id="firstName"
              required
              className=" bg-blue-100 rounded w-[23rem] md:w-[21rem] md:w-1/2 h-8  px-1  ml-0 md:ml-5 border-b-2 border-blue-900"
              /></label>
              

              <label className='relative font-medium'>Last Name<sup className="absolute mt-6 text-[15px] text-red-800">*</sup><br className="block md:hidden"></br><input
              type="text"
              name="LastName"
              id="LastName"
              required
              className="bg-blue-100 rounded w-[23rem] md:w-[21rem] md:w-1/2 h-8  px-1  ml-0 md:ml-5 border-b-2 border-blue-900"
              /></label>
              
              
              </div>

              <div className='flex flex-col gap-4 mt-[-8px]'style={{fontFamily: "DM Sans"}}>
              <label className='relative font-medium'>Phone<sup className="absolute mt-6 text-[15px] text-red-800">*</sup><br className="block md:hidden"></br><input
              type="number"
              name="mobile"
              id="mobile"
              required
              className="bg-blue-100 rounded w-[23rem] md:w-[21rem] md:w-1/2 h-8  px-1  ml-0 md:ml-13 border-b-2 border-blue-900"
              /></label>
              

              <label className='relative font-medium' style={{fontFamily: "DM Sans"}}>Category<sup className="absolute mt-6 text-[15px] text-red-800">*</sup><br className="block md:hidden"></br><select className="bg-blue-100 rounded w-[23rem] md:w-[21rem] md:w-1/2 h-8  px-1  ml-0 md:ml-7 border-b-2 border-blue-900">
                <option value="Jobs"></option>
                <option value="Jobs">Jobs</option>
                <option value="Complaints">Complaints</option>
                <option value="Offers">Offers</option>
              </select></label>
              
              

              </div>
             
              <div className='flex flex-col gap-4 mt-[-8px]'>
              <label className='relative font-medium' style={{fontFamily: "DM Sans"}}>Email<sup className="absolute mt-6 text-[15px] text-red-800">*</sup><br className="block md:hidden"></br><input
              type="email"
              name="email"
              id="email"
              required
              className="bg-blue-100 rounded w-[23rem] md:w-[21rem] md:w-1/2 h-8  px-1  ml-0 md:ml-14 border-b-2  border-blue-900"
              /></label>
             

              <label className='relative font-medium' style={{fontFamily: "DM Sans"}}>Country<sup className="absolute mt-6 text-[15px] text-red-800">*</sup><br className="block md:hidden"></br><select className="bg-blue-100 rounded w-[23rem] md:w-[21rem] md:w-1/2 h-8  px-1  ml-0 md:ml-9 border-b-2 border-blue-900">
                <option value="Jobs"></option>
                <option value="Jobs">India</option>
                <option value="Complaints">USA</option>
                <option value="Offers">America</option>
              </select></label>
              

              </div>

              <div className='flex  flex-col mt-[-8px] '>
              <label className='relative font-medium' style={{fontFamily: "DM Sans"}}>Product<sup className="absolute mt-6 text-[15px] text-red-800">*</sup><br className="block md:hidden"></br><select className="bg-blue-100 rounded h-8 px-1  ml-0 md:ml-5 w-[23rem] md:w-[21rem] md:w-1/2 md:ml-9 border-b-2 border-blue-900">
                <option value="Jobs"></option>
                <option value="Jobs">ATM</option>
                <option value="Complaints">Payment</option>
                <option value="Offers">Travel</option>
              </select></label>
              
              </div>

              <div  className='flex  flex-col gap-1  h-[18rem] mt-[-10px]'>
                <label className='relative font-medium' style={{fontFamily: "DM Sans"}}>Query<sup className="absolute mt-6 text-[15px] text-red-800">*</sup><br className="block md:hidden"></br><div>
                <textarea
                  name="query"
                  rows={3}
                  cols={50}
                  className="bg-blue-100 rounded px-1 w-[20rem] md:w-[20rem]"
                />
                </div></label>
               

                <label className='relative font-medium' style={{fontFamily: "DM Sans"}}>Additional Information<br className="block md:hidden"></br><div>
                <textarea rows={3} cols={10} className="bg-blue-100 rounded h-13 md:h-10 px-1 w-[21rem] md:w-[26rem]"/>
                </div>  </label>
                           
              </div>
              
              <div className="left-10 mb-50 "><button className=" rounded-full px-5 py-2 text-black bg-yellow-400 font-medium text-[13px]" style={{fontFamily: "DM Sans"}}>Submit Request</button></div>
              </div>
            </form>  
          </div> 
        </div>

        <div
          className="mx-auto relative overflow-hidden bg-blue-700 mt-20 w-[25rem] md:w-[28rem] min-h-[40rem] md:h-[45rem] rounded-4xl bg-gradient-to-t from-blue-800 via-blue-700 to-blue-800"
          style={{
            backgroundImage: `linear-gradient(65deg, rgba(10, 34, 114, 0.8), rgba(30, 64, 175, 0.8)), url(${contact91})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >

        <div className="flex flex-col ml-8 mt-7 md:mt-10">
          <p className="text-bolder text-[40px] text-white" style={{fontFamily: "Space Grotesk", letterSpacing: `-0.01cm` }}>Let's Connect</p>
          
          <p className="mt-[-5px] text-bolder text-[12px] text-white" style={{fontFamily: "Space Grotesk"}} >Have a question, project idea, or collaboration in mind? We'd love to hear from you.</p>
          <div className="flex mt-5 md:mt-8"><MdPhone size="1.7rem" className='text-white'/><span className="text-[15px] ml-4 text-white" style={{fontFamily: "Space Grotesk", letterSpacing: `-0.01cm` }} >+ 91 - 120 - 4688400</span></div>
          <div className="flex mt-5  md:mt-8"><IoBusinessSharp size="1.7rem" className='text-white'/><span className="text-[15px] ml-4 text-white" style={{fontFamily: "Space Grotesk", letterSpacing: `-0.01cm` }} >+ 91 - 120 - 2460870</span></div>
          <div className="flex mt-5 md:mt-8"><MdMail size="1.7rem" className='text-white'/><span  className="text-[15px] ml-4 text-white" style={{fontFamily: "Space Grotesk", letterSpacing: `-0.01cm` }}>info@ebixcash.com</span></div>
          <div className="flex mt-5 md:mt-8 "><MdLocationOn size="1.7rem" className='text-white'/><span  className="text-[15px] ml-4 text-white" style={{fontFamily: "Space Grotesk", letterSpacing: `-0.01cm` }}>EbixCash Limited Plot No. 122 & 123, NSEZ,<br></br>Phase - II, Noida - 201305 (Uttar Pradesh)</span></div>
          {/* <div className="w-[13rem] border-t border-blue-200 mt-10 mx-auto" ></div> */}
         
          <div className="flex mt-5 md:mt-8"><FaGlobeAmericas size="1.7rem" className="text-white" /><span className="text-[15px] ml-4 text-white" style={{fontFamily: "Space Grotesk", letterSpacing: `-0.01cm` }}>196 Offices in Multiple Countries <br></br> Singapore, London, Canada, US, Philippines,<br></br> Indonesia, Dubai and India</span></div>
           <Globe className="contact-card-globe" />



        </div>

      

        </div>
        

       </div>
    </section>

    <footer className="w-full h-auto md:h-[49rem] absolute mt-550 md:mt-320 bg-blue-800 bg-gradient-to-t from-blue-600 via-blue-700 to-blue-800" 
          style={{
            backgroundImage: `linear-gradient(95deg, #001e8a 0%, #00287e 100%)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '24rem',
            overflow: 'hidden',
          }}>

     <div className="mt-2 mx-auto flex flex-col md:flex-row" >
          <div className="m-2 md:ml-10 logo flex flex-start flex-col w-full md:w-[100rem]">              
                  <img src={logos} alt="logo" width={190} />
                  <div className="flex-col">
                  <p className="mt-[-27px] ml-4 text-white text-[15px] md:text-[13px] text-bold" style={{fontFamily: "DM Sans"}}>India’s Largest End-to-End Financial Exchanges</p>
                  <p className="mt-[-2px] ml-4 text-white text-[10px] md:text-[8px]  italic"style={{fontFamily: "DM Sans"}}>Powering payments, travel, forex, remittance, and financial technology<br></br> through a vast
                   phygital network of 650,000+ outlets<br></br> across India.</p>
                  </div>
          </div>

          <div className="flex-end ml-2 mr-10 w-full md:w-1/4 mt-5 md:mt-11">
            <p className="mb-3 ml-5 md:ml-3 text-blue-100 text-[15px] " style={{fontFamily: "DM Sans"}}>Subscribe to Newsletter</p>
            <div className="flex ml-5 md:ml-2"><input type="text" placeholder="Enter your email ID" className='w-[18rem] h-[2rem] px-4 bg-white  rounded-full  '/><IoIosSend size="2rem" className="text-white bg-blue-600 rounded-full relative right-7 p-1"/></div>

          </div>
          

     </div>
      <div className="hidden md:block w-[25rem] md:w-[82rem] border-t-[0.1px] border-blue-400 mx-auto mt-10 md:mt-3" ></div> 


    <div className="px-6 md:px-0 mx-auto flex flex-col md:flex-row gap-0 md:gap-18 text-white mt-10 md:mt-5 ">
      
      <div className="">
        <ul className="flex flex-col gap-0 ml-0 md:ml-17 " style={{fontFamily: "DM Sans"}}>
          <li className="flex items-center justify-between border-b-[0.1px] border-blue-400 md:border-none mb-2  p-1 md:p-0">
            <p className="font-medium text-[17px] md:text-[15px]">Discover EbixCash</p>
            <button type="button" className="block md:hidden text-[24px] font-light leading-none" onClick={() => toggleFooterSection('discover')}>
              {footerOpen.discover ? 'x' : '>'}
            </button>
          </li>
          <div className={`${footerOpen.discover ? 'flex' : 'hidden'} md:flex flex-col gap-2 text-[14px]`}>
          <li>Introduction</li>
          <li>Market Overview</li>
          <li>Our Strength</li>
          <li>Global Offices</li>
          <li>Leadership</li>
          </div>
         
        </ul>
      </div>

      <div>
        <ul className=" flex flex-col gap-1 ml-0" style={{fontFamily: "DM Sans"}}>
          <li className="flex items-center justify-between border-b-[0.1px] border-blue-400 md:border-none mb-2 md:mb-1 p-1 md:p-0">
            <p className="font-medium text-[17px]">Investors</p>
            <button type="button" className="block md:hidden text-[24px] font-light leading-none" onClick={() => toggleFooterSection('investors')}>
              {footerOpen.investors ? 'x' : '>'}
            </button>
          </li>
          <div className={`${footerOpen.investors ? 'flex' : 'hidden'} md:flex flex-col gap-2 text-[14px]`}>
          <li>Investor Home</li>
          <li>Key Financial Data</li>
          <li>Quarterly Results</li>
          <li>Announcement</li>
          <li>Corporate Governance</li>
          <li>Leadership</li>
          <li>Contact Information</li>
          </div>

          
        </ul>
      </div>

      <div>
        <ul className="flex flex-col gap-1" style={{fontFamily: "DM Sans"}}>
          <li className="flex items-center justify-between border-b-[0.1px] border-blue-400 md:border-none mb-2 md:mb-1 p-1 md:p-0">
            <p className="font-medium text-[17px] md:text-[15px]">EbixCash for Consumer</p>
            <button type="button" className="block md:hidden text-[24px] font-light leading-none" onClick={() => toggleFooterSection('consumer')}>
              {footerOpen.consumer ? 'x' : '>'}
            </button>
          </li>
          <div className={`${footerOpen.consumer ? 'flex' : 'hidden'} md:flex flex-col gap-2 text-[14px]`}>
          <li>Flights</li>
          <li>Hotels</li>
          <li>Holidays</li>
          <li>Cabs</li>
          <li>Buses</li>
          <li>Forex</li>
          <li>Money Transfer</li>
          <li>Prepaid & Gift Cards</li>
          <li>Bill Payment & Recharges</li>
          </div>
        </ul>
      </div>

      <div>
        <ul className="flex flex-col gap-1" style={{fontFamily: "DM Sans"}}>
          <li className="flex items-center justify-between border-b-[0.1px] border-blue-400 md:border-none mb-2 md:mb-1 p-1 md:p-0">
            <p className="font-medium text-[17px] md:text-[15px]">EbixCash for Business</p>
            <button type="button" className="block md:hidden text-[24px] font-light leading-none" onClick={() => toggleFooterSection('business')}>
              {footerOpen.business ? 'x' : '>'}
            </button>
          </li>
          <div className={`${footerOpen.business ? 'flex' : 'hidden'} md:flex flex-col gap-2 text-[14px]`}>
          <li>Payment Solutions</li>
          <li>Travel Services</li>
          <li>Financial Technology</li>
          <li>Travel Technology</li>
          <li>Bus Exchange Solution</li>
          <li>Telecom Services</li>
          <li>Data Services</li>
          <li>BPO Services</li>
          <li>E-Learning</li>
          <li>Logistic Services</li>
          <li>Insurance Services</li>
          <li>Agent Assisted Mode</li>
          <li>EbixCash Cabs</li>
          </div>
        </ul>
      </div>
      
      <div>
        <ul className="flex flex-col gap-1" style={{fontFamily: "DM Sans"}}>
          <li className="flex items-center justify-between border-b-[0.1px] border-blue-400 md:border-none mb-2 md:mb-1 p-1 md:p-0">
            <p className="font-medium text-[17px] md:text-[15px]">Ebixcash (PPI)</p>
            <button type="button" className="block md:hidden text-[24px] font-light leading-none" onClick={() => toggleFooterSection('ppi')}>
              {footerOpen.ppi ? 'x' : '>'}
            </button>
          </li>
          <div className={`${footerOpen.ppi ? 'flex' : 'hidden'} md:flex flex-col gap-2 text-[14px]`}>
          <li>Legal Documents</li>
          <li>FAQs</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Code of Conduct</li>
          <li>Contact Us</li>
          <li>Complaint Status</li>
          <li>Media & News</li>
          <li>Acts</li>
          <li>Find Our Agents</li>
          </div>
        
        </ul>
      </div>

      <div className="relative flex flex-col justify-center  items-center mr-[10px] mt-5 md:mt-[20px]">
      <ul className="mt-0 md:mt-[-80px]">
        <li><p className="font-medium text-center mb-2 md:ml-1"  style={{fontFamily: "DM Sans"}}>Download our Apps</p></li>
        <div className="flex flex-col gap-2 ">
        <li><div className="mb-2 bg-black rounded"><GooglePlayButton size="lg" className="bg-black" style={{ backgroundColor: '#000' }} /></div></li>
        <li><div className="mb-2 bg-black rounded"><AppStoreButton size="lg" className="bg-black" style={{ backgroundColor: '#000' }} /></div></li>
        <li><div className="mb-4 "><img src={taxlogo} className="w-[10rem] h-[3rem] rounded" /></div></li></div>
      </ul>

       <div><p className="font-medium mt-0 md:mt-2 mb-1 md:mb-2 text-center" style={{fontFamily: "DM Sans"}}>Connect With Us</p></div>
       <div className="flex gap-7 md:gap-4 text-white justify-center items-center mx-auto px-4 py-2 w-[15rem]">
            <div><FaFacebook size="1.5rem"  /></div>
            <div><FaInstagram size="1.5rem" /></div>
            <div><FaLinkedin size="1.5rem" /></div>
            <div><FaXTwitter size="1.5rem" /></div>
            <div><FaYoutube size="1.5rem" /></div>
        </div>
            <div className="flex mt-4 justify-center items-center flex">
        <div className="mb-3 flex text-[14px] text-white" style={{fontFamily: "DM Sans"}}><p><span>&#169;</span> 2025 All rights reserved</p></div>
      </div>
        
     </div>

     </div>
     
      {/* <div className="w-[82rem] border-t-[0.1px] border-blue-100 mx-auto mt-10 md:mt-6" ></div> */}

     

      <div className="w-150 h-20 md:w-full md:h-10">
        <img src={monument} className=" mt-10 md:mt-0 z-10 relative"  />
        <div><img src={train} alt="train" className="train-animation w-60 md:w-80 z-100 absolute bottom-0 left-full" /></div>
      </div>

     

    </footer>



    </div>
  )
}

export default Header








