import logo from "../src/icons_assets/footer-logo.png"
function Footer(){
  return(
    <>
    <footer>
     <img src={logo} alt="company-logo"/>
     <div className="doormat">
      <h3>Doormat Navigation</h3>
      <ul className="footer-ul">
      <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Menu">Menu</a></li>
        <li><a href="#Reservations">Reservations</a></li>
        <li><a href="#Order-Online">Order Online</a></li>
        <li><a href="#Login">Login</a></li>
      </ul>
     </div>
     <div className="contact">
      <ul className="footer-ul">
        <h3>Contact</h3>
        <li className="li-contact">
              Louisville, KY 40018-1234
         </li>
        <li className="li-contact">+11233456</li>
        <li className="li-contact">LittleLemon@example.com</li>
        </ul>
     </div>
     <div className="social-link">
     <ul className="footer-ul">
     <h3>Social Media Links</h3>
      <li>Instagram</li>
      <li>Facebook</li>
      <li>Email</li>
      </ul>
     </div>
     </footer>
    </>
  )
}
export default Footer;