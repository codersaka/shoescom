import Link from "next/link";
import Image from "next/image";

import {
  CiMail,
  CiLocationOn,
  CiSearch,
  CiUser,
  CiHeart,
  CiShoppingBasket,
} from "react-icons/ci";

import { FaAngleDown } from "react-icons/fa6";

import Logo from "@/app/assets/img/logo/logo-1.webp";

function NonLogoNavComponent() {
  return (
    <ul className="flex justify-between items-center w-[15%] p-2">
      <li className="flex items-center">
        <CiMail size={18} /> <span className="ml-1">Support</span>
      </li>
      <li className="flex items-center">
        <CiLocationOn size={18} />
        <span className="ml-1">Store location</span>
      </li>
    </ul>
  );
}

function Logonav() {
  return (
    <div className="p-2 w-40">
      <Image src={Logo} alt="site-logo" />
    </div>
  );
}

function MidNavText() {
  return (
    <div className="flex items-center justify-between">
      <div className="px-3 py-0 border-2 rounded-2xl border-red-50 mr-2 bg-white text-black">
        <p>Hot</p>
      </div>
      <div>
        <p>
          Save up to 50% off on running shoes discount
          <Link href="/" className="underline ml-2">
            Shop now
          </Link>
        </p>
      </div>
    </div>
  );
}

function NavItems() {
  const navItems = [
    {
      id: "home",
      title: "Home",
      link: "/",
    },
    {
      id: "shop",
      title: "shop",
      link: "/",
    },
    {
      id: "collection",
      title: "collection",
      link: "/",
    },
    {
      id: "about",
      title: "about",
      link: "/",
    },
    {
      id: "contact",
      title: "contact",
      link: "/",
    },
  ];

  return (
    <ul className="flex items-center justify-between text-black w-[30%] capitalize text-base py-4">
      {navItems.map((item) => (
        <li key={item.id}>
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

function Language() {
  return (
    <ul className="flex justify-between items-center w-[10%] p-2">
      <li className="flex items-center">
        <span className="mr-2">English</span>
        <FaAngleDown size={13} />
      </li>
      <li className="flex items-center">
        <span className="mr-2">INR</span>
        <FaAngleDown size={13} />
      </li>
    </ul>
  );
}

function ProfileSection() {
  const profileIcons = [
    {
      id: "CiSearch",
      icon: <CiSearch size={24} />,
    },
    {
      id: "CiUser",
      icon: <CiUser size={24} />,
    },
    {
      id: "CiHeart",
      icon: <CiHeart size={24} />,
    },
    {
      id: "CiShoppingBasket",
      icon: <CiShoppingBasket size={24} />,
    },
  ];

  return (
    <ul className="flex justify-between items-center w-[10%] p-2 text-black">
      {profileIcons.map((item) => (
        <li className="flex items-center" key={item.id}>
          {item.icon}
        </li>
      ))}
    </ul>
  );
}

export {
  NonLogoNavComponent,
  Logonav,
  MidNavText,
  NavItems,
  Language,
  ProfileSection,
};
