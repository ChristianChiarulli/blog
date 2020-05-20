import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Me from "../images/me2.jpg"
import Nvim from "../images/nvim.png"
import style from "./index.module.less"
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaRss,
  FaDiscord,
  FaPatreon,
} from "react-icons/fa"

const IndexPage = props => {
  return (
    <Layout>
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
            <span>My name is Christian, you're probably here for my blog</span>
            <div>
              <FaGithub size="30" />
              <FaPatreon size="30" />
              <FaDiscord size="30" />
              <FaLinkedin size="30" />
              <FaYoutube size="30" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.post}>
          <div className={style.cover}>
            <img src={Nvim} height="200px" width="200px" alt="nvim" />
          </div>
          <div className={style.content}>
            <span>
              I have a pretty popular Neovim config onver on Github if you're
              interested. A lot of the process to crete it has been documented
              here.
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
