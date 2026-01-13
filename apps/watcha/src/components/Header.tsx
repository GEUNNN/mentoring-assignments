import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

import Logo from "../assets/logo.png";
import Bell from "../assets/bell-860.png";

interface HeaderProps {
  isSearchPage: boolean;
  setKeyword?: (keyword: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  isSearchPage = false,
  setKeyword,
}) => {
  const router = useRouter();
  const handleSearchClick = () => {
    router.push("/search");
  };

  const renderSearchArea = () => {
    if (isSearchPage) {
      return (
        <div className={styles["search-input-container"]}>
          <input
            type="text"
            placeholder="콘텐츠, 태그, 인물, 리스트 검색"
            className={`${styles["search-input"]} ${styles["full-width"]}`}
            autoFocus
            onChange={(e) => setKeyword && setKeyword(e.target.value)}
          />
        </div>
      );
    } else {
      return (
        <button
          className={styles["search-button-wrapper"]}
          onClick={handleSearchClick}
        >
          <input
            type="text"
            placeholder="검색"
            className={styles["search-input"]}
            readOnly
          />
        </button>
      );
    }
  };

  return (
    <header className={styles["header-container"]}>
      <nav className={styles["header-nav"]}>
        <div className={styles["nav-left"]}>
          <Link href="/">
            <Image
              src={Logo}
              alt="WATCHA"
              className={styles.logo}
              width={100}
              height={30}
              priority
            />
          </Link>
          <ul className={styles["main-menu"]}>
            <li>
              <a href="#subscribe">구독</a>
            </li>
            <li>
              <a href="#purchase">개별구매</a>
            </li>
            <li>
              <a href="#webtoon">웹툰</a>
            </li>
            <li>
              <a href="#party">왓챠파티</a>
            </li>
          </ul>
        </div>

        <div className={styles["nav-right"]}>
          <div>{renderSearchArea()}</div>

          <div className={styles["icon-wrapper"]}>
            <Image
              src={Bell}
              alt="알림"
              className={styles["bell-icon"]}
              width={24}
              height={24}
            />
          </div>

          <button className={styles["login-button"]}>로그인/회원가입</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
