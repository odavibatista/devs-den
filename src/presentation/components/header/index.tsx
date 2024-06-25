"use client";

import styles from "./styles.module.scss";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../button";
import XLink from "../xlink";
import { useHome } from "@/providers/home-data-provider";
import { useRouter } from "next/navigation";
import refreshPage from "@/server/utils/refresh.function";

/* WE NEED TO UPDATE THE USER'S NAME AUTOMATICALLY, A PAGE REFRESH MIGHT SOLVE IT */
export default function Header() {
  const { homeData, isHomeDataLoading } = useHome();
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
  const [userName, setUserName] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (homeData && !isHomeDataLoading) {
        setIsLoggedin(true);
        setUserName(homeData?.name);
      }
    })();
  });

  const handleLogout = async () => {
    setIsLoggedin(false);
    setUserName(null);
    sessionStorage.clear();
    await refreshPage();
    router.push("/");
  };

  return (
    <nav
      className={
        "navbar navbar-expand-lg container-fluid fixed-top navigation " +
        styles.header
      }
      id={styles.header}
    >
      <XLink className="navbar-brand" href={"/"}>
        <img
          src="/header/logo.png"
          alt=""
          className={styles.header_image + " navImage"}
        />
      </XLink>
      <button
        id="nav-button"
        className="position-relative navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon "></span>
      </button>
      <div
        className={" collapse navbar-collapse justify-content-end"}
        id="navbarSupportedContent"
      >
        <ul className={styles.right_nav + " navbar-nav"}>
          <li className={styles.nav_item + " nav-item"}>
            <XLink href="/about" className={styles.nav_link}>
              <p className={styles.nav_link}>Sobre</p>
            </XLink>
          </li>
          <li className={styles.nav_item + " nav-item"}>
            <XLink href="/jobs" className={styles.nav_link}>
              <p className={styles.nav_link}>Vagas</p>
            </XLink>
          </li>
          {isLoggedin && userName ? (
            <>
              <li className={styles.nav_item + " nav-item"}>
                <XLink href="/profile" className={styles.nav_link}>
                  <p className={styles.nav_link}>{userName}</p>
                </XLink>
              </li>
              <li className={styles.nav_item + " nav-item"}>
                <div className={styles.logout_div}>
                  <Button text="SAIR" onClick={handleLogout} />
                </div>
              </li>
            </>
          ) : (
            <>
              <li className={styles.nav_item + " nav-item"}>
                <XLink href="/login" className={styles.nav_link}>
                  <div className={styles.login_div}>
                    <Button text="LOGIN" />
                  </div>
                </XLink>
              </li>
              <li className={styles.nav_item + " nav-item"}>
                <XLink href="/register" className={styles.nav_link}>
                  <div className={styles.register_div}>
                    <Button text="REGISTRE-SE" />
                  </div>
                </XLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
