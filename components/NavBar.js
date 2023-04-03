import React from "react";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
      </ul>
      <ThemeSwitch />
    </nav>
  );
};

export default NavBar;
