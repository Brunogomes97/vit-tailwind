import { useState } from 'react';
import {
  Logo,
  HeroGraphics,
  BannerLogos,
  Card1,
  Card2,
  Card3,
  ArrowRight,
  Photo1,
  ItemIcon,
  Photo2,
  Feather,
  Star,
  Sun,
} from './assets';

export function Boldo() {
  const [hover, setHover] = useState({
    feather: false,
    star: false,
    sun: false,
  });

  return (
    <div className="full-container">
      <div
        title="main-section"
        className="flex flex-col bg-darker-blue text-total-white "
      >
        <div
          title="header"
          className="w-[1200px] flex items-center justify-between margin-center  pt-14"
        >
          <img title="logo" src={Logo} />
          <div title="anchors" className="flex items-center ">
            <a className="anchor mr-10">Product</a>
            <a className="anchor mr-10">Service</a>
            <a className="anchor mr-10">About</a>
            <button
              type="button"
              className="base-button bg-total-white  px-10 py-2 text-total-black hover:brightness-50 "
            >
              Log In
            </button>
          </div>
        </div>
        <div title="content" className="pt-16  flex items-center margin-center">
          <div
            title="left-content"
            className="flex flex-col items-start mt-14 mr-36 w-[567px] "
          >
            <h1>Vite & Tailwind Template - Experimental</h1>
            <p>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div title="buttons">
              <button
                type="button"
                className=" base-button py-4 px-14 mr-6 mt-10 bg-light-green text-darker-blue "
              >
                Buy template
              </button>
              <button
                type="button"
                className="base-button py-4 px-14  border-2 border-total-white text-total-white  "
              >
                Explore
              </button>
            </div>
          </div>
          <img title="right-content" src={HeroGraphics} />
        </div>
        <div
          title="footer"
          className="py-12  bg-gradient-to-r  to-transparent margin-center"
        >
          <img title="banner-logos" src={BannerLogos} />
        </div>
      </div>
      <div
        title="service-section"
        className="base-container flex-col bg-total-white pt-20"
      >
        <div title="header-title" className="base-container flex-col">
          <span title="service-title" className="text-xl  text-total-gray">
            Our Service
          </span>
          <h1 className="w-4/6 text-center">
            Handshake infographic mass market crowdfunding iteration.
          </h1>
          <div title="cards" className="grid grid-cols-cards gap-20 mt-20">
            <div>
              <img title="card1" src={Card1} alt="" />
              <span className="block text-2xl mt-6 text-total-black">
                Cool feature title
              </span>
              <p className="text-xl mt-3  text-total-gray">
                Learning curve network effects return on investiment.
              </p>
              <button className="mt-4 text-darker-blue text-xl font-bold transition-b-button">
                <span className="flex">
                  Explorer page <img className="ml-1" src={ArrowRight} />
                </span>
              </button>
            </div>
            <div>
              <img title="card2" src={Card2} alt="" />
              <span className="block text-2xl mt-6 text-total-black">
                Even cooler feature
              </span>
              <p className="text-xl mt-3  text-total-gray">
                Learning curve network effects return on investiment.
              </p>
              <button className="mt-4 text-darker-blue text-xl font-bold transition-b-button">
                <span className="flex">
                  Explorer page <img className="ml-1" src={ArrowRight} />
                </span>
              </button>
            </div>
            <div>
              <img title="card3" src={Card3} alt="" />
              <span className="block text-2xl mt-6 text-total-black">
                Cool feature title
              </span>
              <p className="text-xl mt-3  text-total-gray">
                Learning curve network effects return on investiment.
              </p>
              <button className="mt-4 text-darker-blue text-xl font-bold transition-b-button">
                <span className="flex">
                  Explorer page <img className="ml-1" src={ArrowRight} />
                </span>
              </button>
            </div>
          </div>
          <div title="first-box" className="w-full justify-evenly flex  pt-44">
            <img src={Photo1} className="ml-4" />
            <div className="w-[493px]">
              <h2 className="block mb-4">
                We connect out customers with the best, and help them keep-and
                stay open.
              </h2>
              <li className="flex items-center mt-10  list-none text-xl">
                <img className="w-9 h-9 mr-7" src={ItemIcon} alt="" />
                We connect our customers with the best
              </li>
              <li className="flex items-center mt-6 list-none text-xl">
                <img className="w-9 h-9 mr-7" src={ItemIcon} alt="" />
                We connect our customers with the best
              </li>
              <li className="flex items-center  mt-6 list-none text-xl">
                <img className="w-9 h-9 mr-7" src={ItemIcon} alt="" />
                We connect our customers with the best
              </li>
              <button className="base-button bg-darker-blue mt-14 py-4 px-14 text-total-white">
                Start Now
              </button>
            </div>
          </div>
          <div title="second-box" className="w-full justify-evenly flex  pt-44">
            <div className="w-[493px]">
              <h2 className="block mb-4">
                We connect out customers with the best, and help them keep-and
                stay open.
              </h2>
              <li
                onMouseEnter={() => setHover({ ...hover, feather: true })}
                onMouseLeave={() => setHover({ ...hover, feather: false })}
                className="flex items-center  font-semibold mt-10 py-4 px-5 list-none text-xl transition duration-150 ease-in-out hover:bg-darker-blue  hover:text-total-white cursor-pointer"
              >
                <Feather
                  className="mr-2"
                  color={!hover.feather ? 'dark' : 'light'}
                />
                We connect our customers with the best.
              </li>
              <li
                onMouseEnter={() => setHover({ ...hover, star: true })}
                onMouseLeave={() => setHover({ ...hover, star: false })}
                className="flex items-center font-semibold mt-6 py-4 px-5 list-none text-xl transition duration-150 ease-in-out hover:bg-darker-blue hover:text-total-white cursor-pointer"
              >
                <Star className="mr-2" color={!hover.star ? 'dark' : 'light'} />
                Advisor success customer launch party.
              </li>
              <li
                onMouseEnter={() => setHover({ ...hover, sun: true })}
                onMouseLeave={() => setHover({ ...hover, sun: false })}
                className="flex items-center font-semibold  mt-6 py-4 px-5 list-none text-xl transition duration-150 ease-in-out  hover:bg-darker-blue hover:text-total-white cursor-pointer"
              >
                <Sun className="mr-2" color={!hover.sun ? 'dark' : 'light'} />
                Business-to-consumer long tail.
              </li>
            </div>
            <img src={Photo2} className="mr-4" />
          </div>
        </div>
      </div>
      <div title="comment-section" className="bg-darker-blue flex flex-col ">
        <div className="flex items-center justify-evenly pt-24 ">
          <h1 className="w-[716px] ml-4  text-total-white">
            An enterprise template to ramp up your company website
          </h1>
          <div className="mr-8 mt-12 flex">
            <button className="base-button flex items-cente  bg-total-white px-6 py-5 mr-7">
              <img
                src={ArrowRight}
                className="min-w-6 min-h-6 rotate-180"
                alt=""
              />
            </button>
            <button className="flex items-center base-button  bg-total-white px-6 py-5">
              <img src={ArrowRight} alt="" className="min-w-6 min-h-6 " />
            </button>
          </div>
        </div>

        <div className="flex justify-center w-full pl-4">
          <div
            title="commentary-cards"
            className="grid grid-cols-commentary  pt-8 gap-6"
          >
            <div className=" h-[322px] bg-total-white rounded-md"></div>
            <div className=" h-[394px] bg-total-white rounded-md"></div>
            <div className=" h-[322px] bg-total-white rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
