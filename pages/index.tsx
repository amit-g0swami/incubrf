import type { NextPage } from "next";
import React from "react";
import TextTransition, { presets } from "react-text-transition";
import TitleText from "../components/common/titletext";
import Header from "../components/headers";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Accordian from "../components/common/accordian";
import { animated, useSpring } from "react-spring";
import Footer from "../components/footer";
import { brands } from "../components/data/brands";
import Image from "next/image";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Preload from "../components/common/preload";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel, EffectCards } from "swiper";
import { ShowcaseData } from "../components/data/showcase";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Cursor from "../components/cursor";
import { slides } from "../components/data/testimonials";
import { MysteriousText } from "../components/common/animatetext";
import { BsArrowUpRight } from "react-icons/bs";

const TEXTS = [
  "INNOVATION WITH TECH",
  "client satisfaction",
  "great quality",
  "rocket speed",
];

export const Buttons = ({ currentIndex }: any) => {
  const swiperContorl = useSwiper();
  return (
    <div className="flex mt-5  justify-center items-center">
      <div className="flex mr-10">
        {slides.map((slide, index) => (
          <button
            onClick={() => swiperContorl.slideTo(currentIndex % slides.length)}
          >
            <span
              className={`flex mx-1 w-3 h-3 rounded-full ${
                index === currentIndex % slides.length
                  ? "bg-[#008081]"
                  : "bg-white"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const [innerHeight, setInnerHeight] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  const parallax = React.useRef<IParallax>(null);

  const [canShow, setCanShow] = React.useState<boolean>(false);
  const [pages, setPages] = React.useState<number>(6.3);
  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  const onSlideChange = (index: number) => {
    // if (index === 3) {
    //   setCanShow(true);
    //   setPages(6.3);
    // } else {
    //   setCanShow(false);
    //   setPages(4);
    // }
  };

  const showNameShowCase = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.style.height = "85%"
    }
  }

  const hideNameShowCase = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.height = "100%";
    }
  }

  const textTransform = useSpring({
    to: {
      color: "#456A63",
    },
    from: {
      color: "transparent",
    },
  });

  const rotations = [10, 12, 14, 8, 5, 4, 0, -10, -12, -15];

  React.useEffect(() => {
    let element = document.getElementById("mainBlock");
    if (element) {
      element.addEventListener("scroll", () => {
        let position = element?.scrollTop || 0;
        let textElement = document.getElementById("textAnimated");
        if (element) {
          if (
            position > window.innerHeight * 0.7 &&
            position < window.innerHeight * 2.7
          ) {
            element.style.backgroundImage =
              "linear-gradient(#367589, #7F587BB5, #367589)";
            textElement?.classList.replace("flex", "hidden");
          } else if (position > window.innerHeight * 2.7) {
            element.style.backgroundImage =
              "linear-gradient( #367589, #367589)";
          } else if (position < window.innerHeight) {
            element.style.background = "linear-gradient(#ffffff 60%, #367589)";
            textElement?.classList.replace("hidden", "flex");
          } else {
          }
        }
      });
    }
  }, []);

  React.useEffect(() => {
    setInnerHeight(window.innerHeight);
    window.addEventListener("resize", () => {
      setInnerHeight(window.innerHeight);
    });
  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="w-full flex flex-col">
      {/* <Cursor
        hoverClasses={[
          {
            classNameOfTargetElement: "top-hello",
            classNameOfStyle: "head-hover",
          },
          {
            classNameOfTargetElement: "something",
            classNameOfStyle: "middle-hover",
          },
          {
            classNameOfTargetElement: "button-incuber",
            classNameOfStyle: "btn-incuber",
          },
          {
            classNameOfTargetElement: "button-incubr",
            classNameOfStyle: "btn-incubr",
          },
        ]}
      > */}
      <main className=" flex flex-col" id="parent">
        {/* <Preload /> */}
        <Parallax
          pages={pages}
          ref={parallax}
          id="mainBlock"
          style={{ background: "linear-gradient(#ffffff 60%, #367589)" }}
          className=" transition-all  ease-linear duration-300"
        >
          {/* landing page */}
          <ParallaxLayer
            offset={0}
            speed={-0.1}
            style={{ height: innerHeight }}
          >
            <>
              <Header />
              <div className="flex px-16 2xl:px-24 h-full flex-col relative">
                <span className="button-incuber text-[#1F1D1D] z-40 text-7xl xl:text-[5.2rem] 2xl:text-[6.1vw] leading-[1] py-10 pb-5 pr-60 uppercase">
                  We leverage our creative might and bussiness acumen to help
                  build immaculate experiences .
                </span>
                {/* <ParallaxLayer speed={0.5}> */}
                <animated.h2
                  style={textTransform}
                  id="textAnimated"
                  className="text-md sm:text-lg -z-40 mt-3  text-[#456A63]  font-light md:items-center flex flex-col md:flex-row"
                >
                  <span className=" text-[1.3rem] tracking-widest font-[TitleFont] 2xl:text-4xl text-[#0B0A1B]">
                    WE ARE OBSESSED WITH{" "}
                  </span>
                  <TextTransition
                    text={`${TEXTS[index % TEXTS.length]}`}
                    springConfig={presets.gentle}
                    inline
                    className="uppercase font-bold ml-3 -mt-2 text-white text-3xl 2xl:text-5xl italic"
                  />
                </animated.h2>
                {/* </ParallaxLayer> */}
                <ParallaxLayer speed={0.5} className="">
                  <animated.div className="flex flex-row sm:flex-col mt-10 absolute top-96 right-16 2xl:right-24">
                    <div className="px-1 text-3xl 2xl:text-5xl ">
                      <AiOutlineInstagram />
                    </div>
                    <div className="px-1 text-3xl 2xl:text-5xl ">
                      <AiOutlineLinkedin />
                    </div>
                    <div className="px-1 text-3xl 2xl:text-5xl ">
                      <AiOutlineWhatsApp />
                    </div>
                  </animated.div>
                </ParallaxLayer>
              </div>
            </>
          </ParallaxLayer>
          {/* end landing page */}
          {/* <ParallaxLayer
            offset={0.5}
            speed={2}
            className=" bg-gradient-to-b from-[#ffffff] via-[#fff] to-[#77777773] -z-10"
          /> */}
          {/* our services */}
          <ParallaxLayer offset={1} className="bg-gradient-to-b ">
            <div
              className="w-full px-16 2xl:px-24 py-20 flex flex-col text-white items-end justify-center"
              style={{ height: innerHeight }}
            >
              <div className="flex w-full mb-10 justify-end">
                <TitleText title="Our Services" />
              </div>
              <Accordian
                name="WEBSITE DEVELOPMENT"
                children={[
                  "Web applications",
                  "Celebrity &  personal websites",
                  "Bespoke Commercial Websites",
                  "Big Commerce Websites",
                ]}
              />
              <Accordian
                name="BD &amp; GTM ASSESTS"
                children={[
                  "Web applications",
                  "Celebrity &  personal websites",
                  "Bespoke Commercial Websites",
                  "Big Commerce Websites",
                ]}
              />
            </div>
          </ParallaxLayer>
          {/* <ParallaxLayer
            offset={0.7}
            speed={1}
            className="bg-gradient-to-b -z-10 from-[#77777773] via-[#7F587BB5] to-[#367589]"
          /> */}

          {/* end our services */}

          {/* our work */}
          <ParallaxLayer offset={2} speed={-0.1}>
            <div
              className="w-full h-full text-white px-16 2xl:px-24 py-10  flex flex-col justify-center"
              style={{ height: innerHeight }}
            >
              <motion.div
                initial={{ scale: 2.5, translateX: 200 }}
                whileInView={{ scale: 1, translateX: 0 }}
                transition={{ type: "keyframes", duration: 0.8 }}
                className="flex w-full"
              >
                <animated.span className="p-2 uppercase border px-5 border-white rounded-full text-3xl font-extralight">
                  Our Work
                </animated.span>
              </motion.div>
              <motion.div
                // initial={{ scale: 2.5, translateX: 200, opacity: 0 }}
                // whileInView={{ scale: 1, translateX: 0, opacity: 1 }}
                transition={{ type: "keyframes", duration: 0.8, delay: 0.4 }}
                className="flex py-5 px-2 mt-3 flex-col"
              >
                {/* Here's a quick glimpse of our work */}
                <span className="items-center cursor-pointer my-5 py-5 text-7xl xl:text-[5.2rem] 2xl:text-[6.1vw]">
                  {`Here's a quick glimpse of our work`
                    .split("")
                    .map((char, index) => (
                      <motion.span
                        key={char + index + char}
                        initial={{ translateX: -100, opacity: 0 }}
                        whileInView={{ translateX: 0, opacity: 1 }}
                        transition={{ delay: parseFloat(`0.${index}}`) }}
                      >
                        {char}
                      </motion.span>
                    ))}{" "}
                  {/* <span className="text-xs">
                    </span> */}
                </span>
                <span className="text-2xl 2xl:text-4xl button-incub italic font-bold uppercase">
                  {`we are proud of we give
                    credits to our collaborations, our partners and diverse
                    teams who put in their heart and soul to make this happen`
                    .split("")
                    .map((char, index) => (
                      <motion.span
                        key={char + index + char}
                        initial={{ translateX: -100, opacity: 0 }}
                        whileInView={{ translateX: 0, opacity: 1 }}
                        transition={{ delay: parseFloat(`0.${index}}`) }}
                      >
                        {char}
                      </motion.span>
                    ))}{" "}
                  {/* <span className="text-xs">
                    </span> */}
                </span>
              </motion.div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={1.3}>
            <div
              className="w-full h-full text-white  py-10  flex flex-col justify-center"
              style={{ height: innerHeight }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex py-5 w-full overflow-x-auto overflow-visible"
              >
                <Swiper
                  slidesPerView={"auto"}
                  spaceBetween={30}
                  mousewheel={{
                    releaseOnEdges: true,
                  }}
                  // modules={[Mousewheel]}
                  className="w-full"
                  speed={800}
                >
                  {" "}
                  {typeof window !== "undefined" && (
                    <SwiperSlide
                      className=" w-[90%]"
                      style={{
                        width: window?.innerWidth > 500 ? "5%" : "0%",
                      }}
                    ></SwiperSlide>
                  )}
                  {typeof window !== "undefined" &&
                    ShowcaseData.map((item, index) => (
                      <SwiperSlide
                        key={item.src}
                        className=" w-[90%]"
                        style={{
                          width: window?.innerWidth > 500 ? "85%" : "100%",
                        }}
                      >
                        <motion.div
                          initial={{ scale: 0.5, translateX: 200 }}
                          animate={{ scale: 1, translateX: 0 }}
                          transition={{
                            type: "keyframes",
                            duration: 0.8,
                            delay: 2,
                          }}
                          className=" overflow-hidden flex flex-col  "
                          style={{ height: innerHeight - 50 }}
                        >
                          <div
                            onMouseEnter={() =>
                              showNameShowCase(`slidesShow-${index}`)
                            }
                            onMouseLeave={() =>
                              hideNameShowCase(`slidesShow-${index}`)
                            }
                            className="flex flex-col h-full w-full"
                          >
                            <motion.div
                              initial={{ scale: 1, backgroundSize: "cover" }}
                              transition={{ type: "keyframes", duration: 0.5 }}
                              className="w-full bg-cover flex flex-col overflow-y-hidden relative"
                              style={{
                                backgroundImage: `url("${item.src}")`,
                                height: "100%",
                              }}
                              id={`slidesShow-${index}`}
                            >
                              <div className="flex opacity-0 hover:opacity-100 transition-all ease-in-out duration-500 w-full h-full justify-end items-end p-5 bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-40">
                                <span className="p-5 shadow rounded-full text-black w-28 h-28 justify-center items-center bg-white flex">
                                  <BsArrowUpRight size={40} />
                                </span>
                              </div>
                            </motion.div>
                            <span className="flex items-center py-5 z-50 justify-center">
                              this is name
                            </span>
                          </div>
                        </motion.div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </motion.div>
            </div>
          </ParallaxLayer>
          {/* end our work */}

          {/* testomonials */}

          <ParallaxLayer offset={4}>
            <div
              className="w-full text-white px-16 2xl:px-24 py-40 pt-5 flex flex-col"
              style={{ height: innerHeight }}
            >
              <Marquee
                gradient={false}
                speed={30}
                direction={"right"}
                className="w-full flex h-60 items-center mt-20 overflow-x-auto"
              >
                {brands.map((item) => (
                  <span key={item.src} className="flex-none">
                    <Image key={item.src} src={item} height={120} width={200} />
                  </span>
                ))}
              </Marquee>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={4.6} factor={1.5}>
            <div
              className="w-full text-white relative px-16 2xl:px-24 py-10 pt-5 flex flex-col justify-center"
              style={{ height: innerHeight }}
            >
              <div className="flex w-full h-full pb-10">
                <div className="flex flex-1 button-incubr flex-col">
                  <div className="flex w-full mb-10">
                    <animated.span className="p-2 uppercase border px-5 border-white rounded-full text-5xl font-extralight">
                      TESTIMONIES
                    </animated.span>
                  </div>
                  <div className="flex py-5 ">
                    <span className="text-3xl xl:text-4xl 2xl:text-5xl uppercase leading-[1.3]">
                      its truly gratifying when our customers find our work
                      valuable and purposeful. <br /> here are some quick
                      testimonies to showcase the proof of our love for our
                      clients.
                    </span>
                  </div>
                  {/* <div className="flex w-full flex-col items-end">
                      <span>Designation @ company</span>
                      <span>Name here</span>
                    </div> */}
                </div>
                <div className="flex flex-1 relative justify-center items-center">
                  <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    loop
                    autoplay
                    onSlideChange={(swiper) =>
                      onSlideChange(swiper.activeIndex)
                    }
                    modules={[EffectCards, Autoplay]}
                    style={{
                      width: 400,
                      overflow: "visible",
                      background: "none",
                    }}
                  >
                    {/* <div className="flex absolute bottom-44 left-20">
                        <Buttons currentIndex={indexS} />
                      </div> */}
                    {slides.map((slide, index) => (
                      <SwiperSlide
                        key={slide.id}
                        style={{
                          background: "none",
                          height: 450,
                          boxShadow: "none",
                        }}
                      >
                        <div
                          style={{
                            transform: `rotate(${
                              rotations[index % rotations.length]
                            }deg)`,
                          }}
                          className="bg-white rounded-md flex flex-col justify-between text-black shadow-lg p-10 w-full h-full"
                        >
                          <span className="text-gray-800">
                            <MysteriousText>{slide.text}</MysteriousText>
                          </span>
                          <span>{slide.description}</span>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="h-full flex justify-center items-center">
              <Footer />
            </div>
          </ParallaxLayer>
          {/* end testomonials */}
        </Parallax>
      </main>
      {/* </Cursor> */}
    </div>
  );
};

export default Home;
