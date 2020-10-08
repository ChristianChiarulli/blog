import React, { useState } from "react"
import { Link } from "gatsby"
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaBars,
  FaTimes,
  FaDiscord,
  FaPatreon,
  FaRss,
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
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/donate"}>Donate</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={"https://github.com/ChristianChiarulli"}
            >
              <FaGithub color="#FFFFFF" size="30" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={"https://www.youtube.com/channel/UCS97tchJDq17Qms3cux8wcA"}
            >
              <FaYoutube color="#EB3323" size="30" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={"https://discord.gg/Xb9B4Ny"}
            >
              <FaDiscord color="#768AD4" size="30" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={"https://www.linkedin.com/in/christianchiarulli/"}
            >
              <FaLinkedin color="#3077B0" size="30" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={"https://www.patreon.com/chrisatmachine"}
            >
              <FaPatreon color="#E8715C" size="30" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={"https://www.chrisatmachine.com/rss.xml"}
            >
              <FaRss color="#E89D4B" size="30" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
