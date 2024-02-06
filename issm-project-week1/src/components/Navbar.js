import airbnb from "../images/airbnb-logo.png";
const Navbar = () => {
  return (
    <nav>
      <img src={airbnb} alt="logo" className="nav--logo" />
    </nav>
  );
};

export default Navbar;
