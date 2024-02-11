import airbnb from "../assets/images/airbnb-logo.png";
const Navbar = () => {
  return (
    <nav>
      <img src={airbnb} alt="logo" className="nav--logo" />
    </nav>
  );
};

export default Navbar;
