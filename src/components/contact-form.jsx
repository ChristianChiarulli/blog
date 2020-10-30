import React from "react"

class ContactForm extends React.Component {
  render() {
    const formStyle = {
      textAlign: "left",
    }
    const buttonsStyle = {
      margin: "1rem",
      textAlign: "center",
    }
    return (
      <form
        style={formStyle}
        className="form"
        action={this.props.action}
        method="post"
      >
        <div>
          <label>Full name</label>
          <input type="text" name="fullname" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" rows="5"></textarea>
        </div>
        <ul style={buttonsStyle}>
          <li>
            <button type="submit" className="button special">
              Send
            </button>
          </li>
        </ul>
      </form>
    )
  }
}

export default ContactForm
