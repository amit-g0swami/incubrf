import moment from "moment";
import Image from "next/image";
import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Logo, navigation_link } from "../data/link";

const Footer = () => {
  return (
    <div className="w-full px-16 2xl:px-24 flex flex-col py-10 h-full bg-white">
      <div className="w-full flex justify-end text-4xl font-[400]">LET'S</div>
      <div className="w-full button-incuber flex justify-end mt-3 items-center">
        <span className=" border button-incuber rounded-full p-3 px-6 border-black">
          <HiArrowNarrowRight size={44} />
        </span>
        <button className="ml-5 button-incuber p-3 bg-black rounded-full text-white text-4xl px-6 tracking-wider">
          START A PROJECT
        </button>
      </div>

      <div className="flex pt-20">
        <div className="flex  flex-1 items-start flex-col">
          <Image src={Logo} />
          <span className="w-60 mt-4">
            Let's start working together on your amazing project. Challenge us.
            We want to work with you to create the really cool stuff.
          </span>
        </div>
        <div className="flex flex-1 justify-end items-end">
          <div className="px-1">
            <AiOutlineInstagram size="30" />
          </div>
          <div className="px-1">
            <AiOutlineLinkedin size="30" />
          </div>
          <div className="px-1">
            <AiOutlineWhatsApp size="30" />
          </div>
        </div>
      </div>

      <div className="flex mt-10 items-center">
        <div className=" w-full flex text-sm justify-between">
          {navigation_link.map((item) => (
            <span key={item.name + item.id}>{item.name}</span>
          ))}
        </div>
        <div className=" w-96 text-xl text-right ml-20 text-[#37768A]">
          INCUBR COPYRIGHT {moment().year()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
