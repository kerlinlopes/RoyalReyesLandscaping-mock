import React from "react";



import { GiPineTree } from "react-icons/gi";
import { GiGrass } from "react-icons/gi";
import { MdOutlinePestControl } from "react-icons/md";
import { BsJournalRichtext } from "react-icons/bs";
import { GiFamilyHouse } from "react-icons/gi";
import { BiDollarCircle } from "react-icons/bi";



const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [

  {
    name: "Pest Fertilization",
    description:
      "Providing the raw materials that not only increase plant growth and vigor, but also enhance the nutritional qualities of plant tissue and/or sap for many plant-feeding pests.",
    icon: iconStyle(MdOutlinePestControl),
    imgClass: "three",
  },
  {
    name: "Commercial",
    description: "We incorporate the planning, design, installation and long-term maintenance into a finished product that reflects your business's personality and values, and makes both economic and aesthetic sense.",
    icon: iconStyle(BsJournalRichtext),
    imgClass: "four",
  },

  {
    name: "Residential",
    description:
      "We focus on the privately owned homes. Each one is unique and the goals differ, as every owner has different tastes and wants.",
    icon: iconStyle(GiFamilyHouse),
    imgClass: "five",
  },


  {
    name: "Landscape Installation",
    description:
      "Our landscape installations on your property are much like adding an addition to your home - only on the outside.",
    icon: iconStyle(GiPineTree),
    imgClass: "one",
  },
  {
    name: "Lawn Maintenance",
    description: "Keeping your lawn and outdoor property clean and manicured year round.",
    icon: iconStyle(GiGrass),
    imgClass: "two",
  },
  {
    name: "Price",
    description: "We offer the best prices to fit or accomodate your budget. ",
    icon: iconStyle(BiDollarCircle),
    imgClass: "six",
  },
];
