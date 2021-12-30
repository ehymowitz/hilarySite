import React from "react"
import Layout from "../components/layout/layout"
import { ContactLayout } from "../page-styles/contact.styled"

const Contact = () => {
  return (
    <Layout>
      <ContactLayout>
        <h1>Contact</h1>
        <h2>Drop Me A Line!</h2>
        <form
          name="contact"
          method="post"
          action="/contact-success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <p hidden>
            <label>
              <input name="bot-field" />
            </label>
          </p>
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message" rows={8} />
          <button type="submit">Send</button>
        </form>
      </ContactLayout>
    </Layout>
  )
}

export default Contact
