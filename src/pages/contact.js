import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"
import style from "./contact.module.less"

function Contact() {
  return (
    <Layout>
      <SEO title="Contact" keywords={["chris@machine"]} />
      <h1 style={{ textAlign: "center" }}>Contact</h1>
      <div className={style.container}>
        <ContactForm action="https://www.flexyform.com/f/9035a58cef335a9fec860fc1af4bb9b01d4f3f4f	"></ContactForm>
      </div>
    </Layout>
  )
}

export default Contact

