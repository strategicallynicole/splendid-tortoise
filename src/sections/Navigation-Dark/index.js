import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"

import { Container } from "reusecore/Layout"
import ScrollLogo from "assets/images/logos/main.svg"
import DarkLogo from "assets/images/logos/darkmain.svg"

import Data from "./utility/data.js"
import ScrollspyMenu from "./utility/ScrollspyMenu.js"
import NavigationWrap from "./navigation.style"
import "./utility/darknav.scss"

const Navigation = () => {
  const [expand, setExpand] = useState(false)

  useEffect(() => {
    const header = document.getElementById("navbar")
    const darkLogo = document.getElementById("DarkLogo")
    const scrollLogo = document.getElementById("ScrollLogo")
    const mobileMenuIcon = document.getElementById("mobile-menu-icon")

    
    const handleScroll = window.addEventListener("scroll", (listenScrollEvent) => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled"),
        scrollLogo.classList.add("scrollinglogo")
        darkLogo.classList.add("scrollinglogo")
        mobileMenuIcon.classList.add('scrolledicon')

      } else {
        header.classList.remove("scrolled")
        scrollLogo.classList.remove("scrollinglogo")
        darkLogo.classList.remove("scrollinglogo")
        mobileMenuIcon.classList.remove('scrolledicon')


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
              <img src={DarkLogo} className="switchlogo" id="DarkLogo" alt="prime app landing" />

         <img src={ScrollLogo} className="switchlogo" id="ScrollLogo" alt="prime app landing" />
          </Link>
          <nav className="nav">
            <FaBars
              id="mobile-menu-icon"
              className="mobile-menu-icon"
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
