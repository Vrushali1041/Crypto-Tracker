import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton} from "@mui/material";
import {Link} from "react-router-dom"
// import "./style.css"; , Switch 

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  // const setDark = () => {
  //   localStorage.setItem("theme", "dark");
  //   document.documentElement.setAttribute("data-theme", "dark");
  // };

  // const setLight = () => {
  //   localStorage.setItem("theme", "light");
  //   document.documentElement.setAttribute("data-theme", "light");
  // };

  // const storedTheme = localStorage.getItem("theme");

  // const prefersDark =
  //   window.matchMedia &&
  //   window.matchMedia("(prefers-color-scheme: dark)").matches;

  // const defaultDark =
  //   storedTheme === "dark" || (storedTheme === null && prefersDark);

  // const [darkTheme, setDarkTheme] = useState(
  //   defaultDark == "dark" ? true : false
  // );

  // if (defaultDark) {
  //   setDark();
  // }

  // const toggleTheme = (e) => {
  //   if (!darkTheme) {
  //     setDark();
  //   } else {
  //     setLight();
  //   }
  //   setDarkTheme(!darkTheme);
  // };
  
  return (
    <div>
      <div className="menu-button">
        <IconButton onClick={() => setOpen(true)}>
          {/* <MenuIcon style={{ color: "var(--white)" }} /> */}
          <MenuRoundedIcon className="link" />
        </IconButton>
      </div>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <Link to="/">
            <p className="links">Home</p>
          </Link>
          <Link to="/compare">
            <p className="links">Compare</p>
          </Link>
          {/* <Link to="/watchlist">
            <p className="links">Watchlist Us</p>
          </Link> */}
          <Link to="/dashboard">
            <p className="links">Dashboard</p>
          </Link>
          {/*   <p className="links">
            <Switch
              defaultChecked
              value={!darkTheme}
              onClick={() => toggleTheme()}
            />
          </p> */}
        </div>
      </Drawer>
    </div>
  );
}         


