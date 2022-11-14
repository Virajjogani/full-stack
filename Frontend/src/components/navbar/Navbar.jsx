import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const naviagate = useNavigate();

  const handleregister = () => {
    naviagate("/signup");
  };

  const handlelogin = () => {
    naviagate("/login");
  };

  const token = sessionStorage.getItem("token");
  const handlelogout = () => {
    sessionStorage.clear();
    toast.success("Logout Successfully");
    naviagate("/");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking.com</span>
        {!token ? (
          <div className="navItems">
            <button className="navButton" onClick={handleregister}>
              Register
            </button>
            <button className="navButton" onClick={handlelogin}>
              Login
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={handlelogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
