import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Me from "../images/me2.jpg"
import style from "./index.module.less"

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
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
