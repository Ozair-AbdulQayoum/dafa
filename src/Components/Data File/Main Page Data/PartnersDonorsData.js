// src/Components/Data File/Main Page Data/PartnersDonorsData.js

import donor1 from "../../../assets/USA.jpg";
import donor2 from "../../../assets/WRA.jpg";
import donor3 from "../../../assets/USAID.svg";
import donor4 from "../../../assets/UK.jpg";
import donor5 from "../../../assets/Japan.webp";
import donor6 from "../../../assets/Europe.png";
import donor7 from "../../../assets/Germany.svg";
import donor8 from "../../../assets/Canada.png";
import donor9 from "../../../assets/Norway.webp";

import un1 from "../../../assets/UNMAS.jpg";
import un2 from "../../../assets/UNOPS.png";
import un3 from "../../../assets/OCHA.png";
import un4 from "../../../assets/AHF.png";
import un5 from "../../../assets/UNESCO.png";
import un6 from "../../../assets/UNDP.png";

import partner1 from "../../../assets/Halo.png";
import partner2 from "../../../assets/NPA.png";
import partner3 from "../../../assets/DRC.png";
import partner4 from "../../../assets/GICHD.png";
import partner5 from "../../../assets/DMAC.png";

export const partnerGroups = [
  {
    id: "donors",
    title: "Donors",
    description:
      "Organizations and institutions supporting humanitarian mine action through resources, funding, and long-term commitment.",
    accent: "#087B5A",

    logos: [
      {
        name: "United States of America",
        shortName: "United States",
        image: donor1,
      },
      {
        name: "Millennium Challenge Corporation",
        shortName: "Millennium Challenge Corporation",
        image: donor2,
      },
      {
        name: "United States Agency for International Development",
        shortName: "USAID",
        image: donor3,
      },
      {
        name: "United Kingdom",
        shortName: "United Kingdom",
        image: donor4,
      },
      {
        name: "Government of Japan",
        shortName: "Japan",
        image: donor5,
        bordered: true,
      },
      {
        name: "European Union",
        shortName: "European Union",
        image: donor6,
      },
      {
        name: "Federal Republic of Germany",
        shortName: "Germany",
        image: donor7,
      },
      {
        name: "Government of Canada",
        shortName: "Canada",
        image: donor8,
      },
      {
        name: "Government of Norway",
        shortName: "Norway",
        image: donor9,
      },
    ],
  },

  {
    id: "un-agencies",
    title: "UN Agencies",
    description:
      "International organizations working alongside humanitarian actors to support safer communities, coordination, and mine action efforts.",
    accent: "#2563EB",

    logos: [
      {
        name: "United Nations Mine Action Service",
        shortName: "UN Mine Action Service",
        image: un1,
      },
      {
        name: "United Nations Office for Project Services",
        shortName: "UNOPS",
        image: un2,
      },
      {
        name: "United Nations Office for the Coordination of Humanitarian Affairs",
        shortName: "UN OCHA",
        image: un3,
      },
      {
        name: "Afghanistan Humanitarian Fund",
        shortName: "Afghanistan Humanitarian Fund",
        image: un4,
        bordered: true,
      },
      {
        name: "United Nations Educational, Scientific and Cultural Organization",
        shortName: "UNESCO",
        image: un5,
      },
      {
        name: "United Nations Development Programme",
        shortName: "UNDP",
        image: un6,
      },
    ],
  },

  {
    id: "partners",
    title: "Our Partners & Supporters",
    description:
      "Dedicated organizations and institutions contributing expertise, coordination, technical support, and collaboration to humanitarian mine action.",
    accent: "#F97316",

    logos: [
      {
        name: "The HALO Trust",
        shortName: "The HALO Trust",
        image: partner1,
      },
      {
        name: "Norwegian People's Aid",
        shortName: "Norwegian People's Aid",
        image: partner2,
      },
      {
        name: "Danish Refugee Council",
        shortName: "Danish Refugee Council",
        image: partner3,
      },
      {
        name: "Geneva International Centre for Humanitarian Demining",
        shortName: "GICHD",
        image: partner4,
      },
      {
        name: "Directorate of Mine Action Coordination",
        shortName: "DMAC",
        image: partner5,
      },
    ],
  },
];

export default partnerGroups;
