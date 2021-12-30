import React from "react"
import Layout from "../components/layout/layout"
import { ContactLayout } from "../page-styles/contact.styled"

const Contact = () => {
  return (
    <Layout>
      <ContactLayout>
        <h1>Contact</h1>
        <h2>Drop Me A Line!</h2>
        <h1>Thanks for reaching out 😊</h1>
      </ContactLayout>
    </Layout>
  )
}

export default Contact
