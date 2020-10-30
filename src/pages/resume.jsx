import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./contact.module.less"

function Donate() {
  return (
    <Layout>
      <SEO title="Resume" keywords={["chris@machine"]} />
      <h1 style={{ textAlign: "center" }}>Resume</h1>
      <div className={style.container}></div>
    </Layout>
  )
}

export default Donate

