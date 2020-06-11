import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Me from "../images/me.jpg"
import Nvim from "../images/nvim.png"
import ThisBlog from "../images/this-blog.png"
import Gatr from "../images/gatr.png"
import style from "./index.module.less"
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaDiscord,
  FaPatreon,
} from "react-icons/fa"

const IndexPage = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>Portfolio</h1>
      <SEO title="Home" keywords={["chris@machine"]} />
      <div className={style.card}>
        <div className={style.post}>
          <div className={style.cover}>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={"https://www.linkedin.com/in/christianchiarulli/"}
            >
              <img
                src={Me}
                height="200px"
                width="200px"
                style={{ borderRadius: "50%" }}
                alt="Me"
              />
            </a>
          </div>
          <div className={style.content}>
            <span>
              My name is Christian, I'm a Full Stack developer. I make YouTube
              videos about various topics such as Software Development, Linux,
              Neovim and Machine Learning. You can find me on the following
              social media sites.
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
                    href={
                      "https://www.youtube.com/channel/UCS97tchJDq17Qms3cux8wcA"
                    }
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
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.post}>
          <div className={style.cover}>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={"https://github.com/ChristianChiarulli/nvim"}
            >
              <img src={Nvim} height="200px" width="200px" alt="nvim" />
            </a>
          </div>
          <div className={style.content}>
            <span>
              I have a pretty popular Neovim config over on Github if you're
              interested. A lot of the process to create it has been documented{" "}
              <Link to={"/neovim"}>here</Link>.
            </span>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.post}>
          <div className={style.cover}>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={"https://github.com/ChristianChiarulli/blog"}
            >
              <img src={ThisBlog} height="150px" width="225px" alt="blog" />
            </a>
          </div>
          <div className={style.content}>
            <span>Is available on my github you can fork it if you want.</span>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.post}>
          <div className={style.cover}>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={
                "https://spacenews.com/lockheed-martin-offering-new-satellite-image-analysis-service/"
              }
            >
              <img src={Gatr} height="150px" width="300px" alt="blog" />
            </a>
          </div>
          <div className={style.content}>
            <span>
              During my time at Lockheed Martin I worked with some awesome
              engineers and was the software lead for a project called G.A.T.R.
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
