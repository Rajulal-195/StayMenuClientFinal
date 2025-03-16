import "./mailList.css"

const MailList = () => {
  return (
 
<div data-aos="zoom-in-up">

      <div className="mail abos animate-on-scroll">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
          <input type="text" placeholder="Your Email" />
          <button className="btn btn-smalll-secondary">Subscribe</button>
        </div>
      </div>
</div>

  )
}

export default MailList