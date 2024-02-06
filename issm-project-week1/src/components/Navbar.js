import airbnb from "../images/airbnb-logo.png";
const Navbar = () => {
  return (
    <nav>
      <img src={airbnb} alt="logo" classname="nav--logo" />
    </nav>
  );
};

export default Navbar;
