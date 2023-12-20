import React from "react";
import { TiShoppingBag } from "react-icons/ti";
import { LuUserSquare } from "react-icons/lu";
import { BiCategory } from "react-icons/bi";
import {TfiDashboard } from "react-icons/tfi";



import { Link } from "react-router-dom";

function Sidebar() {
  const category = [
    {
      id: "1",
      name: "Dashboard",
      icon: <TfiDashboard size={30} />,
      Link:"/dashboard"
    },

    {
      id: "2",
      name: "Users",
      icon: <LuUserSquare  size={30} />,
      Link: "/Usertable",
    },
    {
      id: "3",
      name: "Category",
      icon: <BiCategory size={30} />,
      Link: "/categorypage",
    },
    {
      id: "4",
      name: "Products",
      icon: <TiShoppingBag size={30} />,
      Link: "/productpage",
    },
  ];
  return (
    <div className="w-44 h-screen bg-[#2E284C] lg:w-72 lg:h-screen">
      {category.map((item, index) => {
        return (
          <Link to={item.Link} key={item.id} >
            <div className="flex h-screens">
            <div className="flex mt-6">
            <icon className="text-white">{item.icon}</icon>
            <h1 className="mx-4 text-xl text-white">{item.name}</h1>
            </div>
             
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
