import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Me from "../images/me.jpg"
import Nvim from "../images/nvim.png"
import ThisBlog from "../images/this-blog.png"
import style from "./index.module.less"
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaRss,
  FaDiscord,
  FaPatreon,
} from "react-icons/fa"

const IndexPage = () => {
  return (
    <Layout>
      <div style={{ paddingTop: "30px" }}>
        <SEO title="Home" keywords={["chris@machine"]} />
        <div className={style.card}>
          <div className={style.post}>
            <div className={style.cover}>
              <img
                src={Me}
                height="200px"
                width="200px"
                style={{ borderRadius: "50%" }}
                alt="Me"
              />
            </div>
            <div className={style.content}>
              <span>
                My name is Christian, you're probably here for my blog.
              </span>
              <div className={style.list}>
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
                      href={"https://www.patreon.com/chrisatmachine"}
                    >
                      <FaPatreon color="#E8715C" size="30" />
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
                      href={
                        "https://www.youtube.com/channel/UCS97tchJDq17Qms3cux8wcA"
                      }
                    >
                      <FaYoutube color="#EB3323" size="30" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.post}>
            <div className={style.cover}>
              <img
                style={{ marginLeft: "90px" }}
                src={Nvim}
                height="200px"
                width="200px"
                alt="nvim"
              />
            </div>
            <div className={style.content}>
              <span>
                I have a pretty popular Neovim config over on Github if you're
                interested. A lot of the process to create it has been
                documented <Link to={"/neovim"}>here</Link>.
              </span>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.post}>
            <div className={style.cover}>
              <img src={ThisBlog} height="150px" width="225px" alt="nvim" />
            </div>
            <div className={style.content}>
              <span>
                Is available on my github you can fork it if you want.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
