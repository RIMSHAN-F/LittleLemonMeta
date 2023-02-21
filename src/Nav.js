import logo from "../src/icons_assets/Logo.svg";
function Nav(){
  return(
    <>
    <nav className="nav-bar">
      <img src={logo} alt="company-logo"/>
      <ul className="nav-ul">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Menu">Menu</a></li>
        <li><a href="#Reservations">Reservations</a></li>
        <li><a href="#Order-Online">Order Online</a></li>
        <li><a href="#Login">Login</a></li>
      </ul>
    </nav>
    </>
  )
}
export default Nav;