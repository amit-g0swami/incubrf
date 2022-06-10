import Image from "next/image";
import React from "react";
import { buttonText, Logo, navigation_link } from "../data/link";

export default function Header(): JSX.Element {
  return (
    <header className="w-full flex py-5 px-16 2xl:px-24 border-b justify-between items-center">
      <div>
        <Image src={Logo} width={Logo.width - 5} height={Logo.height - 5} />
      </div>
      <div className="flex w-full">
        <ul className="flex w-full justify-around">
          {navigation_link.map((link) => (
            <li className=" text-gray-500 text-sm" key={link.id}>{link.name}</li>
          ))}
        </ul>
      </div>
      <div className="flex w-44 bg-black text-white rounded-full">
        <button className=" px-1 py-1 w-full flex items-center justify-center text-xs 2xl:text-md">{buttonText}</button>
      </div>
    </header>
  );
}
