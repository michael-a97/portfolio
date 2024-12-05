import * as React from "react";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between p-4 bg-gray-100 items-center">
      <div className="flex-none">MAB</div>
      <div className="flex flex-row justify-end">
        <a href="#skills" className="p-2 font-medium">
          Skills
        </a>
        <a href="/about" className="p-2 font-medium">
          Experience
        </a>
        <a href="/about" className="p-2 font-medium">
          Testimonials
        </a>
        <a
          href="https://drive.google.com/file/d/1q2y0YspQmUlYEo14R6JkiyHc2mmnP9bq/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="p-2 font-medium"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
