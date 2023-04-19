import Link from "next/link";
import { BsShop } from "react-icons/bs";
import { GrCart } from "react-icons/gr";
import classes from "./navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import userPhoto from "../../public/images/userProfile.png";
import { logout } from "../store/functions";

const CustomNavbar = (props) => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(userData);
  return (
    <nav className="fixed-top bg-dark bg-gradient d-flex justify-content-between  align-items-baseline px-3">
      <Link
        href="/"
        className="logo d-flex p-2 gap-2 fs-3  align-items-baseline text-light"
      >
        <BsShop />
        <span>Market</span>
      </Link>
      <ul className={` d-flex text-light gap-3`}>
        <li>
          <Link className={`${classes.link}`} href={"/admin"}>
            Admin
          </Link>
        </li>
        <li>
          <Link className={`${classes.link}`} href={"./"}>
            Contact Us
          </Link>
        </li>
        {userData.user !== null ? (
          <>
            <li>
              <p className={`${classes.link} py-0 px-2`} href={"/login"}>
                {userData.user.photo ? (
                  <Image
                    className={classes.img}
                    src={userData.user.photo}
                    alt="img"
                  />
                ) : (
                  <Image
                    className={classes.img2}
                    src="/images/userProfile.png"
                    alt="img"
                  />
                )}

                <span>Hello, {userData.user.name.split(" ")[0]}</span>
              </p>
            </li>
            <li>
              <Link className={`${classes.link}`} href={"/login"}>
                <button
                  className={`${classes.btn} text-light`}
                  onClick={() => logout(dispatch)}
                >
                  Log Out
                </button>
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link className={`${classes.link}`} href={"/login"}>
              Log In
            </Link>
          </li>
        )}
        <li>
          <Link className={`${classes.link}`} href={"./"}>
            <span className={`${classes.count}`}>0</span>
            <GrCart className={`${classes.svg}`} />
            <span>Cart</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default CustomNavbar;
