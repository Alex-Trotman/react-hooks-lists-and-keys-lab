import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksElements = links.map((link) => {
    return (
      <a href={`#${link}`} key={link}>
        {link}
      </a>
    );
  });
  return <nav>{linksElements}</nav>;
}

export default NavBar;
