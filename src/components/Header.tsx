import Logo from "../assets/logo.png";
import Bell from "../assets/bell-860.png";
import "./Header.css";
import { Link, useNavigate } from "react-router";
import React from "react";

interface HeaderProps {
  isSearchPage: boolean;
  setKeyword?: (keyword: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  isSearchPage = false,
  setKeyword,
}) => {
  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate("/search");
  };

  const renderSearchArea = () => {
    if (isSearchPage) {
      return (
        <div className="search-input-container">
          <input
            type="text"
            placeholder="콘텐츠, 태그, 인물, 리스트 검색"
            className="search-input full-width"
            autoFocus
            onChange={(e) => setKeyword && setKeyword(e.target.value)}
          />
        </div>
      );
    } else {
      return (
        <button className="search-button-wrapper" onClick={handleSearchClick}>
          <input
            type="text"
            placeholder="검색"
            className="search-input"
            readOnly
          />
        </button>
      );
    }
  };

  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="nav-left">
          <Link to="/">
            <img src={Logo} alt="WATCHA" className="logo" />
          </Link>
          <ul className="main-menu">
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

        <div className="nav-right">
          <div>{renderSearchArea()}</div>

          <div className="icon-wrapper">
            <img src={Bell} alt="알림" className="bell-icon" />
          </div>

          <button className="login-button">로그인/회원가입</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
