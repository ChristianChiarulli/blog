import React, { useState } from "react"
import { Link } from "gatsby"
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaRss,
  FaBars,
  FaTimes,
  FaDiscord,
  FaPatreon,
} from "react-icons/fa"
import style from "./header.module.less"

const Header = () => {
  const [isMenuCollapsed, setMenuCollapsed] = useState(true)

  function toggleMenu() {
    setMenuCollapsed(!isMenuCollapsed)
  }

  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <div className={style.title}>
          <Link to={"/"}>
            <h4>
              Chris
              <span style={{ color: "red" }}>@</span>
              Machine
            </h4>
          </Link>
        </div>
        <div className={style.menuButton}>
          {isMenuCollapsed ? (
            <FaBars size="30" onClick={toggleMenu} />
          ) : (
            <FaTimes size="30" onClick={toggleMenu} />
          )}
        </div>
      </div>
      <div
        className={[
          style.list,
          isMenuCollapsed ? style.collapsedMenu : style.expandedMenu,
        ].join(" ")}
      >
        <ul>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/tags"}>Topics</Link>
          </li>
          <li>
            <Link to={"/about"}>Resume</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a target="_blank" rel="nofollow noopener noreferrer" href={"/"}>
              <FaGithub size="30" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="nofollow noopener noreferrer" href={"/"}>
              <FaPatreon size="30" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="nofollow noopener noreferrer" href={"/"}>
              <FaDiscord size="30" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="nofollow noopener noreferrer" href={"/"}>
              <FaLinkedin size="30" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="nofollow noopener noreferrer" href={"/"}>
              <FaYoutube size="30" />
            </a>
          </li>
          {/* <li> */}
          {/*   <Link to={"/rss.xml"}> */}
          {/*     <FaRss size="30" /> */}
          {/*   </Link> */}
          {/* </li> */}
        </ul>
      </div>
    </div>
  )
}

export default Header

