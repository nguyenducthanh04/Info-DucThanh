import React, { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import { useMediaQuery } from "react-responsive";
import "./sidebar.css";
import personIcon from "../../assets/images/person.png";
import bookIcon from "../../assets/images/open-book.png";
import heartIcon from "../../assets/images/heart-sidebar.png";
import blogIcon from "../../assets/images/blogging.png";
function SideBar() {
    const [activeSection, setActiveSection] = useState("about");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };
    return (
        <div style={{ marginTop: "21px" }}>
            {isMobile ? (
                <div
                    className={`${
                        isDarkMode
                            ? "dark-mode-sidebar-mobile"
                            : "sidebar-mobile"
                    }`}
                >
                    <Link to={"/"} className="link-sidebar">
                        <div
                            className={`${
                                activeSection === "about"
                                    ? "active-btn"
                                    : "self-mobile"
                            }`}
                            onClick={() => setActiveSection("about")}
                        >
                            <div className="icon-self-mobile">
                                <img
                                    src={personIcon}
                                    className="person-icon-mobile"
                                    alt="self"
                                ></img>
                            </div>
                            <div className="title-self-mobile">
                                <h5>BẢN THÂN</h5>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/education"} className="link-sidebar">
                        <div
                            className={`${
                                activeSection === "education"
                                    ? "active-btn"
                                    : "education-mobile"
                            }`}
                            onClick={() => setActiveSection("education")}
                        >
                            <div className="icon-edu-mobile">
                                <img
                                    src={bookIcon}
                                    className="book-icon-mobile"
                                    alt="education"
                                ></img>
                            </div>
                            <div className="title-edu-mobile">
                                <h5>HỌC VẤN</h5>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/interest"} className="link-sidebar">
                        <div
                            className={`${
                                activeSection === "interest"
                                    ? "active-btn"
                                    : "interest-mobile"
                            }`}
                            onClick={() => setActiveSection("interest")}
                        >
                            <div className="icon-interest-mobile">
                                <img
                                    src={heartIcon}
                                    className="heart-icon-mobile"
                                    alt="interest"
                                ></img>
                            </div>
                            <div className="title-interest-mobile">
                                <h5>SỞ THÍCH</h5>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/blog"} className="link-sidebar">
                        <div
                            className={`${
                                activeSection === "blog"
                                    ? "active-btn"
                                    : "interest-mobile"
                            }`}
                            onClick={() => setActiveSection("blog")}
                        >
                            <div className="icon-interest-mobile">
                                <img
                                    src={blogIcon}
                                    className="heart-icon-mobile"
                                    alt="interest"
                                ></img>
                            </div>
                            <div className="title-interest-mobile">
                                <h5>BÀI VIẾT</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            ) : (
                <div
                    className={`${
                        isDarkMode ? "dark-mode-sidebar" : "sidebar"
                    }`}
                >
                    <Link to={"/"} className="link-sidebar">
                        <div
                            className="self"
                            onClick={() => setActiveSection("about")}
                        >
                            <div className="icon-self">
                                <img
                                    src={personIcon}
                                    className="person-icon"
                                    alt="self"
                                ></img>
                            </div>
                            <div className="title-self">
                                <h3>BẢN THÂN</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/education"} className="link-sidebar">
                        <div
                            className="education"
                            onClick={() => setActiveSection("education")}
                        >
                            <div className="icon-edu">
                                <img
                                    src={bookIcon}
                                    className="book-icon"
                                    alt="education"
                                ></img>
                            </div>
                            <div className="title-edu">
                                <h3>HỌC VẤN</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/interest"} className="link-sidebar">
                        <div
                            className="interest"
                            onClick={() => setActiveSection("interest")}
                        >
                            <div className="icon-interest">
                                <img
                                    src={heartIcon}
                                    className="heart-icon"
                                    alt="interest"
                                ></img>
                            </div>
                            <div className="title-interest">
                                <h3>SỞ THÍCH</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/blog"} className="link-sidebar">
                        <div
                            className="interest"
                            onClick={() => setActiveSection("interest")}
                        >
                            <div className="icon-interest">
                                <img
                                    src={blogIcon}
                                    className="heart-icon"
                                    alt="interest"
                                ></img>
                            </div>
                            <div className="title-interest">
                                <h3>BÀI VIẾT</h3>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default SideBar;
