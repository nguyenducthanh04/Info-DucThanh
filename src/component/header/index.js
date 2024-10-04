import React, { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { useMediaQuery } from "react-responsive";
import "./header.css";
import { useUser } from "../../Users/UserContext";
import avatar from "../../assets/images/thanhdz.jpg";
import facebookIcon from "../../assets/images/facebook.png";
import instagramIcon from "../../assets/images/instagram.png";
import tiktokIcon from "../../assets/images/video.png";
import githubIcon from "../../assets/images/github.png";
import worldDark from "../../assets/images/globe.png";
import worldLight from "../../assets/images/earth.png";
import mailIcon from "../../assets/images/email.png";
import accountIcon from "../../assets/images/account.png";
import { Link } from "react-router-dom";
function Header() {
    const { userData } = useUser();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <div>
            {isMobile ? (
                <div
                    className={`${
                        isDarkMode ? "dark-mode-info-mobile" : "info-mobile"
                    }`}
                >
                    <div className="personal-info-mobile">
                        <div className="avatar-mobile">
                            <img src={avatar} alt="avatar"></img>
                        </div>
                        <div className="person-name-social-mobile">
                            <div className="name-mobile">
                                <h2>Nguyễn Đức Thanh</h2>
                            </div>
                            <div className="job-mobile">
                                <em>Sinh Viên</em>
                            </div>
                            <div className="social-mobile">
                                <a
                                    href="https://www.facebook.com/profile.php?id=100029011241481"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="icon-mobile">
                                        <img
                                            src={facebookIcon}
                                            className="icon-facebook-mobile"
                                            alt="facebook"
                                        ></img>
                                    </div>
                                </a>
                                <a
                                    href="https://www.instagram.com/thah_dng/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="icon-mobile">
                                        <img
                                            src={instagramIcon}
                                            className="icon-instagram-mobile"
                                            alt="instagram"
                                        ></img>
                                    </div>
                                </a>

                                <a
                                    href="https://github.com/nguyenducthanh04"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="icon-mobile">
                                        <img
                                            src={githubIcon}
                                            className="icon-github-mobile"
                                            alt="github"
                                        ></img>
                                    </div>
                                </a>
                                <Link to={"/send-mail"}>
                                    <div className="icon-mobile">
                                        <img
                                            src={mailIcon}
                                            className="icon-mail-mobile"
                                            alt="tiktok"
                                        ></img>
                                    </div>
                                </Link>
                                <Link to={"/profile"}>
                                    {/* <div className="icon-mobile-last">
                                        <img
                                            src={accountIcon}
                                            className="icon-account-mobile"
                                            alt="tiktok"
                                        ></img>
                                    </div> */}
                                    {userData ? (
                                        <img
                                            src={userData.avatar}
                                            className="avatar-user"
                                        ></img>
                                    ) : (
                                        <div className="icon-mobile-last">
                                            <img
                                                src={accountIcon}
                                                className="icon-account-mobile"
                                                alt="tiktok"
                                            ></img>
                                        </div>
                                    )}
                                </Link>
                            </div>
                            <div className="info-text-mobile">
                                <div className="info-text-1-mobile">
                                    <div className="email-mobile">
                                        <h5 className="title-info-text-mobile">
                                            EMAIL
                                        </h5>
                                        <span>dducthanh04@gmail.com</span>
                                    </div>
                                    <div className="birth-day-mobile">
                                        <h5 className="title-info-text-mobile">
                                            NGÀY SINH
                                        </h5>
                                        <span>08/10/2004</span>
                                    </div>
                                </div>
                                <div className="info-text-2-mobile">
                                    <div className="phone-mobile">
                                        <h5 className="title-info-text-mobile">
                                            SỐ ĐIỆN THOẠI
                                        </h5>
                                        <span>058**6*666</span>
                                    </div>
                                    <div className="country-mobile">
                                        <h5 className="title-info-text-mobile">
                                            QUÊ QUÁN
                                        </h5>
                                        <span>Hưng Yên, Việt Nam</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box-mobile"></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={`${isDarkMode ? "dark-mode-info" : "info"}`}>
                    <div className="personal-info">
                        <div className="avatar">
                            <img src={avatar} alt="avatar"></img>
                        </div>
                        <div className="person-name-social">
                            <div className="name">
                                <h2>Nguyễn Đức Thanh</h2>
                            </div>
                            <div className="jobs">
                                <em>Sinh Viên</em>
                            </div>
                            <div className="social">
                                <a
                                    href="https://www.facebook.com/profile.php?id=100029011241481"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="icon">
                                        <img
                                            src={facebookIcon}
                                            className="icon-facebook"
                                            alt="facebook"
                                        ></img>
                                    </div>
                                </a>
                                <a
                                    href="https://www.instagram.com/thah_dng/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="icon">
                                        <img
                                            src={instagramIcon}
                                            className="icon-instagram"
                                            alt="instagram"
                                        ></img>
                                    </div>
                                </a>
                                <a
                                    href="https://github.com/nguyenducthanh04"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="icon">
                                        <img
                                            src={githubIcon}
                                            className="icon-github"
                                            alt="github"
                                        ></img>
                                    </div>
                                </a>
                                <Link to={"/send-mail"}>
                                    <div className="icon">
                                        <img
                                            src={mailIcon}
                                            className="icon-mail"
                                            alt="mail"
                                        ></img>
                                    </div>
                                </Link>
                                <Link to={"/profile"}>
                                    {userData ? (
                                        <img
                                            src={userData.avatar}
                                            className="avatar-user"
                                        ></img>
                                    ) : (
                                        <div className="icon">
                                            <img
                                                src={accountIcon}
                                                className="icon-account"
                                            ></img>
                                        </div>
                                    )}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="vertical-inline"></div>
                    <div className="info-text">
                        <div className="info-text-1">
                            <div className="email">
                                <h5 className="title-info-text">EMAIL</h5>
                                <span>dducthanh04@gmail.com</span>
                            </div>
                            <div className="birth-day">
                                <h5 className="title-info-text">NGÀY SINH</h5>
                                <span>08/10/2004</span>
                            </div>
                        </div>
                        <div className="info-text-2">
                            <div className="phone">
                                <h5 className="title-info-text">
                                    SỐ ĐIỆN THOẠI
                                </h5>
                                <span>058**6*666</span>
                            </div>
                            <div className="country">
                                <h5 className="title-info-text">QUÊ QUÁN</h5>
                                <span>Hưng Yên, Việt Nam</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
