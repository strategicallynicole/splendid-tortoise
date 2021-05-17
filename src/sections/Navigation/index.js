import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"

import { Container } from "reusecore/Layout"
import ScrollLogo from "assets/images/logos/main.svg"
import DarkLogo from "assets/images/logos/darkmain.svg"

import Data from "./utility/data.js"
import ScrollspyMenu from "./utility/ScrollspyMenu.js"
import NavigationWrap from "./navigation.style"

const Navigation = () => {
  const [expand, setExpand] = useState(true)

  useEffect(() => {
    const header = document.getElementById("navbar")
    const mobilemenuicon = document.getElementById("mobile-menu-icon")

    
    const handleScroll = window.addEventListener("scroll", (listenScrollEvent) => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled")
        mobilemenuicon.classList.add("scrolled")


      } else {
        header.classList.remove("scrolled")
        mobilemenuicon.classList.remove("scrolled")


            }
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <NavigationWrap id="navbar"  className="nav-block">
      <Container>
        <div id="navbar-wrap" className="navbar-wrap">
          <Link to="#" className="logo">
              <img src={DarkLogo} id="DarkLogo" alt="prime app landing" />

          </Link>
          <nav className="nav">
            <FaBars
              className="mobile-menu-icon"
              id="mobile-menu-icon"
              onClick={() => setExpand(!expand)}
            />
            <ScrollspyMenu
              className={`collapsed ${expand ? "is-expanded" : ""}`}
              menuItems={Data.menuItems}
            />
          </nav>
        </div>
      </Container>
    </NavigationWrap>
  )
}

export default Navigation
