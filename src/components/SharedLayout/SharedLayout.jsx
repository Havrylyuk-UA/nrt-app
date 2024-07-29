import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import clsx from "clsx";
import css from "./SharedLayout.module.scss";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/selectors";

const SharedLayout = () => {
  const theme = useSelector(selectTheme);

  return (
    <div
      className={clsx({
        [css.dark]: theme === "dark",
        [css.light]: theme === "light",
      })}
    >
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default SharedLayout;
