import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "./sendmail.css";
function SendMail() {
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
                        isDarkMode
                            ? "dark-mode-main-self-send-mail-mobile"
                            : "main-self-send-mail-mobile"
                    }`}
                >
                    <div className="contact-section">
                        <div className="send-email-title-mobile">
                            <h1>Gửi mail</h1>
                        </div>
                        <div className="contact-method">
                            <div className="bg-wrapper">
                                <div className="content-container">
                                    <div className="display-screen-mobile">
                                        <div className="display-header">
                                            <div className="header-left">
                                                <div className="header-button close-btn"></div>
                                                <div className="header-button maximize-btn"></div>
                                                <div className="header-button minimize-btn"></div>
                                            </div>
                                            <div className="header-right">
                                                <div className="header-ellipsis"></div>
                                                <div className="header-ellipsis"></div>
                                                <div className="header-ellipsis"></div>
                                            </div>
                                        </div>
                                        <div className="display-body">
                                            <div className="body-section">
                                                <div className="application-form">
                                                    <form id="contactForm">
                                                        <div className="form-group">
                                                            <input
                                                                id="email"
                                                                name="email"
                                                                className="form-control"
                                                                placeholder="YOUR EMAIL"
                                                                required
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                id="name"
                                                                name="name"
                                                                className="form-control"
                                                                placeholder="YOUR NAME"
                                                                required
                                                            />
                                                        </div>
                                                        <div className="form-group message-group">
                                                            <textarea
                                                                id="content"
                                                                name="content"
                                                                className="form-control"
                                                                placeholder="MESSAGE"
                                                                required
                                                            ></textarea>
                                                        </div>
                                                        <div className="form-group action-buttons">
                                                            <button
                                                                className="form-button"
                                                                type="submit"
                                                            >
                                                                SEND
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className={`${
                        isDarkMode
                            ? "dark-mode-main-self"
                            : "main-self-send-mail"
                    }`}
                >
                    <div className="contact-section">
                        <div className="send-email-title">
                            <h1>Gửi mail</h1>
                        </div>
                        <div className="contact-method">
                            <div className="bg-wrapper">
                                <div className="content-container">
                                    <div className="display-screen">
                                        <div className="display-header">
                                            <div className="header-left">
                                                <div className="header-button close-btn"></div>
                                                <div className="header-button maximize-btn"></div>
                                                <div className="header-button minimize-btn"></div>
                                            </div>
                                            <div className="header-right">
                                                <div className="header-ellipsis"></div>
                                                <div className="header-ellipsis"></div>
                                                <div className="header-ellipsis"></div>
                                            </div>
                                        </div>
                                        <div className="display-body">
                                            <div className="body-section left-side">
                                                <div className="application-title">
                                                    <span>CONTACT</span>
                                                    <span>THANH</span>
                                                </div>
                                                <div className="application-contact">
                                                    CONTACT INFO : 0777566061
                                                </div>
                                            </div>
                                            <div className="body-section">
                                                <div className="application-form">
                                                    <form id="contactForm">
                                                        <div className="form-group">
                                                            <input
                                                                id="email"
                                                                name="email"
                                                                className="form-control"
                                                                placeholder="YOUR EMAIL"
                                                                required
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                id="name"
                                                                name="name"
                                                                className="form-control"
                                                                placeholder="YOUR NAME"
                                                                required
                                                            />
                                                        </div>
                                                        <div className="form-group message-group">
                                                            <textarea
                                                                id="content"
                                                                name="content"
                                                                className="form-control"
                                                                placeholder="MESSAGE"
                                                                required
                                                            ></textarea>
                                                        </div>
                                                        <div className="form-group action-buttons">
                                                            <button
                                                                className="form-button"
                                                                type="submit"
                                                            >
                                                                SEND
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SendMail;
