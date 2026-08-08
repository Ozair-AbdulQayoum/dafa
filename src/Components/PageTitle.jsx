import { useEffect } from "react";
import logo from "../assets/DAFA-New-Logo.jpg";

export default function PageTitle({ title }) {
  useEffect(() => {
    document.title = `${title} - Demining Agency for Afghanistan`;

    const favicon =
      document.querySelector("link[rel='icon']") ||
      document.createElement("link");

    favicon.rel = "icon";
    favicon.href = logo;

    document.head.appendChild(favicon);
  }, [title]);

  return null;
}
