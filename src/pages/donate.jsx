import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./index.module.less"

function Donate() {
  return (
    <Layout>
      <SEO title="Donate" keywords={["chris@machine"]} />
      <h1 style={{ textAlign: "center" }}>Donate</h1>
      <div className={style.container}>
        <h2>Crypto</h2>
        <ul>
          <li>Bitcoin: 3EHRVzg525C2nWpWfwbdbzqRHe3SCXBMUP</li>
          <li>Chainlink: 0xD6a3740FAf0b34e34d46d0476dA4f8Eae04eC8E6</li>
          <li>Ethereum: 0x2CEd51078385553691E219EB00060AdE40000BBc</li>
          <li>BAT: 0xF66cf0385d0551A9425f425C0E6Caa44C642064A</li>
        </ul>
      </div>
    </Layout>
  )
}

export default Donate

